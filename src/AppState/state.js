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
  incrementLeft = () => {
    this.leftCounter++;
  }
  @action
  incrementRight = () => {
    this.rightCounter++;
  }
  @action
  fetchPosts = async () => {
    this.posts = [];
    fetchStatus.startFetching();
    const response = await fetchStatus.verifyFetch('https://jsonplaceholder.typicode.com/posts');
    if (!response) return;
    const data = await response.json();
    fetchStatus.fetchStop();
    this.posts = data
  }

  get postsFormatted() {
    return this.posts;
  }
}

export const appState = new ApplicationState();