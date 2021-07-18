import Vue from 'vue';

const platformDetect = process.browser
  ? require('@/utils/platformDetect')
  : null;

Vue.mixin({
  computed: {
    isMobilePlatform() {
      return platformDetect?.detectMobile.isMobile;
    },
    isMobile() {
      return this.isMobilePlatform && this.$mq === 'sm';
    },
    isTablet() {
      return platformDetect?.detectTablet.isTablet && this.$mq === 'md';
    },
  },
});
