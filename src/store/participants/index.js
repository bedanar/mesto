import http from '../../services/http';

export const moduleParticipants = {
  state() {
    return {
      participantsData: {
        fullName: '',
        imagePath: '',
        location: '',
        website: '',
        skills: '',
        about: ''
    },
  }},
  getters: {
    PARTICIPANTSDATA: state => {
      return state.participantsData;
    },
  },
  mutations: {
    SET_PARTICIPANTSDATA: (state, payload) => {
      state.participantsData = payload;
    },
  },

  actions: {
    GET_PARTICIPANTSDATA: async (context) => {
      let data = await http.get('/').then(response =>  response.data.user);
      context.commit('SET_PARTICIPANTSDATA', data);
    },
  },

  namespaced: true,
}