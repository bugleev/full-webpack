import React, { Component } from 'react'
import { left } from "./body.module.sass"
import { observer } from "mobx-react";
import { appState } from "../AppState/state";

@observer
export default class LeftModule extends Component { 
  componentDidMount(){  
    appState.fetchPosts();    
  } 
  render() {
    console.log(appState.posts, "posts");
           
    return (    
          <div className={left}>
            <span>{appState.leftCounter}</span>
          <button onClick={appState.incrementLeft}>Increment Left</button>
          {appState.posts.map(el=>(<div key={el.id}><p>{el.title}</p></div>))}
        </div>     
    )
  }
}
