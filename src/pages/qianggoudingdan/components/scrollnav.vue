<template>
  <div class="scrollnav">
    <ul>
      <li :class="num===index?'active':''" v-for="(item,index) of scrollnavList" :key="index" @click="navclick(index)">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
import { EventBus } from '@/assets/js/bus.js'
export default {
  name: 'scrollnav',
  data () {
    return {
      scrollnavList: [
        {
          id: 'qga01',
          title: '全部'
        },
        {
          id: 'qga02',
          title: '待填订单号'
        },
        {
          id: 'qga03',
          title: '审核订单'
        },
        {
          id: 'qga04',
          title: '待返款'
        },
        {
          id: 'qga05',
          title: '订单有误'
        },
        {
          id: 'qga06',
          title: '申述中'
        },
        {
          id: 'qga07',
          title: '已完成'
        },
        {
          id: 'qga08',
          title: '未晒单'
        }
      ],
      num: 0
    }
  },
  methods: {
    navclick (index) {
      this.num = index
      EventBus.$emit('loadingnav', true)
    }
  }
}
</script>
<style lang="stylus" scoped>
.active
  color red
  border-bottom solid .12rem red
.scrollnav
  width 100%
  height 2.2rem
  overflow-x scroll
  background #fff
  color #666
.scrollnav::-webkit-scrollbar
  display none
.scrollnav ul
  width 150%
  height 2.2rem
  line-height 2.2rem
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content space-around
  align-items center
.scrollnav li
  display inline-block
  font-size .8rem
</style>
