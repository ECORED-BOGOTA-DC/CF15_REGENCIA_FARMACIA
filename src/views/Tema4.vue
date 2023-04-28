<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medicamentos de control especial

    .row.justify-content-center.my-5
      .col-lg-11.my-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Son un grupo de medicamentos que por sus características farmacológicas pueden ocasionar dependencia, por lo cual son sustancias sometidas a fiscalización y con normatividad independiente a los otros grupos de medicamentos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Resolución 1478 de 2006
                  p.texto-blanco.mb-0 Con el propósito de conocer las normas para el control, seguimiento y vigilancia de la importación, exportación, procesamiento, síntesis, fabricación, distribución, dispensación, compra, venta, destrucción y uso de sustancias sometidas a fiscalización, medicamentos o cualquier otro producto que las contengan y sobre aquellas que son monopolio del Estado. Se invita al aprendiz a consultar la Resolución 1478 de 2006 en la sección de material complementario.
                .col-sm-auto
                  a.boton.color-aacento-botones(:href="obtenerLink('/downloads/anexos/Resolucion_1478_de_2006.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row
      p La resolución anteriormente mencionada es puntual con los criterios de almacenamiento:

    .row.justify-content-center.mb-5
      .col-lg-7
        hr.mb-0
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .row
              p.mb-0 Las sustancia y/o medicamentos sujetos a fiscalización se almacenarán de acuerdo con la clasificación farmacológica y orden alfabético.  El almacenamiento de las sustancias sometidas a fiscalización y medicamentos de control especial debe mantenerse bajo estrictas condiciones de seguridad.
            i.fas.fa-quote-right

        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Cuando se refiere a estrictas condiciones de seguridad es literalmente que deben estar almacenados en un gabinete fijado al piso o la pared bajo llave, y al cual solo tendrá acceso el director técnico del servicio o establecimiento farmacéutico. 

        p Cabe aclarar que el área de almacenamiento de dichos medicamentos debe cumplir con las condiciones de ventilación, iluminación, pisos, techos y paredes normatizadas para todos los medicamentos en general.

      .col-lg-5.mt-5
        figure
          img(src="@/assets/curso/temas/tema4/img2.svg", alt="alt")


</template>

<script>
export default {
  name: 'Tema4',
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
