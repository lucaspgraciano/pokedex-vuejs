<template>
  <div>
    <app-header></app-header>
    <v-card>
      <v-card-title>Home Title</v-card-title>
      <v-card-subtitle>Home Subtitle</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import AppHeader from "@/views/pages/components/layout/AppHeader";

export default {
  name: "Home",
  components: { AppHeader },
};
</script>
