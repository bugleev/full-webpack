import React, { Component } from 'react'
import { container } from "./body.module.sass"
import LeftModule from './LeftModule';
import RightModule from './RightModule';
export default class Body extends Component {
  componentDidUpdate(prevProps){
    console.log("body update", prevProps, this.props);
    
  }
  render() {
    console.log("body rerendr", this.props);
    return (
      <div className={container}>              
        <LeftModule />
        <RightModule />
      </div>
    )
  }
}
