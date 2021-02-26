import axios from 'axios';
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      profileData: [
        {fullName: ''},
        {imagePath: ''},
        {location: ''},
        {email: ''}]
    }
  },

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
    GET_PROFILEDATA: async (context) => {
      let {data} = axios.get('https://api.mesto.co/v1/user?RqUid=cea00164-3e94-44cb-a94d-6fb997875c08', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0NDZiNDk2LWQ1MzktNDYwNi04NjA0LTQ5NjllMGM0MDFiZiIsImZ1bGxOYW1lIjoi0J3QsNGE0LjRgdCwINCS0LDQu9C40LXQstCwIiwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE2MTQzNjIwNzIsImV4cCI6MTYxNDM2Mjk3Mn0.loNTb6g-11CK8P-vNt0C1EOpCpo0Lgl94wbJUIqmSI0'
        }}).then(response => (this.info = response.data.user));
      context.commit('SET_PROFILEDATA', data);
    },
  },
});
// import { createStore } from 'vuex'
// import { createApp } from 'vue'

// const store = createStore({
//   state () {
//     return {
//       count: 1
//     }
//   }
// })
