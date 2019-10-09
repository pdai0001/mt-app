<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="handleMouseLeave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, idx) of menu"
        :key="idx"
        @mouseenter="handleMouseEnter"
      >
        <i :class="item.type" />{{ item.name }}<span class="arrow" />
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="delMouseEnter"
      @mouseleave="delMouseLeave"
    >
      <template v-for="(item, idx) of curdetail.child">
        <h4 :key="idx">
          {{ item.title }}
        </h4>
        <span v-for="v of item.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuIndex',
  props: {

  },
  data () {
    return {
      kind: '',
      menu: [{
        type: 'food',
        name: '美食',
        child: [{
          title: '美食',
          child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
        }]
      }, {
        type: 'takeout',
        name: '外卖',
        child: [{
          title: '外卖',
          child: ['美团外卖']
        }]
      }, {
        type: 'hotel',
        name: '酒店',
        child: [{
          title: '酒店星级',
          child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
        }]
      }]
    }
  },
  computed: {
    curdetail () {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    handleMouseLeave () {
      const self = this
      self._timer = setTimeout(function () {
        self.kind = ''
      }, 150)
    },
    handleMouseEnter (e) {
      this.kind = e.target.querySelector('i').className
    },
    delMouseEnter () {
      clearTimeout(this._timer)
    },
    delMouseLeave () {
      this.kind = ''
    }
  }
}
</script>

<style lang="scss">

</style>
