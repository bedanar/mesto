<template>
  <nav class="nav">
      <div class="container">
          <ul class="nav__nav-list">
          <li v-for="item in navItems" :key="item.id" class="nav-list__item" :style="`background: url(${item.url}) no-repeat left 1px top 2px`"><a>{{item.name}}</a></li>
      </ul>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navItems: [{name: 'События', url: '/event.svg'}, 
      {name: 'Участники', url: '/part.svg'}, 
      {name: 'Группы', url: '/groups.svg'}, 
      {name: 'Мои контакты', url: '/books.svg'}, 
      {name: 'Сообщения', url: '/messages.svg'},
      {name: 'Взаимопомощь', url: '/Heart.svg'}]
    }
  },
  methods: {
      itemClass() {
          
      }
  },
  computed: {},
  watch: {}

}
</script>
<style>
    .nav{
        background-color: #fff;
        padding: 35px;
        max-width: 264px;
    }
    .nav-list__item a{
        margin-bottom: 24px;
        font-family: Manrope;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #16061C;
        padding-left: 36px;
    }
    .nav-list__item a:hover{
        color: #B85CF0;
    }
</style>