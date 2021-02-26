import axios from 'axios';
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      profileData: {
        fullName: '',
        imagePath: '',
        location: '',
        email: '',
        skills: '',
        about: ''
    },
  }},
  getters: {
    PROFILEDATA: state => {
      return state.profileData;
    },
  },
  mutations: {
    SET_PROFILEDATA: (state, payload) => {
      state.profileData = payload;
    },
  },

  actions: {
    GET_PROFILEDATA: (context) => {
      let data = axios.get('https://api.mesto.co/v1/user?RqUid=cea00164-3e94-44cb-a94d-6fb997875c08', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0NDZiNDk2LWQ1MzktNDYwNi04NjA0LTQ5NjllMGM0MDFiZiIsImZ1bGxOYW1lIjoi0J3QsNGE0LjRgdCwINCS0LDQu9C40LXQstCwIiwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE2MTQzNjc3NjcsImV4cCI6MTYxNDM2ODY2N30.W_daOAsVf5_JUX9pvJ9Zf1kMnMv6aagBgKKxB6zOoyo'
        }}).then(response =>  response.data.user);
        context.commit('SET_PROFILEDATA', data);
    },
  }})
