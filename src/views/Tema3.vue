<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medicamentos de alto costo

    .row.mb-5
      p.mb-4 Son medicamentos designados para un grupo limitado de enfermedades ruinosas, catastróficas o raras, y son denominadas así porque tienen una prevalencia de 1 por cada 5000 habitantes; pero demandan un gran porcentaje de recursos financieros para las EPS. Algunas enfermedades catastróficas o ruinosas son:

      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/img1.svg", alt="alt")

      .col-lg-7
        figure.mb-4
          img(src="@/assets/curso/temas/tema3/img2.svg", alt="alt")          

        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Y como enfermedades raras o huérfanas se tienen el lupus eritematoso cutáneo, síndrome de Noonan, entre otras.


    .row.justify-content-center.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
        .bloque-texto-g2__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3.svg')})`}"
        )
        .bloque-texto-g2__texto.p-4
          p.mb-0 A partir de 2010 en Colombia las enfermedades huérfanas empiezan a ser de real interés por el gobierno y son normalizados sus procedimientos, de manera que se garantice la protección social a la población afectada. Ante esto se cuenta con:

    .row.justify-content-center.mb-3
      .col-lg-4
        figure.mb-4
          img(src="@/assets/curso/temas/tema3/img4.svg", alt="alt")       

      .col-lg-6
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Ley 1392 del 2 de Julio de 2010")
            p por medio de la cual se reconocen las enfermedades huérfanas como de especial interés y se adoptan normas tendientes a garantizar la protección social por parte del Estado colombiano a la población que padece enfermedades huérfanas y a sus cuidadores.

          .row(numero="2" titulo="Decreto 1954 del 19 de septiembre de 2012")
            p Por el cual se dictan disposiciones para implementar el sistema de información de pacientes con enfermedades huérfanas.

          .row(numero="3" titulo="Resolución 0430 del 20 de febrero de 2013")
            p Por la cual se define el listado de las enfermedades huérfanas.

          .row(numero="4" titulo="Resolución 2048 del 09 de junio de 2015")
            p Por la cual se actualiza el listado de enfermedades huérfanas.

          .row(numero="5" titulo="Circular Externa 0049 del 13 de octubre de 2015")
            p Reparación para la notificación de enfermedades huérfanas-raras mediante aplicativo Sivigila.


    .row.justify-content-center.mb-3
      .col-lg-6
        LineaTiempoD.color-secundario
          .row(numero="6" titulo="Circular Externa 0011 del 10 de junio de 2016")
            p Instrucciones para la atención de enfermedades huérfanas.

          .row(numero="7" titulo="Resolución 651 del 01 de marzo de 2018")
            p Por la cual se establecen las condiciones de habilitación de los centros de referencia de diagnóstico, tratamiento y farmacias para la atención integral de las enfermedades huérfanas, así como la conformación de la red y subredes de centros de referencia para su atención.

          .row(numero="8" titulo="Resolución 5265 del 27 de noviembre de 2018")
            p Por lo cual se actualiza el listado de enfermedades huérfanas y se dictan otras disposiciones.

          .row(numero="9" titulo="Resolución 0946 del 22 de abril de 2019")
            p Por la cual se dictan disposiciones en relación con el Registro nacional de pacientes con enfermedades huérfanas y la notificación de enfermedades huérfanas al Sistema de vigilancia en salud pública.
            

      .col-lg-4
        figure.mb-4
          img(src="@/assets/curso/temas/tema3/img5.svg", alt="alt")       

    .row.mb-5
      p Las enfermedades raras o huérfanas se dan puntualmente por problemas genéticos, por lo que una gran parte de los medicamentos de alto costo son de origen biológico y medicamentos biotecnológicos que están reglamentados por el Decreto 1782 de 2014.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Decreto 1782 de 2014
                  p.texto-blanco.mb-0 Con el propósito de conocer los requisitos y el procedimiento para las evaluaciones farmacológicas y farmacéuticas de los medicamentos biológicos en el trámite del registro sanitario se invita al aprendiz a consultar el Decreto 1782 de 2014 en la sección de material complementario.
                .col-sm-auto
                  a.boton.color-aacento-botones(:href="obtenerLink('/downloads/anexos/Decreto_1782_de_2014.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.mb-5
      .col-8.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/img6.svg", alt="alt").img6-tm3
      .col-lg-10
        .tarjeta.tarjeta--azul-2.p-4
          .row 
            .col-lg-2

            .col-lg-10
              p Los medicamentos biológicos son aquellos obtenidos de organismos vivos o de sus tejidos o fluidos como la sangre y se producen sin utilizar información genética, lo que los hace más sencillos. Los biotecnológicos son biológicos; pero con tecnología aplicada y se usa la información genética, por lo cual son más complejos.
              
              .cajon.color-acento-contenido.p-4
                p.mb-0 Todos estos medicamentos debido a su alto costo deben tener un almacenamiento especial, que no solo los proteja de los factores ambientales como la luz, la temperatura y la humedad, sino también de robos y extravíos. Por lo que existen las farmacias alto-costo con unos altos niveles de seguridad, protocolos estandarizados y rigurosos en cada uno de los procesos generales.





</template>

<script>
export default {
  name: 'Tema3',
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
