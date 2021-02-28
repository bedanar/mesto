<template>
  <div class="container">
      <div class="profile-content">
          <img  class="profile-content-img" :src="profile.imagePath">
          <div class="profile-content__profile-information">
              <div class="profile-information__username" >{{profile.fullName}}</div>
              <ul class="profile-information__actions">
                  <li class="actions__item add">Добавить</li>
                  <li class="actions__item mess">Сообщение</li>
              </ul>
              <ul class="profile_information__personalinfo">
                  <li class="personalinfo__item location" >{{profile.location}}</li>
                  <li class="personalinfo__item email">{{profile.email}}</li>
                  <li class="personalinfo__item website"></li>
              </ul>
              <ul class="profile-information__contacts">
                  <li class="contacts__item" v-for="item in contactsItem" :key="item.id"><a><img :src="item"></a></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'UserData',
  data() {
    return {
      contactsItem: [
           '/Facebook.svg',
            '/VK.svg',
            '/Twitter.svg',
            '/Telegram.svg',
            '/Instagram.svg',
            '/Linkedin.svg'
        ],
    }
  },
  mounted(){
    this.$store.dispatch('profile/GET_PROFILEDATA');
  },
  methods: {},
  computed: {
      profile(){
          return this.$store.getters['profile/PROFILEDATA'];
      },
  },
  watch: {}

}
</script>
<style>
    .profile-content{
        background: white;
        margin-top: 0;
        display: flex;
        max-width: 700px;
    }
    .profile-content-img{
        width: 256px;
        height: 265px;
    }
    .profile-content__profile-information{
        padding-top: 16px;
        padding-left: 16px;
    }
    .profile-information__username{
        font-family: Manrope;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #4A0A52;
    }
    .profile-information__actions{
        display: flex;
        font-family: Manrope;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        margin-top: 10px;
    }
    .actions__item{
        background-repeat: no-repeat;
        padding-left: 25px;
        background-position: 1px center;
    }
    .add{
        background-image: url('../../assets/add.svg');
    }
    .mess{
        background-image: url('../../assets/message.svg');
    }
    .actions__item:not(:last-child){
        margin-right: 25px;
    }
    .profile_information__personalinfo{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    .personalinfo__item{
        font-family: Manrope;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        color: #16061C;
        background-repeat: no-repeat;
        padding-left: 25px;
        background-position: 1px center;
    }
    .personalinfo__item:not(:last-child){
        margin-right: 25px;
        margin-bottom: 10px;
    }
    .location{
        background-image: url('../../assets/location.svg');
    }
    .email{
        background-image: url('../../assets/message.svg');
    }
    .website{
        background-image: url('../../assets/compas.svg');
    }
    .profile-information__contacts{
        margin-top: 20px;
    }
    .contacts__item{
        display: inline-block;
    }
    .contacts__item:not(:last-child){
        margin-right: 10px;
    }
</style>