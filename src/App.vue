<template>
  <v-app>
    <v-main>
      <app-container>
        <router-view />
      </app-container>
    </v-main>
  </v-app>
</template>

<script>
import AppContainer from "@/views/pages/components/layout/AppContainer";
import { actions } from "@/commons/constants";

export default {
  name: "App",
  components: { AppContainer },
  created: async function () {
    await this.$store.dispatch(actions.GET_ALL_POKEMONS);
  },
};
</script>
