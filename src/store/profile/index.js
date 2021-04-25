import http from '../../services/http';

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
      let data = await http.get('/user').then(response =>  response.data.user);
      context.commit('SET_PROFILEDATA', data);
    },
  },

  namespaced: true,
}

  
