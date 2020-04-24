<template>
  <div class="searchcontent">
    <div class="searchheader">
      <router-link tag="img" to="/" class="fanhui" src="static/icon/zuojiantouh.png"></router-link>
      <div class="search-input">
        <img src="static/icon/sousuo.png" @click="handleadd">
        <input type="text" class="search-content" placeholder="最火的单品都在这里" v-model="inputval" @keyup="inputvalue" @keyup.enter="handleadd" maxlength="9">
        <img src="static/icon/shanchu2.png" @click="clearinput">
      </div>
      <input type="button" class="sousuo" value="搜索" @click="handleadd">
    </div>
    <div class="contents">
      <h2 class="rementitle">热门搜索</h2>
      <div class="remencontent"></div>
      <div class="lishi">
        <h2>历史搜索</h2>
        <img src="static/icon/shanchu3.png" alt="" v-show="showlist" @click="clearitem">
        <span src="" v-show="!showlist"></span>
      </div>
      <div class="lishicontent">
      <li v-for="(item,index) of list" :key="index" @click="tosearch">{{item}}</li>
      </div>
    </div>
    <dialogs v-show="showtoast" @change="closedialogs"></dialogs>
  </div>
</template>
<script>
import dialogs from '@/pages/common/dialog'
export default {
  name: 'searchcontent',
  components: {dialogs},
  data () {
    return {
      showlist: true,
      inputval: '',
      list: [],
      showtoast: false
    }
  },
  activated () {
    if (this.list.length === 0) {
      this.showlist = false
    } else {
      this.showlist = true
    }
  },
  created () {
    if (localStorage.getItem('list') === null) {
      return false
    } else {
      this.list = localStorage.getItem('list').replace(/[`~!@#$%^&*()_"{}\\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g, '')
      this.list = this.list.split(',').filter(item => {
        return item && item.trim()
      })
    }
  },
  methods: {
    handleadd () {
      let timer = null
      if (this.inputval === '') {
        this.showtoast = true
        return
      }
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] === this.inputval) {
          this.$router.push('/chaojifan')
          return
        }
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.$router.push('/chaojifan')
      }, 500)
      this.list.unshift(this.inputval)
      if (this.list.length > 5) {
        this.list.splice(5, 1)
      }
      this.saveStorage()
    },
    clearinput () {
      this.inputval = ''
    },
    clearitem () {
      this.list = []
      this.showlist = false
      this.saveStorage()
    },
    closedialogs () {
      this.showtoast = false
    },
    saveStorage () {
      localStorage.setItem('list', JSON.stringify(this.list))
    },
    // 去掉输入框输入空格
    inputvalue () {
      this.inputval = this.inputval.replace(/\s+/g, '')
    },
    // 点击历史记录跳转
    tosearch () {
      this.$router.push('/chaojifan')
    }
  }
}
</script>
<style lang="stylus" scoped>
.searchheader
  width 100%
  background #fff
  height 2.5rem
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  border-bottom solid .1rem #eee
  .fanhui
    width 1.3rem
    height 1.3rem
    padding 0 .3rem
  .search-input
    width 100%
    padding .2rem 0
    background #eee
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    border-radius .2rem
  .search-content
    width 100%
    background #eee
    border 0
    outline none
    font-size .8rem
  .search-input img
    width 1.1rem
    height 1.1rem
    padding 0 .15rem
  .sousuo
    width 3rem
    height 1.5rem
    background #fff
    border 0
    text-align center
    font-size .9rem
    outline none
.contents
  width 100%
  background #fff
  display flex
  flex-direction column
  .rementitle,.lishi h2
    width 95%
    margin 0 auto
    font-size .9rem
    font-weight bold
    padding .8rem 0
  .lishi
    width 95%
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
  .lishi img,.lishi span
    width 1rem
    height 1rem
  .lishicontent
    width 95%
    margin 0 auto
    display flex
    flex-direction row
    flex-wrap wrap
  .lishicontent li
    display inline-block
    font-size .8rem
    padding .5rem .8rem
    margin 0 .5rem .5rem 0
    background #eee
</style>
