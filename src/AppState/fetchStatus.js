import { observable, action } from "mobx";

class FetchStatus {
  @observable
  isFetching = false;
  @observable
  fetchSuccess = false;
  @observable
  errorMessage = "";
  @action
  startFetching = () => {
    this.isFetching = true;
    this.fetchSuccess = false;
    this.errorMessage = "";
  }
  @action
  fetchStop = () => {
    this.isFetching = false;
    this.fetchSuccess = true;
  }
  @action
  verifyFetch = async request => {
    try {
      const response = await fetch(request);
      if (!response.ok) {
        const error = await response.json();
        process.env.NODE_ENV === "development" && console.log(error);
        this.fetchStop();
        this.fetchError(`Status: ${error.status}. Message: ${error.message}`);
        return false;
      } else {
        return response;
      }
    } catch (error) {
      this.fetchError(`Ошибка сети! Нет соединения с сервером. Message: ${error.message}`);
    }
  }
  @action
  fetchError = (text) => {
    this.isFetching = false;
    this.fetchSuccess = false;
    this.errorMessage = text;
  }
  @action
  tryCatchWrapper = (
    func,
    argsArr,
    message = "Ошибка конвертации данных с сервера"
  ) => {
    try {
      return func(...argsArr);
    } catch (error) {
      this.fetchError(`${message}. \n Текст ошибки: ${error}`);
    }
    return null;
  }
}

export const fetchStatus = new FetchStatus();