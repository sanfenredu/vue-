<template>
  <div id="app">
    <lay-out></lay-out>
  </div>
</template>

<script>

import  LayOut   from  'layout'
export default {
  name: 'app',
  components: {
    LayOut
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  .el-upload 
    border 1px dashed #ccc 
    &:hover
     border-color #409EFF
</style>
