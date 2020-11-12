<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.magnetic-block(
    @mousemove="onMouseMove",
    @mouseleave="onMouseLeave",
    @mouseenter="onMouseEnter",
    :style="wrapperStyles"
  )
    +e.inner(
      ref="inner"
    )
      slot

</template>

<script>
import { TimelineLite } from 'gsap';
import { mapState } from 'vuex';

export default {
  name: 'MagneticBlock',

  components: {},

  props: {
    padding: {
      type: Number,
      default: 20,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  computed: {
    ...mapState([
      'app',
    ]),

    wrapperStyles() {
      return {
        padding: `${this.padding}px`,
        margin: `${this.padding * -1}px`,
      };
    },
  },

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    onMouseMove(e) {
      if (!this.disabled && !this.isMobilePlatform) {
        const rect = this.$el.getBoundingClientRect();
        const localX = ((e.x - rect.x - this.$el.offsetWidth / 2) / this.$el.offsetWidth) * this.padding * 2;
        const localY = ((e.y - rect.y - this.$el.offsetHeight / 2) / this.$el.offsetWidth) * this.padding * 2;

        const tl = new TimelineLite();

        tl.set(this.$refs.inner, {
          x: localX,
          y: localY,
        });
      }
    },

    onMouseEnter(e) {
      if (!this.disabled && !this.isMobilePlatform) {
        const rect = this.$el.getBoundingClientRect();
        const localX = ((e.x - rect.x - this.$el.offsetWidth / 2) / this.$el.offsetWidth) * this.padding * 2;
        const localY = ((e.y - rect.y - this.$el.offsetHeight / 2) / this.$el.offsetWidth) * this.padding * 2;
        const tl = new TimelineLite();

        tl.to(this.$refs.inner, 0.3, {
          x: localX,
          y: localY,
        });
      }
    },

    onMouseLeave() {
      const tl = new TimelineLite();

      tl.to(this.$refs.inner, 0.5, {
        x: 0,
        y: 0,
        clearProps: 'all',
      });
    },
  },
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .magnetic-block
    display inline-block
    vertical-align top

    &__inner
      transition transform .3s ease-out
      will-change transform

</style>
