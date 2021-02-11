<template>
    <div class="container">
        <div class="user-description">
            <ul class="user-description__skills">
                <li class="skills__item" v-for="item in skillsData" :key="item.id"><button class="item__btn">{{item}}</button></li>
            </ul>
            <div class="user-description__personal-information">
                Hello! ☀ Purus praesent arcu turpis mi amet vulputate. 
                Ut sed sit viverra duis scelerisque ornare nisl. Ante 
                venenatis mauris ut pellentesque nulla mauris massa. 
                Suscipit congue egestas mi risus sit senectus. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing 
                congue dolor mauris aliquet venenatis dui eget iaculis. Nec pellentesque 
                vitae non, nunc nisi sodales viverra accumsan dapibus. Massa sollicitudin 
                consequat, amet egestas. Nec, amet, nibh nibh auctor ultricies dignissim 
                blandit sapien. Eu a, amet amet amet posuere mauris. Faucibus auctor ipsum 
                amet, suspendisse venenatis nibh at. 
                Convallis duis viverra velit varius varius viverra suscipit 
                suscipit amet. Ut accumsan varius eu, consequat amet eget ornare
                 tellus egestas. Velit elit id ultricies ornare non ullamcorper tellus 
                 scelerisque ut. Etiam ut cursus quis natoque id enim, in nunc, pulvinar.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
     skillsData: ['ai', 'marketing', 'consultation', 
     'team', 'analytics', 'consulting', 'fintech', 
     'no code', 'marketing', 'development', 'management']
    }
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