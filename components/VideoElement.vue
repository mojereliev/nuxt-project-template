<template lang="pug">
  .video-element(
    v-if="isImage",
    :style="{backgroundImage: `url(${video.image})`}"
  )

  video.video-element(
    v-else,
    :poster="video.image",
    :autoplay="autoplay",
    loop,
    playsinline,
    muted
    :class="{'video-element_view_cover' : cover}",
    :data-object-fit="cover ? 'cover' : false",
    ref="video"
  )
    source(:src="video.webm" type="video/webm")
    source(:src="video.mp4" type="video/mp4")
    source(:src="video.ogv" type="video/ogg")

</template>

<script>
export default {
  name: 'VideoElement',

  components: {},

  props: {
    video: {
      type: Object,
      required: true,
    },
    cover: {
      type: Boolean,
      default: false,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    isImage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  watch: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    play() {
      if (this.$refs.video) {
        this.$refs.video.play();
      }
    },

    pause() {
      if (this.$refs.video) {
        this.$refs.video.pause();
      }
    },
  },
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .video-element
    display block
    width 100%
    background-size cover
    background-position 50%
    height 100%

    &_view
      &_cover
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        object-fit cover

</style>
