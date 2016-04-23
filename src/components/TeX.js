import React, { Component, PropTypes } from 'react'
import katex from 'katex'

class TeX extends Component {

  static propTypes = {
    data: PropTypes.string.isRequired,
  };

  render() {
    const math = katex.renderToString(this.props.data)
    return (
      <span dangerouslySetInnerHTML={ { __html: math } } />
    )
  }

}

export default TeX
