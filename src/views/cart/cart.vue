<template>
  <a-affix :offsetTop="120" @change="change">
    <a-button>120px to affix top</a-button>
  </a-affix>
</template>
<script>
export default {
  methods: {
    change (affixed) {
      console.log(affixed)
    }
  }
}
</script>
