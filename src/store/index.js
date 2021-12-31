import { createStore } from 'vuex';

import stores from './store.js';

export default createStore({
  modules: stores,
});
