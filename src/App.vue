<template>
  <div class="container">
    <ListMemes />
  </div>
</template>

<script>
/* Composition API */
import ListMemes from './components/ListMemes.vue';
export default {
  name: 'App',
  components: {
    ListMemes
  }
}
</script>

<style>
</style>
