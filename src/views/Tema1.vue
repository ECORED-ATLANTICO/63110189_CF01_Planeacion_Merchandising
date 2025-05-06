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

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        figure.mb-5
          img(src="@/assets/curso/temas/tema1/2.png", data-aos="zoom-in")

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Análisis PESTEL
        
        p.mb-5 El análisis PESTEL es una herramienta de gestión estratégica que permite evaluar los factores externos que pueden influir en un mercado. Su nombre proviene de las iniciales de los factores que analiza: políticos, económicos, sociales, tecnológicos, ecológicos y legales. Esta metodología es fundamental para anticipar cambios en el entorno y ajustar estrategias comerciales de manera proactiva. A continuación, se enuncian pasos para la elaboración del análisis PESTEL:

        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/3.png", alt="").mb-4.mb-lg-0
          .col-lg-7
            LineaTiempoD.color-acento-botones
              p(numero="1" titulo="Definir el mercado objetivo") Determinar la industria o sector en el que se aplicará el análisis.
              
              p(numero="2" titulo="Recopilar información") Investigar cada factor a través de fuentes confiables, como informes gubernamentales, estudios de mercado y artículos académicos.
              
              p(numero="3" titulo="Analizar los factores") Evaluar cómo cada factor influye en la empresa o el mercado.
              
              p(numero="4" titulo="Identificar oportunidades y amenazas") Determinar qué elementos pueden favorecer o afectar negativamente a la organización.
              p(numero="5" titulo="Actualizar periódicamente") Revisar y ajustar el análisis según la evolución del entorno.

 
    .titulo-sexto.color-primario.mb-5
      h5 Figura 1
      span Elementos de matriz PESTEL

    figure.mb-3
      img(src="@/assets/curso/temas/tema1/4.svg", data-aos="zoom-in")
      img.d-flex.d-lg-none(src="@/assets/curso/temas/tema1/4-1.svg", data-aos="zoom-in")
    figcaption.mb-5 Fuente. SENA, 2025

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Análisis DOFA
    
    p.mb-5 El análisis DOFA permite identificar fortalezas y debilidades internas, así como oportunidades y amenazas externas. Según David (2020), esta herramienta es esencial para que las organizaciones reconozcan sus ventajas competitivas y formulen estrategias para mejorar su posición en el mercado. A continuación, se enuncian pasos para la elaboración del análisis DOFA:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .bg-full-width.bg-color-7.mb-5
          .px-4.px-md-5
            .row.justify-content-center
              .col-lg-8.mb-3.mb-lg-0.order-lg-2.p-4
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Identificar fortalezas internas: determinar los recursos y capacidades que diferencian a la organización.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Señalar debilidades internas: evaluar áreas de mejora dentro de la empresa.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Detectar oportunidades externas: analizar factores externos favorables.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Reconocer amenazas externas: identificar riesgos en el entorno.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Diseñar estrategias: combinar fortalezas con oportunidades y mitigar debilidades y amenazas.
        
              .col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/temas/tema1/5.png', alt='')

        .cajon.color-acento-botones.p-4.mb-4.bg-color-8.mb-5
          p.mb-0 Al analizar las combinaciones estratégicas, lo cual es clave, porque aquí se cruzan los factores internos (fortalezas y debilidades) con los externos (oportunidades y amenazas). No se trata solo de listar, sino de pensar cómo interactúan entre sí y qué estrategias se pueden generar a partir de esas combinaciones.

        .titulo-sexto.color-primario.mb-5
            h5 Table 1
            span Tipos de estrategias según combinaciones DOFA
          
        .tabla-a.color-acento-botones 
          table
            caption Fuente: Kotler & Armstrong (2021).
            thead
              tr
                th.bg-color-4.text-white Tipo de Estrategia
                th.bg-color-4.text-white Combinación
                th.bg-color-4.text-white Descripción
                th.bg-color-4.text-white Ejemplo
            tbody
              tr.bg-color-white
                td FO - Ofensiva
                td Fortalezas + Oportunidades
                td Usan lo que se hace bien internamente para aprovechar condiciones favorables del entorno. 
                td Empresa con alta innovación lanza nuevos productos en mercados en crecimiento.
              tr.bg-color-5
                td DO - Adaptativa
                td Debilidades + Oportunidades
                td Permiten aprovechar oportunidades, pero requieren corregir debilidades internas.
                td Empresa no ecológica adapta sus procesos ante la demanda de productos sostenibles.
              tr.bg-color-white
                td FA - Defensiva
                td Fortalezas + Amenazas
                td Usan fortalezas para reducir el impacto de amenazas externas.
                td Marca reconocida mantiene clientela frente a nuevos competidores.
              tr.bg-color-5
                td DA - Supervivencia
                td Debilidades + Amenazas
                td Necesarias cuando hay vulnerabilidad interna y externa; se busca minimizar riesgos.
                td Empresa vulnerable reduce gastos y busca alianzas estratégicas.
    
   
    div.tarjeta-horz(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/tema1/10.png', alt='Imagen decorativa')
      div
        p.mb-0 Una vez se han identificado las combinaciones estratégicas, el siguiente paso es convertirlas en acciones reales, prácticas y medibles. Según Robbins y Coulter (2022), una estrategia efectiva debe traducirse en pasos concretos que guíen el accionar de la empresa.
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-primario.mb-5
            h5 Table 2
            span Pasos para establecer estrategias concretas
          
        .tabla-a.color-acento-botones 
          table
            caption Fuente. SENA, 2025
            thead
              tr
                th.bg-color-4.text-white PASO
                th.bg-color-4.text-white ACCIÓN
                th.bg-color-4.text-white PREGUNTAS CLAVE
                th.bg-color-4.text-white EJEMPLO
            tbody
              tr.bg-color-white
                td 1
                td Definir objetivos claros
                td ¿Qué se espera lograr?
                td Aumentar ventas, reducir costos, mejorar procesos.
              tr.bg-color-5
                td 2
                td Diseñar acciones específicas
                td ¿Qué se va a hacer exactamente?
                td Lanzar campaña publicitaria, abrir nuevo canal de ventas, capacitar equipo.
              tr.bg-color-white
                td 3
                td Asignar responsables y recursos
                td ¿Quién lo hará? ¿Qué se necesita?
                td Definir responsables, asignar presupuesto, herramientas y equipos.
              tr.bg-color-5
                td 4
                td Establecer plazos y seguimiento
                td ¿Cuándo se hace? ¿Cómo se mide?
                td Definir tiempos de ejecución, indicadores de evaluación.

    .row.mb-5.justify-content-center
      .col-lg-8
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
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
