<template>
  <div>
    <app-header></app-header>
    <v-card v-for="(pokemon, index) of allPokemons.results" :key="index">
      <v-card-title> {{ pokemon.name }} </v-card-title>
      <v-card-subtitle></v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import AppHeader from "@/views/pages/components/layout/AppHeader";

export default {
  name: "Home",
  components: { AppHeader },
  computed: {
    allPokemons() {
      return this.$store.getters.getPokemons;
    },
  },
};
</script>
