<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterAlive"/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
        console.log('reload')
      })
    }
  },
  name: 'App',
  // 在页面加载时读取sessionStorage里的状态信息
  created () {
    if (sessionStorage.getItem('collectId SYcollectId')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('collectId SYcollectId'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里，防止页面刷新vuex中state刷新后数据丢失
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('collectId SYcollectId', JSON.stringify(this.$store.state))
    })
    if (JSON.parse(localStorage.getItem('userinfo')) === null) {
      window.addEventListener('beforeunload', () => {
        sessionStorage.removeItem('collectId SYcollectId')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  background #fbf5f5
</style>
