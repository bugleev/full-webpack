import { observable, action } from "mobx";


class FetchStatus {
  @observable
  isFetching = false;
  @observable
  fetchSuccess = false;
  @observable
  errorMessage = "";
  @action
  startFetching=()=> {
    this.isFetching = true;
    this.fetchSuccess = false;
    this.errorMessage = "";
  }
  @action
  fetchStop=() =>{
    this.isFetching = false;
    this.fetchSuccess = true;
  }
  @action 
  fetchError=(text)=>{
    this.isFetching = false;
    this.fetchSuccess = false;
    this.errorMessage = text;
  }  
}

export const fetchStatus = new FetchStatus();