<template>
  <Menu mode="horizontal" active-name="1" style="flex: 1;" @on-select="selectMenuItem">
    <MenuItem v-for="item in menuList_show" :name="item.menu_id">
      {{item.menu_name}}
    </MenuItem>
    <Submenu name="more">
      <template slot="title">
        <Icon type="ios-more" size="40"/>
      </template>
      <Menu style="display:flex;width:400px;align-items: flex-start;flex-wrap: wrap">
        <MenuItem v-for="item in menuList_hide" :name="item.menu_id">
          {{item.menu_name}}
        </MenuItem>
      </Menu>
    </Submenu>
  </Menu>
</template>

<script>
import {getMenu} from '../../api/menu'
export default {
  name: 'header-menu',
  data () {
    return {
      menuList_show: [],
      menuList_hide: [],
    }
  },
  created () {
    getMenu().then(res => {
      this.menuList_show = res.data.slice(0, 7)
      this.menuList_hide = res.data.slice(7)
    })
  },
  methods: {
    selectMenuItem: function (menuId) {
      console.log('selemenu ', menuId)
      if (menuId === 'more') {

      }
    }
  }
}
</script>

<style scoped>
  .ivu-menu-horizontal.ivu-menu-light:after{
    background-color: transparent;
  }
</style>
