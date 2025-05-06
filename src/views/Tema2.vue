<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mercado
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        div.tarjeta-horz(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/1.png', alt='Imagen decorativa')
          div
            p.mb-0 El mercado es el espacio donde interactúan compradores y vendedores para el intercambio de bienes y servicios, regulado por la oferta y la demanda. Kotler & Armstrong (2018) explican que los mercados evolucionan con el comportamiento del consumidor y las condiciones económicas, por lo que es clave su análisis constante.

        separador

        #t_2_1.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 2.1	Características

        .row.justify-content-center.align-items-center
          .col-lg-6
            .titulo-sexto.color-primario
              h5 Figura 3
              span Características del mercado
            
            
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure.mb-3
                  img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')
                figcaption Fuente. SENA, 2025

              .tarjeta.color-acento-botones.p-3(x="16%" y="72%" numero="+")
                .h5.mb-2 01
                p Dinamismo: cambia constantemente por factores internos y externos como tendencias, regulaciones y tecnología.
              .tarjeta.color-acento-botones.p-3(x="51%" y="72%" numero="+")
                .h5.mb-2 02
                p Segmentación: división en grupos según comportamientos de los consumidores, permitiendo estrategias personalizadas.
              .tarjeta.color-acento-botones.p-3(x="85%" y="72%" numero="+")
                .h5.mb-2 03
                p Regulación: normativas que controlan la competencia y protegen al consumidor, garantizando condiciones justas en el mercado.

    separador

    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        #t_2_2.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 2.2	Tipos de mercado
        
        p.mb-5 En el mundo comercial existen diferentes tipos de mercado, según lo que se ofrece, a quién va dirigido y cómo se realiza la transacción. A continuación, se presentan algunos de los principales tipos de mercado, con una breve descripción que permite entender su función y características.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .titulo-sexto.color-primario
              h5 Table 4
              span Tipos de mercado
            
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Fuente: Kotler, P., & Keller, K. L. (2016).
                thead
                  tr
                    th.bg-color-4.text-white Tipo de Mercado
                    th.bg-color-4.text-white Descripción
                tbody
                  tr.bg-color-white
                    td Consumo
                    td Bienes y servicios adquiridos por consumidores finales para satisfacer necesidades personales.
                  tr.bg-color-5
                    td Industrial
                    td Venta de insumos para empresas y manufactura, influyendo directamente en la cadena productiva.
                  tr.bg-color-white
                    td Financiero
                    td Compra y venta de activos financieros y servicios bancarios que regulan la economía global.
                  tr.bg-color-5
                    td Digital
                    td Comercio electrónico y transacciones en línea, que han crecido exponencialmente con la tecnología.
                  tr.bg-color-white
                    td Local e Internacional
                    td Diferenciación por alcance geográfico, donde los factores económicos y culturales influyen en la demanda.


        
           


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
