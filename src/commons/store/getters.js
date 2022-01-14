export default {
  getPokemons(state) {
    return state.pokemons;
  },
  getDetailedPokemons(state) {
    return state.detailedPokemons;
  },
  getKeyWord(state) {
    return state.keyWordSearch.keyWord;
  },
  getKeyWordCurrentPokemon(state) {
    return state.keyWordSearch.currentPokemon;
  },
};
