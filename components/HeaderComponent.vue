<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.HEADER.header(:class="color ? `header_color_${color}` : ''")
    +e.ROUTER-LINK.logo(:to="{name: 'index'}")
      +e.ICON.logo-icon(name="behance")

</template>

<script>
import Icon from '@/components/Icon';

export default {
  name: 'HeaderComponent',

  components: {
    Icon,
  },

  props: {
    color: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    right rem($baseOffset)
    top rem($baseOffset)
    z-index 50
    transition color .3s ease

    &_color
      &_black
        color $black

    &__logo
      color currentColor
      font-size rem(30)

    &__logo-icon
      min-height 21px
      min-width 131px

</style>
