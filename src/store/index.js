import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather: []
  },
  mutations: {
    SET_WEATHER_TO_STATE: (state, weather) => {
      state.weather = weather;
    }
  },
  actions: {
    GET_WEATHER_FROM_API({ commit }) {
      const API_KEY = '9f2f956728142e52c2ecac42c68843be';
      const API_CITY ="London";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${API_CITY}&appid=${API_KEY}`;
     
      
      axios(url, {
        method: "GET"
      })
        .then((weather) => {
          commit("SET_WEATHER_TO_STATE", weather.data);
          console.log(weather.data);
          return weather;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }
  },
  getters:{
    WEATHER(state) {
      return state.weather;
    },
  },
  modules: {
  }
})
