<template lang="pug">
  div
</template>

<script>
export default {
  layout: 'error',
  created() {
    this.$router.push({ name: 'index' });
  },
};
</script>
