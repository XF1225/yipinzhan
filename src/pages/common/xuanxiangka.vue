<template>
  <div>
    <div class="fenlei" v-for="(item,index) of List" :key="index">
      <h3>{{item.title}}</h3>
      <div class="fenlei-desc">
        <li v-for="(items,index) of item.desc" :key="index" :id="items.id" class="desc-li" :class="{activing:isactiving===index}" @click="handlexuanxiangka(index)">{{items.name}}</li>
      </div>
    </div>
    <div class="fenlei" v-for="(item,index) of shaixuantiaojian" :key="index">
      <h3>{{item.title}}</h3>
      <div class="fenlei-desc">
        <li v-for="(items,index) of item.desc" :key="index" :class="items.isSelected ? 'activing' : ''" class="desc-li" @click="handlesxtj(index,items)">{{items.name}}</li>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from '@/assets/js/bus.js'
export default {
  name: 'xuanxiangka',
  props: {
    List: Array,
    shaixuantiaojian: Array
  },
  data () {
    return {
      isactiving: 0,
      activing: 0
    }
  },
  methods: {
    handlexuanxiangka (index) {
      this.isactiving = index
    },
    handlesxtj (index, items) {
      this.activing = index
      items.isSelected = !items.isSelected
    }
  },
  mounted () {
    EventBus.$on('isactiving', (isactiving) => {
      this.isactiving = isactiving
    })
  }
}
</script>
<style lang="stylus" scoped>
.fenlei
  width 100%
  display flex
  flex-direction column
  border-top solid .5px #eee
.fenlei h3
  font-size .8rem
  padding .5rem 0 .3rem .5rem
.fenlei-desc
  width 95%
  margin .2rem auto
  text-align center
  display flex
  flex-direction row
  justify-content start
  flex-wrap wrap
  .desc-li
    width 30%
    margin .3rem .2rem
    padding .3rem 0
    background #eee
    display inline-block
    font-size .8rem
    border-radius .3rem
  .activing
    color red
    background #f3b6ca
</style>
