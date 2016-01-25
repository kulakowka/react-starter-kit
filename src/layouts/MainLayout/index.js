import React, {Component} from 'react'
import { Link } from 'react-router'
import styles from './MainLayout.styl'

export default class MainLayout extends Component {
  render () {
    return (
      <div className={styles.layout}>
        <h1>MainLayout</h1>
        <ul>
          <li><Link to="/">Root</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
