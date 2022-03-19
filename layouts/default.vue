<template lang="pug">
  include ../node_modules/bemto.pug/bemto

  +b.page(
    id="app",
    :class="[" +
    "`page_ui_${uiColor}`," +
    "`page_platform_${isMobilePlatform ? 'mobile' : 'desktop'}`" +
    "]"
  )
    client-only
      Loader

    transition(
      appear,
      name="fade"
    )
      +e.wrapper(v-show="isReady")
        HeaderComponent

        +e.inner
          +e.container
            nuxt

            FooterComponent

</template>

<script>
import { mapState, mapMutations } from 'vuex';

import { fadeIn, fadeOut } from '@/utils/animations';
import HeaderComponent from '@/components/HeaderComponent';

export default {
  components: {
    HeaderComponent,
  },

  data() {
    return {
      fadeIn,
      fadeOut,
    };
  },

  // head() {
  //   return {
  //     title: this.commonData.meta.title,
  //     meta: [
  //       {hid: 'ogtitle', property: 'og:title', content: this.commonData.meta.title},
  //       {hid: 'description', name: 'description', content: this.commonData.meta.description},
  //       {hid: 'ogdescription', property: 'og:description', content: this.commonData.meta.description},
  //       {hid: 'ogimage', property: 'og:image', content: this.commonData.meta.og_image}
  //     ]
  //   };
  // },

  computed: {
    ...mapState([
      'commonData',
    ]),

    ...mapState('app', [
      'isReady',
      'uiColor',
    ]),
  },

  mounted() {
    switch (document.readyState) {
      case 'loading':
        document.addEventListener('DOMContentLoaded', () => {
          this.setAppReady(true);
        });

        window.onload = () => {
          this.setAppLoad(true);
        };
        break;

      case 'interactive':
        this.setAppReady(true);

        window.onload = () => {
          this.setAppLoad(true);
        };
        break;

      case 'complete':
        this.setAppReady(true);
        this.setAppLoad(true);
        break;

      default:
    }
  },

  methods: {
    ...mapMutations('app', [
      'setAppReady',
      'setAppLoad',
    ]),
  },
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
  html
  body
    height 100%

  // Style for root nuxt DOM element
  body
    > #__nuxt
      height 100%

  .page
    position relative
    height 100%
    background $white
    color $black
    transition background .2s ease
    overflow hidden

    &__wrapper
    &__container
    &__inner
      height 100%

    &__inner
      scroll()
      position relative

    &__container
      position relative

</style>
