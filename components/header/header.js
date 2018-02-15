import icon from '~/components/icon/icon.vue';

import {fadeInDown, fadeOutUp} from 'assets/helpers/animations';

export default {
  name: 'header-component',

  components: {
    icon
  },

  props: {
    color: {
      type: String
    }
  },

  data() {
    return {
      fadeInDown: fadeInDown,
      fadeOutUp: fadeOutUp
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted: function () {},

  methods: {
    hookLeave(el, done) {
      fadeOutUp(el, done, '+=.3');
    }
  },

  beforeDestroy() {}
};
