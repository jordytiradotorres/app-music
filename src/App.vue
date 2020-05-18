<template lang="pug">
  #app
    pm-header
    router-view
    pm-footer
</template>

<script>
// layout
import PmHeader from "@/components/layout/Header";
import PmFooter from "@/components/layout/Footer";

export default {
  name: "App",
  components: {
    PmHeader,
    PmFooter,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
