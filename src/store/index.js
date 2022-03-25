import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "La aplicación de Memes",
    memes: []
  },
  getters: {
  },
  mutations: {
    // El payload son los nuevos datos
    setMemes(state, payload) {
      state.memes = payload;
    }
  },
  actions: {
    async getMemes({commit}, params) {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes")
        const result = await response.json();
        // console.log(params);
        // console.log(result);
        // console.log(params?.total);
        if(!params?.total) {
          // !undefined => true
          // todos los memes
          console.log('obteniendo todos los memes');
          commit("setMemes", result.data.memes)
        } else {
          console.log(`Cargando.. ${params.total} memes`)
          const resultadoTemporal = [];
          result.data.memes.forEach((meme, index) => {
            if(index < params.total) {
              resultadoTemporal.push(meme);
            }
          });
          commit("setMemes", resultadoTemporal);
        }
        
      } catch (error) {
        throw error;
      }
    }
  },
  modules: {
  }
})
