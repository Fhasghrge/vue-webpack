<template>
  <div class="tabbar_item" @click="itemClick">
    <div v-if="!is_active">
      <slot name = 'item-icon'></slot>
    </div>
    <div v-else>
      <slot name = 'item-icon-active'></slot>
    </div>
    <div :style="active_style">
      <slot name = 'item-text'></slot>
    </div>
    <!-- <img src="../../assets/images/tabbar/home.svg" alt="home"> -->
    <!-- <div>Home</div> -->
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    active_color: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // is_active: true
    }
  },
  computed: {
    is_active () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    active_style () {
      return this.is_active ? {color: this.active_color} : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
  .tabbar_item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabbar_item  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
