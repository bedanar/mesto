<template>
  <div class="container">
      <div class="profile-content">
          <img src="../../assets/user_pic (1).png">
          <div class="profile-content__profile-information">
              <div class="profile-information__username">{{username}}</div>
              <ul class="profile-information__actions">
                  <li class="actions__item add">Добавить</li>
                  <li class="actions__item mess">Сообщение</li>
              </ul>
              <ul class="profile_information__personalinfo">
                  <li class="personalinfo__item location">St.Petersburg, Russia </li>
                  <li class="personalinfo__item email">konstana@gmail.com</li>
                  <li class="personalinfo__item website">www.nastysuperstar.io</li>
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
      username: 'Анастасия Константинопольская',
      contactsItem: [
          'src/assets/Facebook.svg',
          'src/assets/VK.svg',
          'src/assets/Twitter.svg',
          'src/assets/Telegram.svg',
          'src/assets/Instagram.svg',
          'src/assets/Linkedin.svg'
      ]
    }
  },
  methods: {},
  computed: {},
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
        background-image: url('../../assets/messages.svg');
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