import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Explore from '../components/Explore'
import { resetErrorMessage } from '../actions'

class App extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleDismissClick (e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange (nextValue) {
    this.props.push(`/${nextValue}`)
  }

  renderErrorMessage () {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href='#' onClick={this.handleDismissClick}>Dismiss</a>)
      </p>
    )
  }

  render () {
    const { children, inputValue } = this.props
    return (
      <div>
        <Explore value={inputValue} onChange={this.handleChange} />
        <hr />
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.routing.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  push
})(App)
