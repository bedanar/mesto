<template>
    <div class="filter container">
        <div class="filter-icon">
            <p>Фильтры</p>
        </div>
        <div class="location-filter">
            <p class="location-icon">Страна, регион, город</p>
        </div>
        <div class="skills-search">
            <p class="skills-search__icon">Поиск по навыкам</p>
            <ul class="skills-tags__list">
                <li v-for="item in skillsItems" :key="item.id" class="skills-tag" :style="`background: url(${item.url}) no-repeat`">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Filter',
  data() {
      return {
          skillsItems: [
              {name: 'Development', url: '/close-tag.svg'},
              {name: 'Consultations', url: '/close-tag.svg'},
              {name: 'NoCode', url: '/close-tag.svg'},
              {name: 'SEO', url: '/close-tag.svg'},
              {name: 'Marketing', url: '/close-tag.svg'},
          ]
      }
  }
}
</script>
<style>
    .filter{
        background-color: #fff;
        padding: 35px;
        max-width: 264px;
        font-family: 'Manrope';
        margin-top: 24px;
    }
    .filter-icon{
        padding-left: 24px;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: #16061C;
        background-image: url('/filter.svg');
        background-repeat: no-repeat;
        background-position: left center;
        margin-bottom: 24px;
    }
    .location-filter{
        background-color: #F1F1F1;
        padding: 12px 12px 12px 12px;
        margin-bottom: 8px;
    }
    .skills-search{
        background-color: #F1F1F1;
        padding: 12px 12px 12px 12px;
    }
    .location-icon{
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #16061C;
        background-image: url('/location.svg');
        background-repeat: no-repeat;
        padding-left: 20px;
        background-position: top left;
    }
    .skills-search__icon{
        padding-left: 20px;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #16061C;
        background-repeat: no-repeat;
        background-image: url('/flash.svg');
        background-position: top left;
        margin-bottom: 19px;
    }
    .skills-tags__list{
        display: flex;
        flex-wrap: wrap;
    }
    .skills-tag{
        border: 1px solid #B6AFBC;
        box-sizing: border-box;
        border-radius: 2px;
        padding: 2px;
        margin-right: 4px;
        font-size: 11px;
        line-height: 14px;
        margin-top: 4px;
    }
    
</style>