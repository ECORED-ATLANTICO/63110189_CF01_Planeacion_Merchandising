<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas de análisis estratégico
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis estratégico del mercado es un proceso técnico y sistemático que permite comprender el entorno comercial, identificar oportunidades y amenazas, y formular estrategias competitivas eficaces. Como señala Kotler & Keller (2016), el entorno de los negocios cambia constantemente, por lo que es esencial contar con herramientas que permitan adaptarse y responder de manera eficiente.

    separador

    #t_1_1.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 1.1 Tipos de herramientas para análisis estratégico






</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
