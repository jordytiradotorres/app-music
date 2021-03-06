// import { bus } from "@/plugins/event-bus";

const trackMixins = {
  methods: {
    selectTrack() {
      if (!this.track.preview_url) {
        return;
      }

      this.$store.commit("setTrack", this.track);
      // this.$emit("select", this.track.id);
      // bus.$emit("set-track", this.track);
    },
  },
};

export default trackMixins;
