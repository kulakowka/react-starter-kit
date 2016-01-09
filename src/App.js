import React, {Component} from 'react'
import styles from './App.styl'

const appName = 'App.js'

export default class App extends Component {
  render () {
    return (
      <div className={styles.app}>{appName}</div>
    )
  }
}
