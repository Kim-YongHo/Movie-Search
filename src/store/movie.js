import axios from "axios";

export default {
  namespaced: true, // store에서 하나의 모듈로 사용할 수 있다는 의미

  // data 의미
  state: () => ({
    movies: [],
    message: "",
    loading: false,
  }),

  // computed 의미 (계산된 상태)
  getters: {},

  // method와 유사 (state의 값은 오로지 mutations로만 변경 가능)
  // state의 변경할 내용만 mutations에서 처리해주면 됨
  mutations: {
    updateState(state, payload) {
      // ['movie', 'message', 'loading']
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    assignMovies(state, Search) {
      state.moives = Search;
    },
    resetMovies(state) {
      state.moives = [];
    },
  },
  //비동기로 동작 // method와 유사
  actions: {
    async searchMovies({ commit }, payload) {
      //state를 직접 호출 불가해서 context를 사용
      const { title, type, number, year } = payload;
      const OMDB_API_KEY = "7035c60c";
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`
      );
      const { Search, totalResults } = res.data;
      commit("updateState", {
        movies: Search,
      });
    },
  },
};
