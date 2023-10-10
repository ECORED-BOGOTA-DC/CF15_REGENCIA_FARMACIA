<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En los servicios farmacéuticos, el adecuado almacenamiento y control de productos siguiendo normativas y técnicas establecidas es fundamental. Se requiere seguimiento, evaluación y estrategias operativas acorde a la normativa. Las ubicaciones, señalización, métodos de almacenaje, capacidad y control de fechas de vencimiento deben considerarse. 

    p.mb-5 Se requiere una atención especial para los medicamentos de alto costo y aquellos sujetos a control. Se utilizan algunos documentos pertinentes que garantizan el manejo adecuado de medicamentos y dispositivos médicos. Este componente formativo profundiza en estos temas relevantes, los cuales se pueden apreciar en el siguiente esquema.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis de los temas abordados en el componente formativo denominado: Almacenar y controlar productos farmacéuticos, estos temas principales son: Almacenaje que permite a través de documentos como decretos y resoluciones conocer la normatividad vigente frente a este tema y adicional el seguimiento y evaluación atendiendo normativa.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
