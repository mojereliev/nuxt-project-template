<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.index-root

</template>

<script>
export default {
  name: 'IndexRoot',

  components: {},

  async fetch({ store }) {
    await store.dispatch('fetchCommonData');
  },

  data() {
    return {
      enableCasesAnimation: false,
    };
  },

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {},
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .index-root
    display block

</style>
