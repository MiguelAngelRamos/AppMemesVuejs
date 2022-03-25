<template>
 <div class="col-3 meme">
   <h2 class="mt-2">{{ meme.name }}</h2>
   <img :src="meme.url" :alt="meme.name" class="mt-3 img-fluid">
   <!-- <pre>
     {{meme}}
   </pre> -->
 </div>
</template>

<script>
export default {
  props: {
    meme: Object,
  }
}
</script>

<style scoped>
  .meme {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed grey;
  }

  .meme img {
    max-height: 200px;
    max-width: 250px;
  }

  h2 {
    font-size: 20px;
  }
</style>