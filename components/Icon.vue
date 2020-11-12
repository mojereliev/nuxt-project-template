<template lang="pug">
  svg.icon(:class="iconClass")
    use(:xlink:href="iconId")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      iconId: `#icon-${this.name}`,
      iconClass: `icon_${this.name}`,
    };
  },
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .icon
    display block
    width 1em
    height 1em
    vertical-align top
    color currentColor

    use
      width 100%
      height 1em
      fill currentColor

    &_behance
      width (21em / 14)

    &_facebook
      width (7em / 15)

</style>
