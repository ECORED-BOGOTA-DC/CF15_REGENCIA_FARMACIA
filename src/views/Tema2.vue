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
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
            .bloque-texto-g1__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Se refiere directamente a la acción propia de almacenar, dicho en otras palabras, es la acción de guardar en el lugar establecido los productos que llegan al establecimiento, aplicando alguno de los diferentes métodos y sistemas, siempre dirigidos a la preservación y conservación de la cadena de las buenas prácticas de almacenamiento.

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
                | Es flexible a los cambios de stock.
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
              p.mb-0 Unido a los métodos de almacenaje se encuentra el control de entradas y salidas de productos del servicio o establecimiento farmacéutico, debido a que es de suma importancia tener claras las variaciones del movimiento de inventario, puesto que permite evaluar qué tan eficaz está siendo el método escogido y aplicado. Estos controles se pueden realizar con registros de entradas y salidas tanto manual (Excel) como sistematizado (software), aunque el manual tiene la desventaja de no arrojar resultados precisos y sin fallos, por lo cual, lo más recomendable para cualquier institución es implementar un sistema de gestión de almacenamiento que sistematice los datos y administre el proceso de forma automática. 

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
