<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ubicaciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .tarjeta.tarjeta--morada.p-4
          .col-lg-10
            p.mb-0 Dentro del proceso de almacenamiento de productos farmacéuticos juega un papel muy importante el tema de ubicación de los productos, lo que significa localizar, situar o instalar dichos productos en un determinado lugar o espacio siempre manteniendo la regla de compatibilidad entre ellos.

      .col-8.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img1.svg", alt="alt").img1-tm1

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Tipos de ubicaciones

    .row.mb-5
      p En el sector farmacéutico los dos tipos de ubicación de productos más comunes son por pasillos y en estanterías o lineal, como se muestra a continuación:  

    TabsC.color-primario
      .py-3.py-md-4(titulo="Pasillos")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ubicación por pasillos
            p Los pasillos en el sector farmacéutico son unas calles formadas en el interior del área de almacenamiento que separan una estantería de otra y cuyas dimensiones de anchura están limitadas al flujo de personas que circulan por allí y a la maquinaria utilizada para el transporte y almacenamiento de los producto, por ejemplo, no es lo mismo el espacio que se requiere para movilizar un montacarga, que el espacio para movilizar una carreta o gato estibador. Aun así, la medida de anchura mínima para un pasillo es de 90 cm.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img2.png', alt='alt')

      .py-3.py-md-4(titulo="Lineal")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ubicación lineal
            p El sistema de ubicación lineal en farmacias y droguerías lo componen principalmente las estanterías y vitrinas que están a la exposición visual (detrás del mostrador) o directa (droguería con autoservicio) del cliente o usuario.
            p Este sistema consiste en dividir la estantería y/o vitrina en cuatro categorías como se muestra en la imagen.

            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema1/img3-1.svg', alt='alt')

              .tarjeta-infografica.p-4(x="45%" y="25%" numero="+")
                .h5.texto-blanco.mb-2 Nivel superior
                p.texto-blanco Es el nivel más alto de la estantería y normalmente se ubican productos vistosos por sus colores y en ocasiones por su tamaño sin ser muy pesados. En droguerías suelen ubicarse los paquetes de pañales.

              .tarjeta-infografica.p-3(x="45%" y="75%" numero="+")
                .h5.texto-blanco.mb-2 Nivel de los ojos
                p.texto-blanco Es el primer nivel que detecta el cliente al momento de ingresar al establecimiento o movilizarse por él, por lo cual se deben ubicar los productos que requieran de un movimiento o impacto inmediato.

              .tarjeta-infografica.p-3(x="99%" y="25%" numero="+")
                .h5.texto-blanco.mb-2 Nivel de las manos
                p.texto-blanco En este nivel se ubican los productos que son de uso constante y fáciles de alcanzar, o que han tenido baja rotación para agilizar la salida.

              .tarjeta-infografica.p-3(x="99%" y="75%" numero="+")
                .h5.texto-blanco.mb-2 Nivel del suelo
                p.texto-blanco Este es el nivel que se encuentra más abajo y normalmente se ubican los productos más pesados como los tarros de leche. También por estrategia se ubican productos que llamen la atención de los niños de manera que los puedan alcanzar e insistir a sus acompañantes que los adquieran y por último, se ubican productos que no sean de alta demanda. 

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='alt')

      .py-3.py-md-4(titulo="Capacidad")
        .row
          .col-md-6.mb-4.mb-4
            h4 Capacidad de las estanterías
            p Por cumplimiento normativo en el sector farmacéutico solo se pueden utilizar estanterías metálicas o plásticas, las cuales están conformadas por pares de largueros verticales y varios montantes.
            p A partir de la estructura básica de la estantería se determina el peso máximo soportado por unidad de carga. También se deben tener presente variables como geometría y características del material de elaboración (forma, espesor y tipo de acero o plástico, entre otras), la separación entre los niveles, pues a mayor separación menor capacidad de carga total y la carga que soporta cada módulo (información otorgada por el fabricante). 
        
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='alt')

          p A partir de cada una de las variables mencionadas se determina la capacidad máxima de la estantería, aunque lo más recomendable es no superar el 90% de la capacidad para evitar que el sobrepeso deteriore en corto plazo la calidad de la estantería.
          p Es importante tener presente que las estanterías deben contar con un rótulo o placa de características otorgadas por el proveedor o fabricante ubicado en un lugar visible a todos los empleados del establecimiento. La información mínima que debe contener el rótulo o placa es:
          
          .row.justify-content-center
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img4-1.svg', alt='alt')

            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img4-2.svg', alt='alt')

            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img4-3.svg', alt='alt')

            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img4-4.svg', alt='alt')


      .py-3.py-md-4(titulo="Lista")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Listas de ubicaciones
            p En establecimientos pequeños la ubicación de los productos es fácil, por lo cual con una buena señalización de las áreas y subáreas es suficiente; pero en los grandes como los distribuidores mayoristas la ubicación se torna un poco más compleja, por lo cual lo más recomendable por temas de tiempo, agilidad y veracidad es tener un listado actualizado con la ubicación precisa de cada uno de los productos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Señalización del espacio

    .row.mb-5
      p Como toda empresa legalmente habilitada los establecimientos y servicios farmacéuticos deben contar con toda la señalización de seguridad; pero además también deben tener señalizadas cada una de las áreas y algunos puntos específicos dentro de estas.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--morada.p-4    
          p Hablando de almacenamiento de productos farmacéuticos, primeramente se debe contar con la señalización del área en general así, “área de almacenamiento” y posterior a ello cada una de las subáreas también deben estar debidamente marcadas, como son:
          
          .row.justify-content-center
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-atom.color-vineta1
                  | Área de cuarentena.
              ul.lista-ul--color
                li 
                  i.fas.fa-atom.color-vineta1
                  | Área de vencimientos.
              ul.lista-ul--color
                li 
                  i.fas.fa-atom.color-vineta1
                  | Área de gases medicinales (cada una de las pipetas debe estar marcada con vacía, en uso o llena).
              ul.lista-ul--color
                li 
                  i.fas.fa-atom.color-vineta1
                  | Las estanterías o los cajones de las torres de medicamentos deben estar marcadas con el nombre del laboratorio, nombre del producto o grupo terapéutico.
              ul.lista-ul--color
                li 
                  i.fas.fa-atom.color-vineta1
                  | Medicamentos de control especial.
              ul.lista-ul--color
                li 
                  i.fas.fa-atom.color-vineta1
                  | Cadena de frío.
              ul.lista-ul--color
                li 
                  i.fas.fa-atom.color-vineta1
                  | Soluciones de gran volumen.

            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema1/img6.svg', alt='alt').img6-tm1

    .row.mb-5
      p Otra clase de señalización común es la de los pisos con cintas adhesivas de colores, con el fin de transmitir de inmediato una alerta de seguridad a quienes transiten por la zona.

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img7-1.svg', alt='Imágen decorativa')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 En el sector farmacéutico es muy común señalizar las áreas con colores, cabe aclarar que la norma solo obliga a señalizar, por lo tanto, el uso de colores es decisión propia de cada establecimiento. Otra acción que se puede dar es el uso de códigos de señalización, lo cual al igual que los colores no es obligación legal; pero sí es una excelente estrategia de orden y ubicación.

      
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
