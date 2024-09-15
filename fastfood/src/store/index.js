// src/store/index.js
import { createStore } from 'vuex';


export default createStore({
  state() {
    return {
        showNavOrderstore: null,
        showNavHomestore: null,
        showLoyalty: null
    };
  },
  mutations: {
    SET_ORDER(state, ORDER) {
        state.showNavOrderstore = ORDER;
      },
      SET_HOME(state, HOME) {
        state.showNavHomestore = HOME;
      },
      SET_LOYALTY(state, LOYALTY) {
        state.showLoyalty = LOYALTY;
      },
  },
  actions: {
    async toggleOrder({commit}){
        commit('SET_ORDER', true);
        commit('SET_HOME', false);
        commit('SET_LOYALTY', false);
    },
    async closeOrder({commit}){
        commit('SET_ORDER', false);
        commit('SET_HOME', true);
        commit('SET_LOYALTY', false);
    },
    async openLoyalty({commit}){
      commit('SET_ORDER', false);
      commit('SET_HOME', false);
      commit('SET_LOYALTY', true);
  },
  },
  getters: {
    NavOrder: state => state.showNavOrderstore,
    NavHome: state => state.showNavHomestore,
    NavLoyalty: state => state.showLoyalty,
  }
});
