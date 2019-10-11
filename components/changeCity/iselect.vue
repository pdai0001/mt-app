<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select
      v-model="pvalue"
      placeholder="省份"
    >
      <el-option
        v-for="item of province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="城市"
    >
      <el-option
        v-for="item of city"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <span class="name">直接搜索:</span>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Iselect',
  props: {

  },
  data () {
    return {
      province: [],
      pvalue: '',
      city: [],
      cvalue: '',
      input: '',
      cities: []
    }
  },
  watch: {
    async pvalue (newPvalue) {
      const self = this
      const { status, data: { city } } = await self.$axios.get(`/geo/province/${newPvalue}`)
      if (status === 200) {
        self.city = city.map((item) => {
          return {
            value: item.id,
            label: item.name
          }
        })
        self.cvalue = ''
      }
    }
  },
  async mounted () {
    const self = this
    const { status, data: { province } } = await self.$axios.get('/geo/province')
    if (status === 200) {
      self.province = province.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  methods: {
    querySearchAsync: _.debounce(async function (query, cb) {
      const self = this
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.includes(query)))
      } else {
        const { status, data: { city } } = await self.$axios.get('/geo/city')
        if (status === 200) {
          self.cities = city.map((item) => {
            return {
              value: item.name
            }
          })
          cb(self.cities.filter(item => item.value.includes(query)))
        }
      }
    }, 200),
    handleSelect (item) {
      this.$store.dispatch('geo/setCity', item.value)
      // this.$store.state.geo.position.city = item.value
      window.location.href = '/'
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/iselect.scss";
</style>
