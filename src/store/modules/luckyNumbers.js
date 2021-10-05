const state = {
  numbers: [],
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  },
  getSpecificNumber: (state) => (number) => {
    return state.numbers.filter((item) => {
      return item.value === number;
    });
  },
};

const actions = {
  addNumbers({ commit }, numbers) {
    commit("setNumbers", numbers);
  },
  deleteNumbers({ commit }) {
    commit("resetNumbers");
  },
};

const mutations = {
  setNumbers: (state, numbers) => {
    state.numbers = numbers;
  },
  resetNumbers: (state) => {
    state.numbers = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
