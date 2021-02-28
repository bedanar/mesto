import axios from 'axios';

export const moduleProfile = {
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
    GET_PROFILEDATA: async (context) => {
      let data = await axios.get('https://api.mesto.co/v1/user?RqUid=cea00164-3e94-44cb-a94d-6fb997875c08', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0NDZiNDk2LWQ1MzktNDYwNi04NjA0LTQ5NjllMGM0MDFiZiIsImZ1bGxOYW1lIjoi0J3QsNGE0LjRgdCwINCS0LDQu9C40LXQstCwIiwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE2MTQ1MjE4NzAsImV4cCI6MTYxNDUyMjc3MH0.mHaQ1cMMhFjjbTv1R52QXeDlPloDdnM4oJ3Dn85W9co'
        }}).then(response =>  response.data.user);
        context.commit('SET_PROFILEDATA', data);
    },
  }}

  
