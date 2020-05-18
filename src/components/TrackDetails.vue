<template lang="pug">
  .container(v-if="track && track.id")
    // pm-loader(v-if="isLoader")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary.is-large
              span.icon(@click="selectTrack") ▶️
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
</template>

<script>
// import trackService from "@/services/track";
// import PmLoader from "@/components/shared/Loader";
import trackMixins from "@/mixins/track";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  mixins: [trackMixins],
  // components: {
  //   PmLoader,
  // },
  // data() {
  //   return {
  //     track: {},
  //     isLoader: false,
  //   };
  // },
  computed: {
    ...mapState(["track"]),
    ...mapGetters(["trackTitle"]),
  },
  created() {
    // this.isLoader = true;
    const id = this.$route.params.id;

    if (this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id }).then(() => console.log("track loaded..."));
    }
    // trackService.getById(id).then((res) => {
    //   // this.isLoader = false;
    //   this.track = res;
    // });
  },
  methods: {
    ...mapActions(["getTrackById"]),
  },
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>
