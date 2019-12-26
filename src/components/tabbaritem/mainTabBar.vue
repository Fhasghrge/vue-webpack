<template>
  <div>
    <tab-bar>
      <tab-bar-item path = '/home'>
        <img slot="item-icon" src="../../assets/images/tabbar/home.svg" alt="home">
        <img slot="item-icon-active" src="../../assets/images/tabbar/home_active.svg" alt="home">
        <div slot="item-text">Home</div>
      </tab-bar-item>
      <tab-bar-item path = '/catagory'>
        <img slot="item-icon" src="../../assets/images/tabbar/category.svg" alt="category">
        <img slot="item-icon-active" src="../../assets/images/tabbar/category_active.svg" alt="category">
        <div slot="item-text">Category</div>
      </tab-bar-item>
      <tab-bar-item path = '/cart'>
        <img slot="item-icon" src="../../assets/images/tabbar/shopcart.svg" alt="shopcart">
        <img slot="item-icon-active" src="../../assets/images/tabbar/shopcart_active.svg" alt="shopcart">
        <div slot="item-text">Cart</div>
      </tab-bar-item>
      <tab-bar-item path = '/profile'>
        <img slot="item-icon" src="../../assets/images/tabbar/profile.svg" alt="profile">
        <img slot="item-icon-active" src="../../assets/images/tabbar/profile_active.svg" alt="profile">
        <div slot="item-text">Profile</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from '../tabber/Tabber'
import TabBarItem from './TabBarItem'
export default {
  name: 'mainTabBar',
  components: {
    TabBarItem,
    TabBar
  }
}
</script>
<style scoped>

</style>
