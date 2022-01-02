// Decide DEV/PROD
let URL; // BackEnd
if (window.location.hostname == 'localhost') {
  // local
  URL = 'https://data-eng-youtube-recomender.herokuapp.com'; // falsk
} else {
  // production
  URL = 'https://data-eng-youtube-recomender.herokuapp.com';
}

const routes = {
  state: {
    getVideos: URL + '/show-videos',
    updateVideos: URL + '/update-db',
  },
  getters: {
    getRoutes(state) {
      return state;
    },
  },
};

export default { routes };
