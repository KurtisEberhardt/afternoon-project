<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <i class="fas fa-spinner fa-spin" v-if="state.loading"></i>
    <span class="mx-2 text-black">Test Text</span>
    <div class="row">
      <div class="col">
        <!-- NOTE Search gets defined with prevent to stop reload -->
        <form @submit.prevent="searchPokemon">
          <!-- NOTE We bind to the state with v-model from our input -->
          <input class="mx-1" type="text" placeholder="Pokemon Name..." v-model="state.query">
          <button type="submit" class="btn btn-outline-success">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { pokeService } from '../services/PokeService'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      loading: true,
      pokemon: computed(() => AppState.pokemon)

    })
    onMounted(async() => {
      await pokeService.searchPokemon()
      state.loading = false
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
