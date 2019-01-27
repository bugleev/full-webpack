import React, { Component } from 'react'
import { right } from "./body.module.sass"
import { Consumer } from '../contexts/LeftSideContext';

export default class RightModule extends Component {
  componentDidUpdate(prevProps){
    console.log("right update", prevProps, this.props);
    
  }
  render() {
    console.log("right rerender", this.props);
    return (
      <Consumer>
        {({rightCounter, incrementRight}) => (
          <div className={right}>
            <span>{rightCounter}</span>
          <button onClick={incrementRight}>Increment Right</button>
        </div>
        )}       
      </Consumer>
    )
  }
}
