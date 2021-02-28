import { createStore } from 'vuex'
import {moduleAuth} from './auth'
import {moduleProfile} from './profile'
  
 export const store = createStore({
    modules: {
        profile: moduleProfile,
        auth: moduleAuth
    }
  })
  