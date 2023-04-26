<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-4.mb-5
        figure
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt").img1-intro

      .col-lg-8
        p El procedimiento para el almacenamiento de medicamentos y dispositivos médicos tiene como propósito el cuidado y la conservación de los parámetros técnicos con los que fueron elaborados los medicamentos y dispositivos médicos. Ante esto, es necesario que todo servicio o establecimiento farmacéutico implemente estrategias que permitan continuamente vigilar, valorar y gestionar la calidad del proceso en general, de conformidad con la Resolución 1403 de 2007.

        .cajon.color-secundario.p-4
          p.mb-0 Un proceso de almacenamiento de productos farmacéuticos adecuado permite que el establecimiento sea más eficiente en todas las operaciones logísticas, por lo cual abarca una serie de estrategias y requisitos necesarios para lograr dar cumplimiento a la normatividad y a las condiciones de conservación de estos expedidas por los laboratorios fabricantes. Por este motivo, el presente componente formativo abordará temas de ubicación de productos, condiciones locativas, señalizaciones, técnicas de almacenamiento de medicamentos y dispositivos médicos, verificación y control de los productos farmacéuticos, entre otros, los cuales permitirán tener unos conocimientos más precisos de cada uno de los requisitos legales y así cumplir a cabalidad con las buenas prácticas de almacenamiento.






</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
