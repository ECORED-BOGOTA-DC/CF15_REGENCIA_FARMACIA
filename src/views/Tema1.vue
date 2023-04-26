<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ubicaciones

    .row.justify-content-center.mb-5
      .col-lg-9
        .tarjeta.tarjeta--morada.p-4
          .col-lg-10
            p.mb-0 Dentro del proceso de almacenamiento de productos farmacéuticos juega un papel muy importante el tema de ubicación de los productos, lo que significa localizar, situar o instalar dichos productos en un determinado lugar o espacio siempre manteniendo la regla de compatibilidad entre ellos.

      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt").img1-tm1
              







      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
