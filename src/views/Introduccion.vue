<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/1.png", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left")
            p En un entorno cada vez más dinámico y competitivo, comprender el contexto que rodea a una organización se ha convertido en un requisito esencial para tomar decisiones acertadas. El análisis estratégico no solo permite identificar riesgos y oportunidades, sino también establecer rutas claras hacia el crecimiento y la sostenibilidad.

            p Este componente aborda herramientas clave que ofrecen una visión integral del entorno externo e interno de una organización. A través de ejemplos concretos y aplicables, se presentarán distintas ópticas de análisis que facilitarán la formulación de estrategias sólidas y pertinentes.

            .cajon.color-primario.p-4.mb-4.bg-color-2
              p.mb-0 De este modo, se busca dotar al aprendiz de fundamentos que le permitan interpretar su realidad empresarial con mayor claridad y proyección.

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
