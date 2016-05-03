import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.context.router.replace('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
      if (nextProps.isAuthenticated) {
        this.context.router.replace('/dashboard')
      }
    }
  }

  render() {
    return (
      <div className="Home">
        Welcome.
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Home)
