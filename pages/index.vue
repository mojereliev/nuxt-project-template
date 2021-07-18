<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.index-root

</template>

<script>
export default {
  name: 'IndexRoot',

  components: {},

  data() {
    return {
      enableCasesAnimation: false,
    };
  },

  async fetch({ store }) {
    await store.dispatch('fetchCommonData');
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
