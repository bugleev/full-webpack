import React, { Component } from 'react'
import styles from "./body.module.sass"
export default class Body extends Component {
  render() {
    return (
      <div className={styles.container}>
        I.m a body
        <button onMouseEnter={this.props.hover} onClick={this.props.click}>Click me</button>
      </div>
    )
  }
}
