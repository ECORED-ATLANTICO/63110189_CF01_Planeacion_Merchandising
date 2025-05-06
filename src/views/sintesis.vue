<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El análisis estratégico del mercado permite comprender cómo influyen factores internos y externos en el comportamiento de los consumidores y las decisiones empresariales. Herramientas como pestel, dofa y Benchmarking ayudan a identificar oportunidades y riesgos, observando tanto el entorno como las mejores prácticas del sector. El mercado varía según el tipo de comprador (consumidor, empresa o gobierno) y su ubicación (local, nacional o internacional), y está influido por elementos internos como el producto, el precio y la atención al cliente, y externos como la competencia, la economía y los cambios en la sociedad.
    .row.justify-content-center.bg-color-1.tarjeta
      .col-lg-12.mb-5.bgs.p-4.brad.p-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
