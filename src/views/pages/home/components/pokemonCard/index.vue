<template>
  <div>
    <v-card width="100%" outlined class="mx-auto">
      <v-card-title primary-title class="justify-center">{{ pokemon.name | capitalize }}</v-card-title>
      <pokemon-sprite :sprite="pokemonSpriteUrl"/>
    </v-card>
  </div>
</template>

<script>
import { pokemonRequester } from "@/commons/requesters";
import PokemonSprite from "@/views/pages/home/components/pokemonCard/PokemonSprite";

export default {
  name: "pokemon-card",
  components: { PokemonSprite },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pokemonSpriteUrl: null,
    };
  },
  mounted: async function () {
    const response = await pokemonRequester.findByIdOrName(this.pokemon.name)
    this.pokemonSpriteUrl = response.sprites.front_default
  },
  methods: {

  }
};
</script>

