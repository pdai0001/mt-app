<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{ $store.state.geo.position.city }}
    <nuxt-link
      class="changeCity"
      to="/changeCity"
    >
      切换城市
    </nuxt-link>
    [香河 廊坊 天津]
  </div>
</template>

<script>
export default {
  name: 'HeaderGeo',
  props: {

  },
  data () {
    return {

    }
  },
  // async mounted () {
  //   if (!this.$store.state.geo.position.city) {
  //     const { status, data: { province, city } } = await this.$axios.get('/geo/getPosition')
  //     if (status === 200) {
  //       this.$store.dispatch('geo/setPosition', { city, province })
  //     }
  //   }
  //   const { status: status2, data: { result } } = await this.$axios.get('/search/hotPlace', {
  //     params: {
  //       city: this.$store.state.geo.position.city.replace('市', '')
  //     }
  //   })
  //   if (status2 === 200) {
  //     this.$store.dispatch('home/setHotPlace', result)
  //   }
  //   const { status: status3, data: { menu } } = await this.$axios.get('/geo/menu')
  //   this.$store.dispatch('home/setMenu', status3 === 200 ? menu : [])
  // },
  // async activated () {
  //   const { status: status4, data: { result } } = await this.$axios.get('/search/hotPlace', {
  //     params: {
  //       city: this.$store.state.geo.position.city.replace('市', '')
  //     }
  //   })
  //   if (status4 === 200) {
  //     this.$store.dispatch('home/setHotPlace', result)
  //   }
  //   const { status: status5, data: { menu } } = await this.$axios.get('/geo/menu')
  //   this.$store.dispatch('home/setMenu', status5 === 200 ? menu : [])
  // },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
