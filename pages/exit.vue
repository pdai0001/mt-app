<template>
  <div class="" />
</template>

<script>
export default {
  layout: 'blank',
  middleware: async (ctx) => {
    const { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  },
  props: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
