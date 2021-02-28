// const moduleProfile = {
//     state () {
//         return {
//             profileData: {
//             fullName: '',
//             imagePath: '',
//             location: '',
//             email: '',
//             skills: '',
//             about: ''
//       },}},
//     mutations: {
//         SET_PROFILEDATA: (state, payload) => {
//           state.profileData = payload;
//         },
//       },
//     actions: {GET_PROFILEDATA: async (context) => {
//         let data = await axios.get('https://api.mesto.co/v1/user?RqUid=cea00164-3e94-44cb-a94d-6fb997875c08', {
//           headers: {
//               'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0NDZiNDk2LWQ1MzktNDYwNi04NjA0LTQ5NjllMGM0MDFiZiIsImZ1bGxOYW1lIjoi0J3QsNGE0LjRgdCwINCS0LDQu9C40LXQstCwIiwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE2MTQ1MjE4NzAsImV4cCI6MTYxNDUyMjc3MH0.mHaQ1cMMhFjjbTv1R52QXeDlPloDdnM4oJ3Dn85W9co'
//           }}).then(response =>  response.data.user);
//           context.commit('SET_PROFILEDATA', data);
//       },
//     },
//     getters: { PROFILEDATA: state => {
//         return state.profileData;
//       }, }
//   }
  
// const moduleAuth = {
//     state(){
//         return {
//             tokenId: ''
//         }
//     },
//     getters: {
//         TOKENID: state => {
//             return state.tokenId;
//           },
//     },
//     mutations: { 
//         SET_TOKENID: (state, payload) => {
//             state.tokenId = payload;
//           },
//      },
//     actions: {
//         GET_TOKENID: async (context, email) => {
//             let tokenId = await axios.post('https://api.mesto.co/v1/auth/magicLink', {email}).then(response =>  response.data.tokenId);
//                           await axios.post('https://api.mesto.co/v1/email/sendMagicLink', {tokenId, email});
//           }
//         }
//     }
import { createStore } from 'vuex'
import {moduleAuth} from './auth/store/index.js'
import {moduleProfile} from './store/index.js'
  
 export const store = createStore({
    modules: {
        profile: moduleProfile,
        auth: moduleAuth
    }
  })
  