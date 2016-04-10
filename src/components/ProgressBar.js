import React, { Component, PropTypes } from 'react'
import ProgressBar from 'progressbar.js'
import isEqual from 'lodash.isequal'

class Shape extends Component {
  static propTypes = {
    ShapeClass: PropTypes.func.isRequired,
    options: PropTypes.object,
    containerStyle: PropTypes.object,
    containerClassName: PropTypes.string,
  };

  static props = {
    ShapeClass: null,
    options: {},
    progress: 0,
    text: null,
    initialAnimate: false,
    containerStyle: {},
    containerClassName: '.progressbar-container',
  };

  state = {
    shape: null,
  };

  componentDidMount() {
    this._create(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.options, nextProps.options)) {
      this._destroy()
      this._create(nextProps, this.props)

      return
    }

    this._animateProgress(nextProps.progress)
    this._setText(nextProps.text)
  }

  componentWillUnmount() {
    this._destroy()
  }

  render() {
    const style = this.props.containerStyle
    const className = this.props.containerClassName

    return <div className={className} style={style} ref={ node => this.container = node }></div>
  }

  _create = (props, oldProps) => {
    if (this.state.shape !== null) {
      throw new Error('Progressbar is already created')
    }

    // setState function is not used to prevent a new render cycle
    // This handling happens outside of React component's lifecycle
    const container = this.container
    this.state.shape = new props.ShapeClass(
      container,
      props.options,
    )

    if (props.initialAnimate) {
      if (oldProps) {
        this._setProgress(oldProps.progress)
      }

      this._animateProgress(props.progress)
    } else {
      this._setProgress(props.progress)
    }

    this._setText(props.text)
  };

  _destroy = () => {
    if (this.state.shape) {
      this.state.shape.destroy()
      this.state.shape = null
    }
  };

  _animateProgress = (progress) => {
    this.state.shape.animate(progress)
  };

  _setProgress = (progress) => {
    this.state.shape.set(progress)
  };

  _setText = (text) => {
    if (text) {
      this.state.shape.setText(text)
    }
  };
}

export class Line extends Component {
  render() {
    return <Shape {...this.props} ShapeClass={ProgressBar.Line} />
  }
}

export class Circle extends Component {
  render() {
    return <Shape {...this.props} ShapeClass={ProgressBar.Circle} />
  }
}

export class SemiCircle extends Component {
  render() {
    return <Shape {...this.props} ShapeClass={ProgressBar.SemiCircle} />
  }
}
