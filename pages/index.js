import {mapGetters} from 'vuex';

export default {
  name: 'index-root',

  components: {},

  data() {
    return {
      enableCasesAnimation: false
    };
  },

  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },

  watch: {},

  created: function () {},

  mounted: function () {},

  methods: {},

  beforeDestroy() {}
};
