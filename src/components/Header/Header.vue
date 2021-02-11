<template>
  <header class="header">
      <div class="container flex">
          <img src="../../assets/logotype.svg">
        <div class="search-form">
            <input type="text" class="input" placeholder="Поиск участников">
        </div>
        <div class="photo-name">
          <p class="surname">{{userSurname}}</p>
          <img src="../../assets/user_pic.png">
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userSurname: 'Василиса В.',
    }
  },
  methods: {},
  computed: {},
  watch: {}

}
</script>
<style>
  .header{
      background: radial-gradient(53.56% 53.56% at 50% 0%, #4A195B 0%, #320E3F 100%);
      /* min-height: 60px; */
      padding-top: 10px;
      padding-bottom: 10px;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .input{
    background: rgba(255, 255, 255, 0.1);
    padding: 9px 200px 9px 15px;
    font-size: 16px;
    color: white;
    border: 0px;
    background-image: url('../../assets/Vector.svg');
    background-repeat: no-repeat;
    background-position: 385px 15px;
  }
  .surname{
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin-right: 20px;
  }
  .photo-name{
    display: flex;
    align-items: center;
  }
</style>