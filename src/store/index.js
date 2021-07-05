import { createStore } from 'vuex'
import {moduleAuth} from './auth'
import { moduleParticipants } from './participants'
import {moduleProfile} from './profile'
  
 export const store = createStore({
    modules: {
        profile: moduleProfile,
        auth: moduleAuth,
        participants: moduleParticipants
    }
  })
  