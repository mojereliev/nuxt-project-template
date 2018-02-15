import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
  name: 'index-root',

  components: {},

  data() {
    return {
      enableCasesAnimation: false
    };
  },

  computed: {
    ...mapState([
      'activeCase',
      'cases',
      'loader'
    ]),

    ...mapGetters([
      'isMobile'
    ])
  },

  watch: {},

  created: function () {},

  mounted: function () {},

  methods: {
    ...mapMutations([
      'setLoadImages'
    ])
  },

  beforeDestroy() {}
};
