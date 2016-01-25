import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './MainLayout.styl'

export default class MainLayout extends Component {
  render () {
    return (
      <div className={styles.layout}>
        <ul className={styles.menu}>
          <li><IndexLink to="/" activeClassName={styles.active}>Root</IndexLink></li>
          <li><Link to="/about" activeClassName={styles.active}>About</Link></li>
        </ul>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
