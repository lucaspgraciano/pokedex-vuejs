<template>
  <div>
    <v-img
      :src="sprite"
      height="150"
      width="150"
      class="mx-auto"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="blue-grey darken-3"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "pokemon-sprite",
  props: {
    sprite: {
      type: String,
      required: false,
      default: "vtnc"
    },
  },
};
</script>
