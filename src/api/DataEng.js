import http from './http';
import store from '../store';

let routes = store.getters.getRoutes;

export default class {
  static getVideosRecomend() {
    return http.get(routes.getVideos);
  }

  static getUpdateVideos() {
    return null;
  }
}
