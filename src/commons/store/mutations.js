import Vue from "vue";
import { mutations } from "@/commons/constants";

export default {
  [mutations.SET_ALL_POKEMONS](state, pokemons) {
    Vue.set(state, "pokemons", pokemons);
  },
  [mutations.SET_KEY_WORD_CURRENT_POKEMON](state, pokemon) {
    Vue.set(state.keyWordSearch, "pokemon", pokemon);
  },
  [mutations.SET_KEY_WORD_SEARCH_POKEMON](state, keyWord) {
    Vue.set(state.keyWordSearch, "keyWord", keyWord);
  },
};
