<template>
  <div>
    <h4>This is the Ant Desigon Demo</h4>
    <a-button type='primary'>Button</a-button>
    <a-button-group>
      <a-button type='primary'><a-icon type="step-backward" />GO</a-button>
    </a-button-group>
    <a-button-group>
      <a-button type='primary' icon='cloud'/>
      <a-button type='primary' icon='cloud-download'/>
    </a-button-group>
    <hr>
    <h4>GIRD && LAYOUT</h4>
    <a-row>
      <a-col :span='8'>suang</a-col>
      <a-col :span='8'>suang</a-col>
      <a-col :span='8'>suang</a-col>
    </a-row>
    <P>Center</P>
    <a-row type="flex" justify="center" align='middle'>
      <a-col :span='6'><p class="height-100">zhang</p></a-col>
      <a-col :span='6'><p class="height-100">shuang</p></a-col>
      <a-col :span='6'><p class="height-100">aaaaa</p></a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'catagory'
}
</script>
<style scoped>

</style>
