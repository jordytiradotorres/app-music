<template lang="pug">
  .container
    pm-loader(v-if="isLoader")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          a.button.is-primary.is-large
            span.icon(@click="selectTrack")
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
          .panel-block
            article.media
              .media-content
                .content
                  ul
                    li(v-for="(v, k) in track")
                      strong {{ k }}&nbsp;
                      span {{ v }}
              nav.level
                .level-left
                  a.level-item
</template>

<script>
import trackService from "@/services/track";
import PmLoader from "@/components/shared/Loader";

import trackMixins from "@/mixins/track";

export default {
  mixins: [trackMixins],
  components: {
    PmLoader
  },
  data() {
    return {
      track: {},
      isLoader: false
    };
  },
  created() {
    this.isLoader = true;
    const id = this.$route.params.id;
    trackService.getById(id).then(res => {
      this.isLoader = false;
      this.track = res;
    });
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
