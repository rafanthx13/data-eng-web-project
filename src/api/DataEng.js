import http from './http'
import store from '../store';

let url = store.getters.getRoutes.url;

export default class {

  static getVideosRecomend(){
    return http.get(url.base);
  }

  static getUpdateVideos(){
      return 
  }

  static delete(url_id){
    return http.delete(url.base + '/' + url_id);
  }

  static getCities(){
    return http.get(url.base)
  }

}