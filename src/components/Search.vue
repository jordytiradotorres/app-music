<template lang="pug">
  main
    pm-notification(v-show="showNotification" :tracks="tracks")
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.navbar
        .container
          input.input.is-large(
            type="text"
            placeholder="Buscar canciones"
            v-model.trim="searchQuery"
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}
      |
      .container
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            // el | pipe para que funcione
            pm-track(
              v-setBlur="t.preview_url"
              :class="{'is-active' : t.id === selectedTrack}"
              :track="t",
              @select="setSelectedTrack"
            )
</template>

<script>
import trackService from "@/services/track";

import PmTrack from "@/components/Track";
// shared
import PmLoader from "@/components/shared/Loader";
import PmNotification from "@/components/shared/Notification";

export default {
  name: "Search",
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  data() {
    return {
      searchQuery: "",
      tracks: [],
      selectedTrack: "",
      isLoading: false,
      showNotification: false
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  },
  methods: {
    search() {
      if (this.searchQuery === "") {
        return;
      }

      this.isLoading = true;

      trackService.search(this.searchQuery).then(res => {
        console.log(res);
        // this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.showNotification = true;
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style lang="scss">
.is-active {
  background-color: #b2ebc6;
  border: 1px solid #75e09b;
}
</style>
