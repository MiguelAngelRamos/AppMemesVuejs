<template>
  <h1 class="text-center">{{ title }}</h1>

  <div class="container">
    <div class="row">
      <div class="offset-3 col-6">
        <select @change="changeTotalShow" class="form-select mb-3">
          <option value="">All</option> 
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>

    <div class="row">
      <!-- Vamos a renderizar los memes -->
      <template v-for="meme of memes" :key="meme.id">
        <Meme :meme="meme"/>
      </template>
    </div>

  </div>
</template>

<script>
// composition Api 
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Meme from './Meme.vue';
export default {
  components: {
    Meme,
  },
  setup() {
    // obteniendo el store para acceder al state
    const store = useStore();
    const memes = computed(()=>store.state.memes);

    /* Una vez se montado el componente */
    onMounted(()=> {
       store.dispatch("getMemes");
       console.log('nuevo')
    });

    // Método
    const changeTotalShow = (event) =>{
      // console.log(event.target.value);
      store.dispatch("getMemes", {
        total: event.target.value
      })
     
    }
    return {
      title: store.state.titleApp,
      memes: memes,
      changeTotalShow
    }
  }
}
</script>

<style>

</style>