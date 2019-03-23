import Vue from 'vue';
import Vuex from 'vuex';
import profileStore from './store/profile-store';
import ProfileGenerator from './components/ProfileGenerator.vue';

Vue.use(Vuex);
const store = profileStore();
store.commit('reload');

new Vue({
  el: '#quwtaraProfileGeneratorApp',
  store,
  components: {ProfileGenerator},
});
