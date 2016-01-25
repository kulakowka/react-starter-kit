import React, {Component} from 'react'
import { Link } from 'react-router'
import styles from './MainLayout.styl'

export default class MainLayout extends Component {
  render () {
    return (
      <div className={styles.layout}>
        <ul className={styles.menu}>
          <li><Link to="/">Root</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
