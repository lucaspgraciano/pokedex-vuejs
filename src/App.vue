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

export default {
  name: "App",
  components: { AppContainer },
};
</script>
