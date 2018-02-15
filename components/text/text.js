import {mapGetters} from 'vuex';

export default {
  name: 'text',

  components: {},

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },

  watch: {},

  created() {},

  mounted: function () {},

  methods: {},

  beforeDestroy() {}
};
