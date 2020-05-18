<template lang="pug">
  .content(v-if="track && track.album")
    p
      img(:src="track.album.images[2].url", :alt="track.name")
    p
      strong {{ track.name }}
      small {{ track.duration_ms | ms-to-mm }}
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
// import { bus } from "@/plugins/event-bus.js";
import { mapState } from "vuex";

export default {
  // data() {
  //   return {
  //     track: {},
  //   };
  // },
  // created() {
  //   bus.$on("set-track", (track) => {
  //     console.log(track);
  //     this.track = track;
  //   });
  // },
  computed: {
    ...mapState(["track"]),
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
}
</style>
