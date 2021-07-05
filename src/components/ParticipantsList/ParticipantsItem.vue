<template>
  <div class="container">
      <div class="participant-profile">
          <div class="pp-left">
              <div class="pp-image">
                  <img src="/user_pic.png" alt="" class="participant-image">
                  <div class="square"></div>
              </div>
              <div class="mgt-20">
                  <a class="add-icon">Добавить</a>
              </div>
              <div class="mgt-20">
                  <a class="message-icon">Сообщение</a>
              </div>
              <div class="mgt-20 contacts-text">
                  <p class="mutual">135</p> 
              общих контактов </div>
          </div>
          <div class="pp-right">
              <div class="flex">
                    <div class="">
                        <h1 class="pp-name">{{participants.fullName}}</h1>
                        <p class="pp-location">St.Petersburg, Russia </p>
                        <a href="" class="pp-website">www.kostyasuperstar.io</a>
                    </div>
                    <div class="pp-status">готов помогать</div>
              </div>
              <ul class="pp-skills">
                  <li class="pp-skills__item" v-for="item in ppSkills" :key="item.id" >{{item}}</li>
              </ul>
              <div class="pp-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, urna consequat 
                  sollicitudin nibh turpis scelerisque placerat cursus facilisi. Purus praesent 
                  arcu turpis mi amet vulputate. Ut sed sit viverra duis scelerisque ornare nisl. 
                  Ante venenatis mauris ut pellentesque nulla mauris massa. Suscipit congue egestas mi risus sit senectus. 
              </div>
              <a href="" class="read-more">Читать далее</a>
          </div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'ParticipantsItem',
  components: {
      
  },
  data() {
    return {
      ppSkills: ['ai', 'marketing', 'consultation', 'team', 'analytics', 'consulting', 'eco', 'fintech']
    }
  },
  mounted(){
    this.$store.dispatch('participants/GET_PARTICIPANTSDATA');
  },
  methods: {},
  computed: {
      participants(){
        // eslint-disable-next-line no-debugger
        // debugger
          return this.$store.getters['participants/PARTICIPANTSDATA'];
      },
  },
}
</script>
<style>
    .participant-profile{
        display: flex;
        background-color: #fff;
        max-width: 840px;
        padding: 16px;
        margin-top: 30px;
    }
    .pp-image{
        position: relative;
    }
    .flex{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .pp-left{
        padding-right: 42px;
    }
    .pp-status{
        background: #4A0A52;
        border-radius: 2px;
        padding: 4px;
        color: white;
        font-family: 'Manrope';
    }
    .square{
        position: absolute;
        width: 8px;
        height: 8px;
        background: #00FFC2;
        border: 2px solid #FFFFFF;
        bottom: -2px;
        right: -4px;
    }
    .add-icon{
        font-family: 'Manrope';
        font-weight: bold;
        font-size: 12px;
        color: #16061C;
        padding-left: 24px;
        background-image: url('/add.svg');
        background-repeat: no-repeat;
        background-position: left center;
    }
    .message-icon{
        font-family: 'Manrope';
        font-weight: bold;
        font-size: 12px;
        color: #16061C;
        padding-left: 24px;
        background-image: url('/messages.svg');
        background-repeat: no-repeat;
        background-position: left center;
    }
    .mgt-20{
        margin-top: 20px;
    }
    .mutual{
        font-family: 'Manrope';
        font-weight: bold;
        font-size: 12px;
        color: #4A0A52;
        margin-right: 4px;
    }
    .contacts-text{
        font-family: 'Manrope';
        font-size: 12px;
        color: #4A0A52;
        display: flex;
    }
    .pp-name{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #4A0A52;
    }
    .pp-location{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #727272;
        margin-top: 4px;
    }
    .pp-website{
        font-family: 'Manrope';
        font-size: 12px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #16061C;
        margin-top: 4px;
    }
    .pp-skills{
        display: flex;
        margin-top: 17px;
    }
    .pp-skills__item{
        padding: 4px;
        margin-right: 4px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        color: #727272;
        border: 1px solid #F1F1F1;
        box-sizing: border-box;
        border-radius: 2px;
        margin-bottom: 17px;
    }
    .pp-description{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        color: #16061C;
        margin-bottom: 16px;
    }
    .read-more{
        font-family: Manrope;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        text-decoration-line: underline;
        color: #16061C;
    }
</style>