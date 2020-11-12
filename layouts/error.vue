<template lang="pug">
include ../node_modules/bemto.pug/bemto

+b.PAGE-WRAPPER.error
  +e {{ errorStatusCode }}
  +e {{ $t('errors.subtitle') }}

  h2 {{ errorText }}
  h6 {{ $t('errors.whatToDo') }}

  p
    +e.A.refresh-button(
      href="/"
    ) {{ $t('errors.goToHome') }}
    = ' '
    | {{ $t('errors.specifyTheAddress') }}

</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  layout: 'error',
  computed: {
    errorText() {
      switch (this.errorStatusCode) {
        case 403:
          return this.$t('errors.403');
        case 404:
          return this.$t('errors.404');
        case 500:
          return this.$t('errors.500');
        case 503:
          return this.$t('errors.503');
        default:
          return this.$t('errors.default');
      }
    },
    errorStatusCode() {
      return this.error.statusCode || ':(';
    },
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.error
  padding-top 15rem

</style>
