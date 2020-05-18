<template lang="pug">
  .container
    pm-loader(v-if="isLoader")
    .columns
      .column.is-5.is-offset-4
        pm-track(:track="track")
</template>

<script>
import trackService from "@/services/track";
import PmTrack from "@/components/Track";
import PmLoader from "@/components/shared/Loader";

export default {
  components: {
    PmTrack,
    PmLoader,
  },
  data() {
    return {
      track: {},
      isLoader: false,
    };
  },
  created() {
    this.isLoader = true;
    const id = this.$route.params.id;
    trackService.getById(id).then((res) => {
      this.isLoader = false;
      this.track = res;
    });
  },
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
