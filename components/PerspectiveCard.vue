<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.perspective-card
    +e.inner(
      :style="perspectiveStyles"
    )
      slot

</template>

<script>
import throttle from '@/utils/throttle';

export default {
  name: 'PerspectiveCard',

  components: {},

  props: {
    gyroscope: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Number,
      default: 50,
    },
  },

  data() {
    return {
      isLeave: false,
      listener: document.querySelector('body'),
      onDeviceMotion: null,
      onMouseLeave: null,
      onMouseMove: null,
      perspectiveStyles: null,
    };
  },

  mounted() {
    this.onMouseMove = throttle((e) => {
      const windowWidth = window.innerWidth;

      const rect = this.$el.getBoundingClientRect();

      const left = Math.round(rect.left - this.padding);
      const right = Math.round(rect.left + rect.width + this.padding);
      const top = Math.round(rect.top - this.padding);
      const bottom = Math.round(rect.top + rect.height + this.padding);

      const centerX = Math.round(rect.left + rect.width / 2);
      const centerY = Math.round(rect.top + rect.height / 2);

      const x = centerX - e.clientX;
      const y = centerY - e.clientY;

      const maxRotateX = (0.8 / rect.width) * windowWidth;
      const maxRotateY = (0.8 / rect.width) * windowWidth;

      let rotateX = 0;
      let rotateY = 0;

      if (e.clientX > left
        && e.clientX < right
        && e.clientY > top
        && e.clientY < bottom) {
        rotateX = (maxRotateX / (rect.width / 2)) * y;
        rotateY = (maxRotateY / (rect.height / 2)) * x * -1;
      }

      if (rotateX > maxRotateX) { rotateX = maxRotateX; }
      if (rotateX < maxRotateX * -1) { rotateX = maxRotateX * -1; }
      if (rotateY > maxRotateY) { rotateY = maxRotateY; }
      if (rotateY < maxRotateY * -1) { rotateY = maxRotateY * -1; }

      if (!this.isLeave) {
        this.perspectiveStyles = {
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
        };
      }

      this.isLeave = false;
    }, 100);

    this.onMouseLeave = () => {
      this.isLeave = true;
      this.perspectiveStyles = null;
    };

    this.onDeviceMotion = (e) => {
      const { x } = e.accelerationIncludingGravity;
      const { y } = e.accelerationIncludingGravity;

      const MAX_VALUE = 10;

      let resultX = x;
      let resultY = y - 5;

      resultY = resultY < -10
        ? -10 - resultY
        : resultY;

      resultX *= -5;
      resultY *= -5;

      if (resultX > MAX_VALUE) { resultX = MAX_VALUE; }
      if (resultX < MAX_VALUE * -1) { resultX = MAX_VALUE * -1; }
      if (resultY > MAX_VALUE) { resultY = MAX_VALUE; }
      if (resultY < MAX_VALUE * -1) { resultY = MAX_VALUE * -1; }

      this.perspectiveStyles = {
        transform: `rotateX(${resultY}deg) rotateY(${resultX}deg) translateZ(0)`,
      };
    };

    this.addListeners(this.listener);
  },

  beforeDestroy() {
    this.removeListeners(this.listener);
  },

  methods: {
    addListeners(element) {
      if (this.gyroscope) {
        window.addEventListener('devicemotion', this.onDeviceMotion);
      }
      element.addEventListener('mousemove', this.onMouseMove);
      element.addEventListener('mouseleave', this.onMouseLeave);
    },

    removeListeners(element) {
      if (this.gyroscope) {
        window.removeEventListener('devicemotion', this.onDeviceMotion);
      }
      element.removeEventListener('mousemove', this.onMouseMove);
      element.removeEventListener('mouseleave', this.onMouseLeave);
    },
  },
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .perspective-card
    perspective 1000px

    &__inner
      height 100%
      transform translateX(0) translateY(0) translateZ(0)
      transition transform .5s

</style>
