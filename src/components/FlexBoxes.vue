<template>
  <div class="container flex-boxes">
      <Navbar />
      <UserProfile />
  </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import UserProfile from './User Profile/UserProfile.vue'

export default {
  name: 'FlexBoxes',
  components: {
      Navbar,
      UserProfile
  },
  data() {
    return {
      
    }
  },
  methods: {},
  computed: {},
  watch: {}

}
</script>
<style>
    .flex-boxes{
        display: flex;
        margin-top: 24px;
        align-items: flex-start;
    }
</style>