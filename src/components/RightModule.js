import React, { Component } from 'react'
import { right } from "./body.module.sass"
import { observer } from "mobx-react";
import { appState } from "../AppState/state";

@observer
export default class RightModule extends Component {
  componentDidUpdate(prevProps){
    console.log("right update", prevProps, this.props);
    
  }
  render() {
    console.log("right rerender", this.props);
    return (       
          <div className={right}>
            <span>{appState.rightCounter}</span>
          <button onClick={appState.fetchPosts}>Increment Right</button>
        </div>      
    )
  }
}
