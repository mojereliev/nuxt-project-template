<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.viewport-element(
    v-observe-visibility="{callback: visibilityChanged, once: true, intersection: {rootMargin: '-60px'}}"
  )
    slot

</template>

<script>
export default {
  name: 'ViewportElement',

  components: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add('viewport-element_visible');
      } else {
        entry.target.classList.remove('viewport-element_visible');
      }
    },
  },
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .viewport-element
    opacity 0
    transform translateY(30px)
    transition opacity .7s ease, transform .7s ease

    &_visible
      transform translateY(0)
      opacity 1

</style>
