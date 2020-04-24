<template>
  <div class="bangzhucontent" @touchmove.prevent>
    <div class="bangzhudesc" v-for="item of bangzhuzhongxinList" :key="item.id">
      <p>{{item.title}}</p>
      <img src="static/icon/youjiantou.png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'bangzhucontent',
  data () {
    return {
      bangzhuzhongxinList: [
        {
          id: 'bangzhu01',
          title: '账号问题'
        },
        {
          id: 'bangzhu02',
          title: '买家常见问题'
        },
        {
          id: 'bangzhu03',
          title: '0元试用申请流程'
        },
        {
          id: 'bangzhu04',
          title: '淘宝/京东买号认证问题'
        },
        {
          id: 'bangzhu05',
          title: '抢购秒杀活动流程'
        },
        {
          id: 'bangzhu06',
          title: '亿品赞金币的使用方法'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.bangzhucontent
  width 100%
  height 100vh
  overflow hidden
  background #eee
  display flex
  flex-direction column
  align-items center
  .bangzhudesc:last-of-type
    border 0
  .bangzhudesc
    width 100%
    height 2.5rem
    line-height 2.5rem
    background #fff
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    border-bottom solid .1rem #eee
  .bangzhudesc p
    font-size .8rem
    padding-left .5rem
    color #666
  .bangzhudesc img
    width 1rem
    height 1rem
    padding-right .5rem
</style>
