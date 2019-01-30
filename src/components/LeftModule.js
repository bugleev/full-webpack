import React, { Component } from 'react'
import { left } from "./body.module.sass"
import { observer } from "mobx-react";
import { appState } from "../AppState/state";

@observer
export default class LeftModule extends Component { 
  componentDidMount(){  
    console.log("update left");    
  } 
  render() {       
    return (    
          <div className={left}>
            <span>{appState.leftCounter}</span>
          <button onClick={appState.incrementLeft}>Increment Left</button>
        </div>     
    )
  }
}
