import axios from 'axios';

export const moduleAuth = {
  state() {
    return {
      tokenId: ''
    }
  },
  getters: {
    TOKENID: state => {
      return state.tokenId;
    },
  },
  mutations: {
    SET_TOKENID: (state, payload) => {
      state.tokenId = payload;
    },
  },

  actions: {
    GET_TOKENID: async (context, email) => {
      let tokenId = await axios.post('https://api.mesto.co/v1/auth/magicLink', {email}).then(response =>  response.data.tokenId);
                    await axios.post('https://api.mesto.co/v1/email/sendMagicLink', {tokenId, email});
    }
  }}