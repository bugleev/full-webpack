import { observable, action } from "mobx";


class ApplicationState {
  @observable
  leftCounter = 0;
  @observable
  rightCounter = 0;
  @action
  incrementLeft=()=> {
    this.leftCounter++;
  }
  @action
  incrementRight=() =>{
    this.rightCounter++;
  }
}

export const appState = new ApplicationState();