<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Almacenaje

    .bg1
      .row.justify-content-center.my-5
        .col-lg-11.my-5
          .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img1-1.svg', alt='Imágen decorativa')
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p Se refiere directamente a la acción propia de almacenar, dicho en otras palabras, es la acción de guardar en el lugar establecido los productos que llegan al establecimiento, aplicando alguno de los diferentes métodos y sistemas, siempre dirigidos a la preservación y conservación de la cadena de las buenas prácticas de almacenamiento.



    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Metodos de almacenaje

    .row.mb-5
      p Existen diferentes métodos de almacenamiento, por lo cual se deben escoger los que mejor se adapten a las necesidades del establecimiento o servicio farmacéutico, todo depende de las características de los productos, sus indicaciones de fabricación y la rotación. Dentro de los sistemas más usados en el sector farmacéutico se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='alt')

      .col-lg-7   
        LineaTiempoD.color-secundario
          .row.p-4(numero="1" titulo="Convencional")
            p Consiste en utilizar estanterías y estibas de carga manual para almacenar los productos. 

          .row(numero="2" titulo="Dinámico")
            p El enfoque de este sistema es la rotación constante de los productos, por lo cual trabaja con la metodología FIFO, que quiere decir que lo primero en entrar es lo primero en salir y con la metodología FEFO, que significa que lo primero en expirar es lo primero en salir. En este caso se combinan ambas metodologías con el propósito de evitar al máximo que los productos perezcan. 

          .row(numero="3" titulo="Caótico")
            p También conocido como aleatorio, variable, libre o desordenado. Es utilizado normalmente en distribuidores mayoristas como los depósitos de productos y consiste en ubicar la mercancía en el espacio o hueco que haya disponible en ese momento. Con el fin de poder hacer seguimiento cada hueco tiene su código y así mismo, a la mercancía que llega se le etiqueta con otro código único para esta, por lo cual al ser ingresada en el sistema queda registrado el punto específico de ubicación. Este sistema requiere de un sistema de gestión de almacenamiento computarizado y debido a sus múltiples ventajas como:
            
            ul.lista-ul--color
              li
                i.fas.fa-atom.color-vineta1
                | Optimiza el espacio del almacenaje por encima del 92%.
              li
                i.fas.fa-atom.color-vineta1
                | Es flexible a los cambios de <em>stock</em>.
              li
                i.fas.fa-atom.color-vineta1
                | Aligera el punto de ubicación de los productos.
              li
                i.fas.fa-atom.color-vineta1
                | Evita errores y confusiones sobre todo con los medicamentos LASA (medicamentos que se parecen físicamente, que son fonética y ortográficamente parecidos o que son iguales, pero en diferentes concentraciones).

    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta.tarjeta--morada.p-4
          .row
            .col-lg-10
              p.mb-0 Unido a los métodos de almacenaje se encuentra el control de entradas y salidas de productos del servicio o establecimiento farmacéutico, debido a que es de suma importancia tener claras las variaciones del movimiento de inventario, puesto que permite evaluar qué tan eficaz está siendo el método escogido y aplicado. Estos controles se pueden realizar con registros de entradas y salidas tanto manual (Excel) como sistematizado (<i>software</i>), aunque el manual tiene la desventaja de no arrojar resultados precisos y sin fallos, por lo cual, lo más recomendable para cualquier institución es implementar un sistema de gestión de almacenamiento que sistematice los datos y administre el proceso de forma automática. 

      .col-8.col-lg-1
        figure
          img(src="@/assets/curso/temas/tema2/img3.png", alt="alt").img3-tm2

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Capacidad de almacenamiento

    .row.justify-content-center.mb-5
      .col-8.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img4.png", alt="alt").img4-tm2
      .col-lg-10
        .tarjeta.tarjeta--azul-2.p-4
          .row 
            .col-lg-2

            .col-lg-10
              p Todo establecimiento está en el deber de contar con áreas con suficiente capacidad de almacenamiento dispuestas física y funcionalmente, que permitan separar los productos por categorías y conservar su estado de calidad en todo momento.
              
              .cajon.color-acento-contenido.p-4
                p.mb-0 Durante el proceso del plan de mejoramiento continuo del programa de tecnovigilancia en el sector farmacéutico, el Ministerio de Salud y la Protección Social decreta la Resolución 4002 de 2007 por la cual se adopta el Manual de requisitos de capacidad de almacenamiento y/o acondicionamiento para dispositivos médicos, sin dejar de un lado el Decreto 4725 de 2005.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/img5.svg").img-hoja-texto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Resolucion 4002 de 2007
                  p.texto-blanco.mb-0 Con el propósito de conocer la reglamentación de los regímenes de registros sanitarios, permisos de comercialización y vigilancia sanitaria de los dispositivos médicos para uso humano se invita al aprendiz a consultar la Resolución 4002 de 2007 en la sección de material complementario.
                .col-sm-auto
                  a.boton.color-aacento-botones(:href="obtenerLink('/downloads/anexos/resolucion_4002_de_2007.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Condiciones y controles de las fechas de vencimiento

    .row.justify-content-center.mb-5
      .col-lg-10
        hr.mb-0
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .row
              p.mb-0 El servicio o establecimiento farmacéutico contará con criterios, procedimientos y recursos que permitan verificar continuamente la fecha de vencimiento de los           medicamentos y dispositivos médicos, para que sean distribuidos o dispensados dentro de la fecha de vigencia o se solicite con la debida antelación la devolución o cambio al proveedor, de acuerdo con las condiciones de negociación.
              b - Resolución 1403 de 2007 
            i.fas.fa-quote-right

    .bg3.my-5
      .row.justify-content-center.mb-5
        .row.justify-content-center.align-items-center
          .col-6.col-lg-1
            figure
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")

          .col-lg-11
            p.mt-lg-0.mt-5.mb-0 El control de fechas de vencimiento se realiza desde el sistema de inventarios y la semaforización de los productos farmacéuticos, donde de acuerdo con las fechas de vencimiento se pone una pegatina como se muestra a continuación:    

    .row.justify-content-center.my-5
      .col-lg-8
        h5.text-center.mb-4 Semaforización según fecha de vencimiento de medicamentos, reactivos insumos, dispositivos médicos yodontológicos

        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/temas/tema2/img7.png", alt="alt")

          .tarjeta.tarjeta-verde.p-3(x="24%" y="85%" numero="+")
            .h5.mb-2.texto-blanco Verde
            p.texto-blanco Para los que tienen fecha de expiración de un año o más. 

          .tarjeta.tarjeta-amarilla.p-3(x="50%" y="85%" numero="+")
            .h5.mb-2.texto-blanco Amarillo
            p.texto-blanco Para los de fecha de expiración de 6 a 11 meses.

          .tarjeta.tarjeta-roja.p-3(x="76%" y="85%" numero="+")
            .h5.mb-2.texto-blanco Rojo
            p.texto-blanco Para los de fecha de expiración menor a 6 meses.

    .row.justify-content-center.mb-5
      .col-8.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema2/img8.png", alt="alt")

      .col-lg-9
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los productos con una pegatina color amarillo se tienen presente para ser distribuidos o dispensados con prioridad o separados para ser entregados al proveedor de acuerdo con la política de devolución. 

        p Esta revisión se debe realizar como mínimo los primeros 5 días de cada mes y en el caso de encontrarse medicamentos vencidos se deben reportar de inmediato al director técnico, para que realice la salida del inventario, la predestrucción y envíe con la empresa encargada para la desnaturalización.







</template>

<script>
export default {
  name: 'Tema2',
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
