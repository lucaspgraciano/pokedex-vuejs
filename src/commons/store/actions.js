import { actions, mutations } from "@/commons/constants";
import pokemonRequester from "@/commons/requesters/pokemonRequester";

export default {
  async [actions.GET_ALL_POKEMONS]({ commit }) {
    const pokemonsFound = await pokemonRequester.findAll();
    commit(mutations.SET_ALL_POKEMONS, pokemonsFound);
  },
  async [actions.FIND_POKEMON_BY_ID_OR_NAME]({ commit }, keyWord) {
    commit(mutations.SET_KEY_WORD_SEARCH_POKEMON, keyWord);
    const pokemonFound = await pokemonRequester.findByIdOrName(keyWord);
    commit(mutations.SET_ALL_DETAILED_POKEMONS, pokemonFound);
  },
};
