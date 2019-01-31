import { observable, action } from "mobx";
import { fetchStatus } from "./fetchStatus";

class ApplicationState {
  @observable
  leftCounter = 0;
  @observable
  rightCounter = 0;
  @observable
  posts = [];
  @action
  incrementLeft=()=> {
    this.leftCounter++;
  }
  @action
  incrementRight=() =>{
    this.rightCounter++;
  }
  @action 
  fetchPosts= async ()=>{
    this.posts = [];     
    try {
      fetchStatus.startFetching();
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json();
      if(data) fetchStatus.fetchStop();
      this.posts = data;     
    } catch (error) {      
      fetchStatus.fetchError("falied to fetch!")
    }    
  }
}

export const appState = new ApplicationState();