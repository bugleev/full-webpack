import React, { Component } from 'react'
import { left } from "./body.module.sass"
import { MyContext } from "../contexts/LeftSideContext"


export default class LeftModule extends Component {
  static contextType = MyContext;
  componentDidMount(){
    this.context.incrementLeft();
    console.log(this.context);
    
  } 
  render() {   
    const {leftCounter, incrementLeft} = this.context;
    return (    
          <div className={left}>
            <span>{leftCounter}</span>
          <button onClick={incrementLeft}>Increment Left</button>
        </div>     
    )
  }
}
