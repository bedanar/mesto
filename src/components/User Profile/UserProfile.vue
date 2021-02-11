<template>
  <div class="container">
      <UserData />
      <UserDescription />
  </div>
</template>

<script>
import UserData from './UserData.vue';
import UserDescription from './UserDescriptioin.vue'

export default {
  name: 'UserProfile',
  components: {
      UserData,
      UserDescription
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

</style>