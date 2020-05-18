<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(:class="{'is-success': tracks.length, 'is-danger': tracks.length === 0}")
          p.has-text-centered {{message}}

</template>

<script>
export default {
  props: ["tracks"],
  data() {
    return {
      msg: ["Busqueda exitosa", "No se encontraron resultados"]
    };
  },
  computed: {
    message() {
      return this.tracks.length ? this.msg[0] : this.msg[1];
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  margin-top: 1rem;
}
</style>
