<template>
    <div class="container">
        <div class="user-description">
            <ul class="user-description__skills">
                <li class="skills__item" v-for="item in info.skills" :key="item.id"><button class="item__btn">{{item}}</button></li>
            </ul>
            <div class="user-description__personal-information">
                {{info.about}}

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['info'],
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {}

}
</script>
<style>
  .user-description{
      background-color: #fff;
      margin-top: 25px;
      padding: 36px;
      max-width: 700px;
  }
  .user-description__skills{
      display: flex;
      flex-wrap: wrap;
  }
  .skills__item{
      margin-top: 8px;
      margin-right: 8px;
  }
  .item__btn{
      font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    align-items: center;
    color: #686868;
    padding: 4px 8px;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .user-description__personal-information{
      margin-top: 34px;
      font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: #16061C;
  }
</style>