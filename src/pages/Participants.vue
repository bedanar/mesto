<template>
    <Header />
    <div class="container flex-boxes">
      <div class="mgr-24">
          <div class="mgt-24"><Navbar /></div>
          <div class="mgt-24"><Filter /></div>
      </div>
      <div class="participants mgt-24">
          <div class="pp-header">
              <h1 class="pp-heading">Участники</h1>
              <span class="found">Найдено: <span class="found-results">34</span></span>
              <div class="inputs-checks">
                  <input type="checkbox" class="input-check">Готовы помочь
                  <input type="checkbox" class="input-check">Только онлайн
              </div>
          </div>
          <ParticipantsList />
      </div>
      
    </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import Filter from '../components/Filter-bar/Filter.vue';
import ParticipantsList from '../components/ParticipantsList/ParticipantslIst.vue'

export default {
    name: 'ParticipantsPage',
    components: {
        Header,
        Navbar,
        Filter,
        ParticipantsList
    },
    mounted(){
      this.$store.dispatch('GET_PARTICIPANTSDATA');
  },
}
</script>

<style>
.flex-boxes{
    display: flex;
    margin-top: 24px;
    align-items: flex-start;
}
.mgt-24{
    margin-top: 24px;
}
.mgr-24{
    margin-right: 24px;
}
.pp-header{
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
}
.pp-heading{
    font-family: 'Manrope';
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #4A0A52;
}
.found{
    font-family: 'Manrope';
    margin-right: 410px;
    margin-left: 13px;
    font-weight: 500;
    font-size: 12px;
    color: #727272;
}
.found-results{
    color: #4A0A52;
}
.inputs-checks{
    margin-left: 0;
    margin-right: 0;
}
.input-check{
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #16061C;
    padding-left: 8px;
}
</style>