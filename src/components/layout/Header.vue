<template lang="pug">
  section.hero.is-success
    .hero-head
      .header.navbar
        .container
          .nav-start
            .navbar-item
              strong Platzi music
          .navbar-end.navbar-menu
            router-link.navbar-item(to="/" exact) Search
            router-link.navbar-item(to="/about") About
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan VUEnisimas
        pm-player

</template>

<script>
import PmPlayer from "@/components/Player";
export default {
  components: {
    PmPlayer,
  },
};
</script>
