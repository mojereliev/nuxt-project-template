import {mapMutations} from 'vuex';

import {fadeInDown, fadeOut} from 'assets/helpers/animations.js';

export default {
  name: 'about',

  components: {},

  data() {
    return {
      fadeInDown: fadeInDown,
      fadeOut: fadeOut
    };
  },

  computed: {},

  watch: {},

  created() {
    this.setUiColor('black');
  },

  mounted: function () {},

  methods: {
    ...mapMutations([
      'setUiColor'
    ])
  },

  beforeDestroy() {}
};
