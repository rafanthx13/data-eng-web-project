// Decide DEV/PROD
let URL; // BackEnd
if(window.location.hostname == 'localhost'){
  // local
  URL = 'http://localhost:3000'; // falsk
} else {
  // production
  URL = 'https://price-log-server.herokuapp.com'
}

const routes = {
  state: {
    getVideos: URL+'/show-videos',
    updateVideos: URL+'/update-db',
  },
  getters: {
    getRoutes(state) {
      return state;
    }
  }

};

export default { routes };