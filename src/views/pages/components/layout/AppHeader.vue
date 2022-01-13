<template>
  <div>
    <v-app-bar
      class="app-header"
      color="blue-grey darken-3"
      height="68px"
      elevation="1"
      app
    ></v-app-bar>
  </div>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style lang="stylus">
.app-header .v-toolbar__content
  max-width 1400px
  margin auto !important
</style>
