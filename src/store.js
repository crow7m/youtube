import Vue from 'vue';
import Vuex from 'vuex';
import videoStore from './storeModules/videoStore';

Vue.use(Vuex);

const store = new Vuex.Store({
                                 modules: {
                                     videoStore
                                 }
                             });
export default store;