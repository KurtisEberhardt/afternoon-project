<template>
  <div class="pokemon" @click="setActivePokemon">
    <div class="media">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="itsbroken.png">
      <div class="media-body">
        <h5>{{ pokemon.name }}</h5>
        <p>Type: {{ pokemon.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { pokemonService } from '../services/PokeService'
export default {
  name: 'Pokemon',
  Props: {
    pokemon: Object
  },
  setup(props) {
    return {
      setActivePokemon() {
        pokemonService.setActivePokemon(props.pokemon)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
