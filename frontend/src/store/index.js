import { createStore } from "vuex";

console.log(localStorage.getItem("user"));
const user = JSON.parse(localStorage.getItem("user"));

const userStore = {
  state: {
    status: {
      loggedIn: user ? true : false,
    },
    user: user ? user : null,
    role: null,
    // currentActivePage: null,
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return state.status.loggedIn;
    },
  },
  // Mutation synchrone
  mutations: {
    setCurrentUser(state, currentUser, logged) {
      state.user = currentUser;
      state.status.loggedIn = logged;
      localStorage.setItem("user", JSON.stringify(currentUser));
      localStorage.setItem("loggedIn", JSON.stringify(logged));
      console.log(localStorage.getItem("user"));
    },
    initialiseStore(state) {
      if (localStorage.getItem("user")) {
        state.user = JSON.parse(localStorage.getItem("user"));
        state.status.loggedIn = true;
      }
    },
  },
  // Action asynchrone
  actions: {
    login({ commit }, currentUser) {
      commit("setCurrentUser", currentUser, true);
    },
    logout({ commit }) {
      commit("setCurrentUser", null, false);
    },
  },
};

//  Vuex data into localStorage, will persist data after refresh.
//  Can save data to a database with an API too.
const store = createStore({
  modules: {
    user: userStore,
  },
});

export default store;
