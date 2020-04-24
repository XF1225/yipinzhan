<template>
  <div>
    <loginheader></loginheader>
    <logincontents></logincontents>
  </div>
</template>
<script>
import loginheader from './components/loginheader'
import logincontents from './components/logincontents'
import tabbar from '@/pages/shouye/components/footer'
export default {
  name: 'login',
  components: {
    loginheader,
    logincontents,
    tabbar
  }
}
</script>
<style lang="stylus" scoped>

</style>
