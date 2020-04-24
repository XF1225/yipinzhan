<template>
  <div class="indexnav">
    <div class="indexnav-desc" v-for="item of indexnav" :key="item.id" @click="handleclick(item.id)">
      <img :src="item.iconUrl">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexnav',
  data () {
    return {
      indexnav: [
        {
          id: '001',
          iconUrl: './static/icon/index_nav1.png',
          title: '每日任务'
        },
        {
          id: '002',
          iconUrl: './static/icon/index_nav2.png',
          title: '高价值试用'
        },
        {
          id: '003',
          iconUrl: './static/icon/index_nav3.png',
          title: '100%中奖'
        },
        {
          id: '004',
          iconUrl: './static/icon/index_nav4.png',
          title: '红包疯抢'
        },
        {
          id: '005',
          iconUrl: './static/icon/index_nav5.png',
          title: '买家社群'
        },
        {
          id: '006',
          iconUrl: './static/icon/index_nav6.png',
          title: '邀请有奖'
        },
        {
          id: '007',
          iconUrl: './static/icon/index_nav7.png',
          title: '中奖秘籍'
        },
        {
          id: '008',
          iconUrl: './static/icon/index_nav8.jpg',
          title: '新手指南'
        }
      ]
    }
  },
  methods: {
    handleclick (id) {
      if (id === '002') {
        this.$router.push('/mianfei')
      } else if (id === '003') {
        this.$router.push('/chaojifan')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.indexnav
  width 100%
  background #fff
  display flex
  flex-direction row
  flex-wrap wrap
  border-bottom solid .1rem #eee
  padding-bottom .3rem
  .indexnav-desc
    width 25%
    padding .5rem 0
    display flex
    flex-direction column
    justify-content center
    align-items center
  .indexnav-desc img
    width 60%
  .indexnav-desc p
    font-size .7rem
    padding-top .4rem
</style>
