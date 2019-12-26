<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'tabbar'
}
</script>
<style scoped>
  @import url("../../assets/css/base.css");
  #tabbar{
    display: flex;
    background-color:#f6f6f6;
    position: fixed;
    /* 设置占据整个屏幕的宽度 */
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgb(100, 100, 100, .2)
  }
</style>
