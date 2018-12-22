<template>
  <Layout style="height: 100%">
    <Header class="header">
      <a class="logo" href="javascript:void(0);" @click="toggleSiderMenu">
        <img src="http://i.oscar.baidu.com/common/static/images/logo_cd6ecce.png" alt="">
      </a>
      <span style="font-size: 20px;margin: 0 20px;">糯米影院管理系统</span>
      <HeaderMenu/>
    </Header>
    <Layout>
      <Sider class="sider-menu" :collapsible="true" collapsed-width="0" v-model="isCollapsed" width="240" :hide-trigger="true">
        <Menu active-name="1-2" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics" />
              Navigation One
            </template>
            <MenuGroup title="Item 1">
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
              <MenuItem name="1-3">Option 3</MenuItem>
              <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing" />
              Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
              <template slot="title">Submenu</template>
              <MenuItem name="3-1">Option 7</MenuItem>
              <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-cog" />
              Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
          <MenuItem name="5">Option 1</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Content> content</Content>
        <Footer> footer</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import HeaderMenu from './menu'

export default {
  name: 'Main',
  data () {
    return {
      isCollapsed: false,
      menuList: []
    }
  },
  methods: {
    toggleSiderMenu: function () {
      this.isCollapsed = !this.isCollapsed
    }
  },
  created () {
  },
  components: {
    HeaderMenu
  }
}
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    margin-bottom: 2px;
    padding: 0 30px;
  }
  .logo{
    display: flex;
    align-items: center;
  }
  .sider-menu{
    background-color: #ffffff;
  }

</style>
