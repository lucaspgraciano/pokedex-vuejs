import { actions, mutations } from "@/commons/constants";
import pokemonRequester from "@/commons/requesters/pokemonRequester";

export default {
  async [actions.GET_ALL_POKEMONS]({ commit }) {
    const pokemonsFound = await pokemonRequester.findAll();
    commit(mutations.SET_ALL_POKEMONS, pokemonsFound);
  },
};
