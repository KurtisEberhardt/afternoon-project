const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class PokeService {
  async searchPokemon() {
    const res = await api.get('bulbasaur')
    AppState.Pokemon = res.results
  }

  setActivePokemon(Pokemon) {
    AppState.activePokemon = Pokemon
  }
}

export const pokeService = new PokeService()
