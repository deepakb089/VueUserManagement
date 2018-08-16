// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: localStorage
})

Vue.config.productionTip = false
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        loggedIn: false
    },
    mutations: {
        login: function (state) {
            state.loggedIn = true
            //localStorage.isLoggedIn = true;
        },
        logout: function (state) {
            state.loggedIn = false;
            //localStorage.isLoggedIn = false
        }
    },
    plugins: [vuexPersist.plugin]

})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
    render: h => h(App),
    store: store
})