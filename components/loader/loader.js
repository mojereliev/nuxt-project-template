import {mapState, mapMutations} from 'vuex';

const imagesLoaded = process.browser
  ? require('vue-images-loaded')
  : null;

export default {
  name: 'loader',

  components: {},

  directives: {
    imagesLoaded
  },

  data() {
    return {
      value: 0,
      interval: null
    };
  },

  computed: {
    ...mapState([
      'app',
      'loader'
    ]),

    loaderVisibility() {
      return !this.loader.isLoaded &&
        this.loader.images !== null &&
        this.value > 4;
    }
  },

  watch: {
    value() {
      if (this.value >= this.loader.progress && this.value >= 30) {
        clearInterval(this.interval);
      }
    },

    'loader.images'() {
      this.value = 0;
    },

    'loader.progress'() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.value = this.value + 1;
      }, 10);
    }
  },

  created() {},

  mounted: function () {},

  methods: {
    ...mapMutations([
      'setLoaderProgress'
    ]),

    imageProgress(instance) {
      const value = instance.progressedCount * 100 / instance.images.length;
      this.setLoaderProgress(value);
    },

    hookEnter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      const value = el.querySelector('.loader__value');

      tl.set(el, {opacity: 0})
        .set(value, {scale: .5})
        .to(el, .3, {opacity: 1, clearProps: 'opacity'}, '+=.3')
        .to(value, .3, {scale: 1, clearProps: 'scale'}, '-=.3');
    },

    hookLeave(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      const value = el.querySelector('.loader__value');

      tl.set(el, {opacity: 1})
        .set(value, {scale: 1})
        .to(el, .3, {opacity: 0})
        .to(value, .3, {scale: .5}, '-=.3');
    }
  },

  beforeDestroy() {}
};
