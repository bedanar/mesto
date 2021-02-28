import axios from 'axios';

export const moduleAuth = {
  actions: {
    GET_TOKENID: async (context, email) => {
      let tokenId = await axios.post('https://api.mesto.co/v1/auth/magicLink', {email, RqUid: "a939dca3-dfc3-4750-887a-1893b3864058"}).then(response =>  response.data.tokenId);

      await axios.post('https://api.mesto.co/v1/email/sendMagicLink', {tokenId, email, RqUid: "a939dca3-dfc3-4750-887a-1893b3864058"});
    }
  },

  namespaced: true,
}