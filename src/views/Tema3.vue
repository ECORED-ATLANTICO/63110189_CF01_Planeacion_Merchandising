<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Elementos internos del mercado
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        p.mb-5 Los elementos internos del mercado corresponden a los factores que la empresa puede controlar directamente, los cuales inciden de manera significativa en su desempeño, competitividad y sostenibilidad en el tiempo. <b>Estos elementos incluyen aspectos como:</b>

        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/1.png", alt="").mb-4.mb-lg-0
          .col-lg-7
            LineaTiempoD.color-acento-botones
              p(numero="1" titulo="Gestión del talento humano") Administración y desarrollo de las personas que conforman la empresa. Un factor interno esencial para potenciar el desempeño, la innovación y la capacidad competitiva.
              
              p(numero="2" titulo="Calidad del producto o servicio") Nivel de excelencia y valor entregado al cliente. Clave para la diferenciación, la satisfacción del cliente y la sostenibilidad del negocio en el mercado.
              
              p(numero="3" titulo="Estrategia de precios") Definición del valor monetario de lo que se ofrece. Decisión interna crítica que impacta directamente en la rentabilidad, percepción y posicionamiento competitivo.
              
              p(numero="4" titulo="Relaciones con los clientes") Construcción y manejo de los vínculos con los compradores. Esencial para fomentar la lealtad, entender sus necesidades y mejorar continuamente.
              p(numero="5" titulo="Manejo financiero") Administración eficiente de los recursos económicos. Un pilar interno para asegurar la viabilidad, financiar el crecimiento y tomar decisiones informadas.
              p(numero="6" titulo="Estructura organizacional") Diseño de cómo se organiza y coordina el trabajo dentro de la empresa. Define roles y flujos, impactando la agilidad, la eficiencia y  la capacidad de respuesta.

        h2(data-aos="fade-left") ¿Por qué es importante? 

        .row.mb-5.justify-content-center
          .col-lg-10.mb-5.mb-lg-0
            //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0 Según Kotler y Keller (2016), una gestión eficiente de estos elementos permite a las organizaciones desarrollar ventajas competitivas sostenibles, diferenciarse en el mercado y responder con mayor agilidad a los cambios del entorno. El control sobre estos factores también facilita la toma de decisiones coherentes con los objetivos estratégicos de la empresa y la implementación de acciones orientadas al crecimiento.
                i.fas.fa-quote-right
    
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Además, la capacidad de adaptar y optimizar los elementos internos puede marcar la diferencia entre el éxito y el estancamiento de una organización. Por ejemplo, una empresa del sector textil que invierte en innovación de diseño, formación continua de su equipo y procesos de producción sostenibles puede no solo reducir costos operativos, sino también ofrecer productos diferenciados que conecten emocionalmente con el consumidor. Esta combinación de control interno y visión estratégica le permite posicionarse favorablemente frente a sus competidores y fortalecer su reputación en el mercado. En consecuencia, revisar y ajustar periódicamente estos elementos se convierte en una tarea clave para mantener la relevancia y competitividad en entornos cada vez más exigentes.
    
    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        p.mb-5 A continuación, se describen los principales elementos internos del mercado y sus posibles afectaciones negativas y positivas:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .titulo-sexto.color-primario
              h5 Tabla 6.
              span Elementos internos de mercado
            
            .tabla-a.color-acento-botones
              table
                caption Fuente: Kotler, P., & Keller, K. L. (2016).
                thead
                  tr
                    th.bg-color-4.text-white Tipo de elemento
                    th.bg-color-4.text-white Definición
                    th.bg-color-4.text-white Afectación negativa
                    th.bg-color-4.text-white Afectación positiva
                tbody
                  tr.bg-color-white
                    td Clientes
                    td Personas y/o empresas que obtienen productos y/o servicios.
                    td Pérdida de clientes por insatisfacción.
                    td Fidelización y crecimiento del mercado.
                  tr.bg-color-5
                    td Competencia
                    td Entidades que brindan productos y/o servicios similares.
                    td Reducción de cuota de mercado.
                    td Innovación y mejora de estrategias comerciales.
                  tr.bg-color-white
                    td Precio
                    td Valor monetario fijado a un producto y/o servicio.
                    td Precios inadecuados pueden afectar la demanda.
                    td Estrategias de precios competitivos pueden atraer clientes.
                  tr.bg-color-5
                    td Inversores
                    td Personas y/o entes que invierten en la empresa.
                    td Falta de inversión puede limitar el crecimiento.
                    td Capital disponible para expansión y desarrollo.
        
        .cajon.color-acento-contenido.p-4.mb-4.bg-color-6
          p.mb-0 Son factores controlables por la empresa que afectan su desempeño en el mercado. Kotler (2016) enfatiza que gestionar estos elementos de manera eficiente puede generar ventajas competitivas sostenibles.




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
