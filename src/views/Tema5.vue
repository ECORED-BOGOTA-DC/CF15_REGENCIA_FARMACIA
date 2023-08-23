<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Documentos utilizados durante el proceso de almacenamiento de medicamentos y dispositivos médicos

    .row.mb-5
      p Durante todo el proceso de almacenamiento de medicamentos y dispositivos médicos se maneja una serie de documentos que permiten el control, evidencia y evaluación de este.  A continuación se describe cada una de las actividades que permiten dicho control:

    .row.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row(titulo="Definir el área de almacenamiento")
          .col-lg-8
            p.mb-4 Reconocer y señalizar cada una de las áreas de almacenamiento de acuerdo con la normatividad legal vigente (Decreto 780 de 2016 y Resolución 1403 de 2007), inclusive el área de cuarentena, área de medicamentos con cadena de frío, área de medicamentos de control especial, área de soluciones de gran volumen y área de dispositivos médicos. 
            p.mb-4 El área de almacenamiento debe cumplir como mínimo con los siguientes criterios:
            .row.justify-content-center.ps-4
              ul.lista-ul--color.fa-ul2
                li
                  i.fas.fa-atom.color-vineta1
                  p.mb-0 #[b Fácil movimiento:] toda el área esté en una sola planta.
                li
                  i.fas.fa-atom.color-vineta1
                  p.mb-0 #[b Fácil circulación:] que haya un espacio suficiente entre las estanterías que permitan la fácil circulación del personal.
                li
                  i.fas.fa-atom.color-vineta1
                  p.mb-0 La ubicación de los productos farmacéuticos deben permitir la circulación del aire, ya sea natural y/o artificial.
                li
                  i.fas.fa-atom.color-vineta1
                  p.mb-0 Pisos y paredes de fácil limpieza.
            
            p.mb-4 Las estanterías o cajoneras deben estar marcadas teniendo presente los medicamentos LASA, con el fin de evitar errores en la dispensación.
            p.mb-4 #[b Responsable:] químico Farmacéutico y/o Regente de Farmacia.
            p.mb-4 #[b Formato o documento:] señalización de cada área y lista de chequeo.
        
          .col-lg-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema5/img1.svg', alt='alt')

        .row(titulo="Almacenamiento de los productos")
          .col-lg-4.mb-5
            figure
              img(src='@/assets/curso/temas/tema5/img2.svg', alt='alt')
 
          .col-lg-8
            .row.justify-content-center
              ul.lista-ul--color.fa-ul2
                li
                  i.fas.fa-atom.color-vineta1
                  | Los productos deben estar almacenados primero por orden alfabético, sobre todo en el caso de los medicamentos y segundo por forma farmacéutica.
                li
                  i.fas.fa-atom.color-vineta1
                  | También se debe tener presente el sistema FIFO y FEFO.
                li
                  i.fas.fa-atom.color-vineta1
                  | Para los medicamentos de control se almacenan bajo llave y en área de paso restringido.
                li
                  i.fas.fa-atom.color-vineta1
                  | Las soluciones de gran volumen se almacenan en estibas y no se pueden apilar las cajas a más de 1,50 metros de altura.
                li
                  i.fas.fa-atom.color-vineta1
                  | Las sustancias peligrosas se deben almacenar de acuerdo con la ficha técnica del producto.
                li
                  i.fas.fa-atom.color-vineta1
                  | Los gases medicinales deben estar almacenados en un área específica para ello, la cual debe estar demarcada con el nombre “área de gases medicinales”, además cada pipeta debe contar con las demarcaciones de lleno, en uso o vacío según el caso y deben estar sujetas con cadenas que eviten la caída.
                li
                  i.fas.fa-atom.color-vineta1
                  | Para nutriciones parenterales, preparaciones magistrales estériles y unidosis se deben almacenar de acuerdo con los protocolos establecidos para dichas preparaciones.

          p #[b Responsable:] Químico Farmacéutico y/o Regente de Farmacia y Técnico en Servicios Farmacéuticos.
          p #[b Formato o documento:] Lista de chequeo de verificación y anexo 1: Almacenamiento según la clase de producto farmacéutico.
          .row.justify-content-center.ps-4
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-atom.color-vineta1
                | Los medicamentos y dispositivos médicos ubicados en farmacias satélites o carros de reanimación deben ser almacenados en orden alfabético y deben estar demarcados. 

          p #[b Responsable:] personal de enfermería.
          p #[b Formato o documento:] listado de productos farmacéuticos definido desde el inicio.

          .row.justify-content-center
            .col-lg-10
              .tarjeta.bg2.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1.texto-blanco Almacenamiento según la clase de producto farmacéutico
                        p.texto-blanco.mb-0 Con el propósito de conocer el formato de almacenamiento de productos se invita al aprendiz a consultar en la sección de material complementario
                      .col-sm-auto
                        a.boton.color-aacento-botones(:href="obtenerLink('/downloads/anexos/almacenamiento_según_la_clase_de_producto_farmacéutico.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download

        .row(titulo="Control de fechas de vencimiento")
          .col-lg-8
            p.mb-4 Este control se realiza desde el sistema de inventarios y la semaforización de los productos farmacéuticos, tendiendo presente el formato de control de fechas de vencimiento.
            p.mb-4 <b>Responsable:</b> director técnico del servicio o establecimiento farmacéutico y/o el técnico en servicios farmacéuticos.
            p.mb-4 <b>Formato o documento:</b> formato control de fechas de vencimiento.

            .row.justify-content-center
              .col-lg-12
                .tarjeta.bg2.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1.texto-blanco Formato control de fechas de vencimiento
                          p.texto-blanco.mb-0 Con el propósito de conocer el formato de control de fechas de vencimiento se invita al aprendiz a consultar en la sección de material complementario.
                        .col-sm-auto
                          a.boton.color-aacento-botones(:href="obtenerLink('/downloads/anexos/formato_control_de_fechas_de_vencimiento.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-file-download

          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/img3.svg', alt='alt')

        .row(titulo="Control de factores ambientales (almacenamiento)")
          .col-lg-4.my-4
            figure
              img(src='@/assets/curso/temas/tema5/img4.svg', alt='alt')

          .col-lg-8
            p.mb-4 Todos los productos farmacéuticos deben estar almacenados en condiciones ambientales de luz, temperatura y humedad que garanticen la conservación de la calidad de estos.
            p.mb-4 Por lo cual, en todo lugar donde se manejen productos farmacéuticos se debe contar con un termohigrómetro por área diferente de almacenamiento y un formato donde se registren los datos dos veces al día.
            p.mb-4 Se debe tener presente que los rangos generales de cada factor ambiental son:

            .row.justify-content-center.ps-4
              ul.lista-ul--color
                li
                  i.fas.fa-atom.color-vineta1
                  | La temperatura ambiente oscila entre 18 a 30 grados centígrados.
                li
                  i.fas.fa-atom.color-vineta1
                  | La humedad relativa oscila entre 45% y 70%.
                li
                  i.fas.fa-atom.color-vineta1
                  | La cadena de frío oscila entre 2 y 8 grados centígrados.
          
          p.mb-4 #[b Responsable:] personal del servicio o establecimiento farmacéutico y en las farmacias satélites o carro de reanimación el personal de enfermería.
          p.mb-4 #[b Formato o documento:] formato control de condiciones ambientales.

            .row.justify-content-center
              .col-lg-10
                .tarjeta.bg2.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1.texto-blanco Formato control de factores ambientales
                          p.texto-blanco.mb-0 Con el propósito de conocer el formato de control de factores ambientales se invita al aprendiz a consultar en la sección de material complementario.
                        .col-sm-auto
                          a.boton.color-aacento-botones(:href="obtenerLink('/downloads/anexos/formato_control_de_factores_ambientales.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-file-download

        .row(titulo="Control de factores ambientales (medidas de contingencia)")
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/img5.svg', alt='alt')
 
          .col-lg-8
            p.mb-4 Cuando uno de los factores ambientales se sale de los rangos establecidos, se deben aplicar las medidas de contingencia para regular el factor.
            p.mb-4 Las medidas de contingencia son: 

            .row.justify-content-center.ps-4
              ul.lista-ul--color.fa-ul2
                li
                  i.fas.fa-atom.color-vineta1
                  | Para todos los casos la primera medida a tomar es revisar que el dispositivo medidor esté calibrado y funcionando bien. En caso de que no, este se debe sacar de circulación y enviar a mantenimiento, en caso de estar bien se procede a aplicar las otras medidas de contingencia.
                li
                  i.fas.fa-atom.color-vineta1
                  p.mb-0 #[b Temperatura:] si está por encima de lo permitido se debe encender el aire acondicionado en 17 o 18 grados o los ventiladores a máxima potencia y, se deben cerrar puertas y ventanas para que el frío se acumule y baje la temperatura. Si está por debajo de lo permitido se realiza lo contrario.
                li
                  i.fas.fa-atom.color-vineta1
                  p.mb-0 #[b Humedad:] cuando está por encima de lo permitido se debe apagar el aire artificial, abrir las puertas y ventanas y encender el deshumidificador.
                li
                  i.fas.fa-atom.color-vineta1
                  p.mb-0 #[b Nevera:] los planes de contingencia para esta es revisar que el termómetro esté funcionando bien, revisar que la nevera esté funcionando correctamente y en caso de que esta última sea la del problema se debe dejar la puerta cerrada sin abrirla en ningún momento máximo 8 horas, si el arreglo demora más se deben sacar los medicamentos y ponerlos en neveras de icopor o portátiles con las pilas de gel completamente congeladas; en casos extremos de tiempo se deben llevar los medicamentos a otra nevera de luz, garantizando en todo momento la calidad de estos.

          p.mb-4 #[b Responsable:] personal del servicio o establecimiento farmacéutico y en las farmacias satélites o carro de reanimación el personal de enfermería.
          p #[b Formato o documento:] formato control de condiciones ambientales.

        .row(titulo="Control de condiciones de higiene")
          .col-lg-8
            p.mb-4 Todas las áreas de almacenamiento deben permanecer limpias y en ciertos casos como la nevera, desinfectadas. Para ello, el director técnico del establecimiento o servicio farmacéutico debe responsabilizar a cada uno de los integrantes de una o dos áreas para el aseo y desinfección de estas, bajo un cronograma establecido.
            p.mb-4 En caso tal de que haya personal de aseo este también debe asear ceñido por el cronograma.
            p.mb-4 #[b Responsable:] todo el personal de farmacia y/o personal del aseo.
            p.mb-4 #[b Formato o documento:] cronograma de aseo y limpieza.

            .row.justify-content-center
              .col-lg-12
                .tarjeta.bg2.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1.texto-blanco Cronograma de aseo y limpieza
                          p.texto-blanco.mb-0 Con el propósito de conocer el formato de control de condiciones de higiene se invita al aprendiz a consultar en la sección de material complementario.
                        .col-sm-auto
                          a.boton.color-aacento-botones(:href="obtenerLink('/downloads/anexos/cronogram_de_aseo_y_limpieza.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-file-download

          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema5/img6.svg', alt='alt')

        .row(titulo="Control de averías o deterioros")
          .col-lg-4.my-5
            figure
              img(src='@/assets/curso/temas/tema5/img7.svg', alt='alt')

          .col-lg-8
            p.mb-4 Durante el almacenamiento de medicamentos y dispositivos médicos se pueden presentar daños o deterioros en los empaques primarios de estos, por lo cual deben sacarse del inventario, predestuirse y ser enviados con la empresa encargada para su desnaturalización. Todo esto, se debe realizar bajo protocolos según el manual de gestión de residuos hospitalarios y similares. Para el control de estos se debe elaborar un formato donde se registren estos hallazgos.
            p.mb-4 #[b Responsable:] del reporte todo el personal de farmacia, de la predestrucción, salida del inventario y envío para desnaturalización el director técnico del servicio o establecimiento farmacéutico.
            p.mb-4 #[b Formato o documento:] formato de control de averías o deterioro.

          .row.justify-content-center
            .col-lg-10
              .tarjeta.bg2.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1.texto-blanco DOCUMENTO PENDIENTE
                        p.texto-blanco.mb-0 Con el propósito de conocer el formato de control de factores ambientales se invita al aprendiz a consultar en la sección de material complementario.
                      .col-sm-auto
                        a.boton.color-aacento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema5',
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
