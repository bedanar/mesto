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
import Navbar from '../components/Navbar/Navbar.vue';
import UserProfile from '../components/UserProfile/UserProfile.vue';
import Header from '../components/Header/Header.vue';
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