<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.image
    img.image__element(:src="data.images[0].url")

</template>

<script>
export default {
  name: 'Image',

  components: {},

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted: {},

  beforeDestroy() {},

  methods: {},
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .image
    &__element
      display block
      width 100%

</style>
