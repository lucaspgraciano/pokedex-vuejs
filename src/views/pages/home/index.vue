<template>
  <div>
    <app-header></app-header>
    <v-row align="center" class="mt-6">
      <v-col cols="12" sm="4" v-for="(pokemon, index) of allPokemons" :key="index">
        <pokemon-card :pokemon="pokemon" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppHeader from "@/views/pages/components/layout/AppHeader";
import PokemonCard from "@/views/pages/home/components/pokemonCard";

export default {
  name: "Home",
  components: { AppHeader, PokemonCard },
  computed: {
    allPokemons() {
      return this.$store.getters.getPokemons;
    },
  },
};
</script>
