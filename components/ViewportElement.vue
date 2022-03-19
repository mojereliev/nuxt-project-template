<template lang="pug">
div(
  :class="[transitionId ? `viewport-element-${transitionId}` : '']"
  v-observe-visibility="{callback: visibilityChanged, once: !multiple, intersection: intersection}"
)
  slot

</template>

<script>
import { chunksIn, chunksOut } from '@/utils/animations';

const Transitions = {
  SLIDE_IN: 'slide-in',
  CHUNKS: 'chunks',
};

const Events = {
  ENTER: 'enter',
  ENTER_BOTTOM: 'enter-bottom',
  ENTER_TOP: 'enter-top',
  LEAVE: 'leave',
  LEAVE_BOTTOM: 'leave-bottom',
  LEAVE_TOP: 'leave-top',
};

export default {
  name: 'ViewportElement',

  components: {},

  props: {
    transitionId: {
      type: String,
      default: Transitions.SLIDE_IN,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    intersection: {
      type: Object,
      default: () => ({ rootMargin: '-60px' }),
    },
  },

  data() {
    return {
      chunksIn,
      chunksOut,
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    visibilityChanged(isVisible, entry) {
      // console.log('> ViewportElement: visibilityChanged:', isVisible, entry);

      const transitionVisibleClassName = this.transitionId
        ? `viewport-element-${this.transitionId}_visible`
        : '';

      if (isVisible) {
        if (transitionVisibleClassName) {
          entry.target.classList.add(transitionVisibleClassName);
        }
        this.$emit(Events.ENTER, entry);

        if (entry.boundingClientRect.top > 0) {
          this.$emit(Events.ENTER_BOTTOM, entry);
        } else {
          this.$emit(Events.ENTER_TOP, entry);
        }

        if (this.transitionId === Transitions.CHUNKS) {
          chunksIn(this.$el);
        }
      } else {
        if (transitionVisibleClassName) {
          entry.target.classList.remove(transitionVisibleClassName);
        }
        this.$emit(Events.LEAVE, entry);

        if (entry.boundingClientRect.top > 0) {
          this.$emit(Events.LEAVE_BOTTOM, entry);
        } else {
          this.$emit(Events.LEAVE_TOP, entry);
        }
      }
    },
  },
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .viewport-element-slide-in
    opacity 0
    transform translateY(30rem)
    transition opacity .7s ease, transform .7s ease

    &_visible
      transform translateY(0)
      opacity 1

  .viewport-element-chunks
    opacity 0

    &_visible
      opacity 1

</style>
