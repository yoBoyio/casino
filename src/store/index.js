import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import Numbers from "./modules/luckyNumbers";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      state.isAuthenticated = !!state.user;
      router.push({ name: "Home" });
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    authAction({ commit }) {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit("setUser", user);
        } else {
          commit("setUser", false);
        }
      });
    },
    signUpAction({ commit }, payload) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((response) => {
          commit("setUser", response.user);
        })
        .catch((error) => {
          commit("setError", error.message);
        });
    },
    signInAction({ commit }, payload) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((response) => {
          commit("setUser", response.user);
        })
        .catch((error) => {
          commit("setError", error.message);
        });
    },
    signOutAction() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.commit("setUser", false);
        router.push({ name: "Login" }).catch((error) => {
          this.commit("setError", error.message);
        });
      });
    },
  },
  modules: {
    Numbers,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    isUserAuth(state) {
      return !!state.user;
    },
    getError(state) {
      return state.error;
    },
  },
});
