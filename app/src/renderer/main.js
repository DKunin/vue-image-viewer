import Vue from 'vue';
import Electron from 'vue-electron';
import Resource from 'vue-resource';
import Router from 'vue-router';
import Mousetrap from 'mousetrap';

// eslint-disable-next-line
Mousetrap.bind('command+backspace', function processClick(e) {
    // eslint-disable-next-line
    console.log(e);
});

import App from './App';
import routes from './routes';

Vue.use(Electron);
Vue.use(Resource);
Vue.use(Router);
Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  ...App,
}).$mount('#app');
