<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}
      |
      .content
        small {{ track.duration_ms | ms-to-mm }}
        nav.level
          .level-left
            button.level-item.button.is-primary
              span.icon.is-small(@click="selectTrack") ▶️
            // button.button.is-success(@click="goToTrack(track.id)") Vér más
            router-link.level-item.button.is-warning(tag="button" :to="{name: 'track', params: {id: track.id}}") Vér más
</template>

<script>
import trackMixins from "@/mixins/track";

export default {
  mixins: [trackMixins],
  props: {
    track: {
      type: Object,
      required: true
    }
  }
};
</script>
