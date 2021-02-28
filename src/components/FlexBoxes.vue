<template>
  <div class="">
    <Header />
    <div class="container flex-boxes">
      <Navbar />
      <UserProfile  />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import UserProfile from './User Profile/UserProfile.vue';
import Header from './Header/Header.vue';
export default {
  name: 'FlexBoxes',
  components: {
      Navbar,
      UserProfile,
      Header
  },
  data() {
    return {
    }
  },
  mounted(){
      this.$store.dispatch('GET_PROFILEDATA');
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