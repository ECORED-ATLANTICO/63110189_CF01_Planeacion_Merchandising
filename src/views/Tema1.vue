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
      h5 Figura 1.
      span Elementos de matriz PESTEL

    figure.mb-3
      img.d-none.d-md-flex(src="@/assets/curso/temas/tema1/4.svg", data-aos="zoom-in", alt="Se ilustran los elementos de la matriz PESTEL: políticos, económicos, socioculturales, tecnológicos, ecológicos y legales.")
      img.d-flex.d-md-none(src="@/assets/curso/temas/tema1/4-1.svg", data-aos="zoom-in", alt="Se ilustran los elementos de la matriz PESTEL: políticos, económicos, socioculturales, tecnológicos, ecológicos y legales.")
    figcaption.mb-5 Fuente. SENA, 2025.

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
            h5 Tabla 1.
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
            h5 Tabla 2.
            span Pasos para establecer estrategias concretas
          
        .tabla-a.color-acento-botones 
          table
            caption Fuente. SENA, 2025.
            thead
              tr
                th.bg-color-4.text-white Paso
                th.bg-color-4.text-white Acción
                th.bg-color-4.text-white Preguntas clave
                th.bg-color-4.text-white Ejemplo
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
        .titulo-sexto.color-primario.mb-5
          h5 Figura 2.
          span Elementos de matriz DOFA
        figure
          img.d-flex.d-md-none(src='@/assets/curso/temas/tema1/11-5.svg', alt='Ilustra los elementos de la matriz análisis DOFA. Debilidades:son factores internos negativos. Aspectos que limitan el desempeño. Oportunidades: son factores externos positivos. Condiciones del entorno que pueden aprovecharse. Fortalezas: son factores internos positivos. Capacidades y recursos que favorecen el éxito. Amenazas: factores externos negativos. Factores del entorno que pueden afectar negativamente.')
        ImagenInfografica.color-secundario.d-none.d-md-flex
          template(v-slot:imagen)
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/11.svg', alt='Ilustra los elementos de la matriz análisis DOFA. Debilidades:son factores internos negativos. Aspectos que limitan el desempeño. Oportunidades: son factores externos positivos. Condiciones del entorno que pueden aprovecharse. Fortalezas: son factores internos positivos. Capacidades y recursos que favorecen el éxito. Amenazas: factores externos negativos. Factores del entorno que pueden afectar negativamente.')
            figcaption Fuente. SENA, 2025.

          .tarjeta.color-acento-botones.p-3(x="3%" y="43%" numero="+")
            .row
              .col-lg-4
                img(src='@/assets/curso/temas/tema1/11-1.svg', alt='Imagen decorativa')
              .col-lg-8
                h5 Debilidades 
                p Son factores internos negativos.  Aspectos que limitan el desempeño.
          .tarjeta.color-acento-botones.p-3(x="20%" y="81%" numero="+")
            .row
              .col-lg-4
                img(src='@/assets/curso/temas/tema1/11-2.svg', alt='Imagen decorativa')
              .col-lg-8
                h5 Oportunidades
                p  Son factores externos positivos. Condiciones del entorno que pueden aprovecharse.
          .tarjeta.color-acento-botones.p-3(x="78%" y="81%" numero="+")
            .row
              .col-lg-4
                img(src='@/assets/curso/temas/tema1/11-3.svg', alt='Imagen decorativa')
              .col-lg-8
                h5 Fortalezas
                p Son factores internos positivos. Capacidades y recursos que favorecen el éxito.
          .tarjeta.color-acento-botones.p-3(x="97%" y="43%" numero="+")
            .row
              .col-lg-4
                img(src='@/assets/curso/temas/tema1/11-4.svg', alt='Imagen decorativa')
              .col-lg-8
                h5 Amenazas
                p Factores externos negativos. Factores del entorno que pueden afectar negativamente.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto <em>Benchmarking</em>
    
    p.mb-5 El <em>benchmarking</em> es un proceso de comparación con las mejores prácticas del sector para mejorar el desempeño organizacional. Camp (1989) menciona que esta herramienta es crucial para la mejora continua y el aprendizaje de experiencias exitosas en la industria. A continuación, se enuncian pasos para realizar <em>benchmarking</em>:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .bg-full-width.bg-color-7.mb-5
          .px-4.px-md-5
            .row.justify-content-center
              .col-lg-8.mb-3.mb-lg-0.order-lg-2.p-4
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Seleccionar el objeto de estudio: identificar el proceso, producto o servicio a mejorar.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Determinar los referentes: elegir empresas líderes en el sector.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Recopilar información: investigar prácticas exitosas a través de fuentes confiables.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Analizar las diferencias: comparar las prácticas de la organización con las de los referentes.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/temas/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    p.text-center Implementar mejoras: aplicar ajustes basados en los hallazgos del análisis.
        
              .col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/temas/tema1/12.svg', alt='')

        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-primario
              h5 Figura 3.
              span <em>Benchmarking</em> no es
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure.mb-3
                  img(src='@/assets/curso/temas/tema1/18.svg', alt='Ilustra lo que no es el benchmarking. No es copiar, es adaptarse y no imitar. No es sólo competencia, también incluye otros sectores. No es puntual, es un proceso continuo. No es espionaje, usa información legal y pública. Y no sólo son números, analiza estrategias y procesos.')
                figcaption Fuente. SENA, 2025.

              .tarjeta.color-acento-botones.p-3(x="24.5%" y="87%" numero="+")
                .h5.mb-2 01
                p No se trata de imitar exactamente lo que hacen otras empresas, sino de adaptar las mejores prácticas a tu realidad.
              .tarjeta.color-acento-botones.p-3(x="7.8%" y="45.3%" numero="+")
                .h5.mb-2 02
                p Aunque puede incluir competidores, también se pueden analizar empresas de otros sectores que tengan procesos exitosos.
              .tarjeta.color-acento-botones.p-3(x="35.5%" y="14.5%" numero="+")
                .h5.mb-2 03
                p No se hace una sola vez y ya; el <em>Benchmarking</em>  es un proceso continuo de mejora.
              .tarjeta.color-acento-botones.p-3(x="77.5%" y="19.3%" numero="+")
                .h5.mb-2 04
                p Se basa en información pública, estudios de mercado y análisis legales, no en obtener datos de manera desleal.
              .tarjeta.color-acento-botones.p-3(x="92%" y="60%" numero="+")
                .h5.mb-2 05
                p Va más allá de métricas y analiza estrategias, procesos y modelos de negocio para mejorar el desempeño.

    separador

    #t_1_2.titulo-segundo.color-secundario(data-aos="flip-up")
      h2 1.2 Aplicabilidad de herramientas
    
    p.mb-5 Cada herramienta de análisis estratégico tiene un propósito específico y se aplica en diferentes contextos según las necesidades de la empresa. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.bg-fondo-4.p-4
        SlyderA(tipo="b").bg-white.p-4
          div
            h4 Aplicación del análisis PESTEL
            p Cuándo aplicarlo:
            ul.lista-ul--separador.mb-5
              li 
                i.fas.fa-check-circle.bg-color-9
                | Al ingresar a un nuevo mercado.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Antes de lanzar un nuevo producto o servicio.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Para evaluar cambios en el entorno externo que puedan afectar a la empresa.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Durante la planificación estratégica a mediano y largo plazo.
            p Por qué aplicarlo:
            ul.lista-ul--separador
              li 
                i.fas.fa-check-circle.bg-color-9
                | Permite anticipar riesgos y oportunidades externas.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Facilita la adaptación a cambios en la legislación, economía o tendencias sociales.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Ayuda a diseñar estrategias alineadas con el entorno macroeconómico.
          div
            h4 Aplicación y análisis DOFA
            p Cuándo aplicarlo:
            ul.lista-ul--separador.mb-5
              li 
                i.fas.fa-check-circle.bg-color-9
                |En la fase inicial de la planificación estratégica.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Antes de tomar decisiones clave sobre crecimiento o inversión.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Para evaluar el rendimiento interno de la organización.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Al redefinir objetivos comerciales o mejorar procesos internos.
            p Por qué aplicarlo:
            ul.lista-ul--separador
              li 
                i.fas.fa-check-circle.bg-color-9
                |Proporciona una visión integral de la situación interna y externa de la empresa.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Facilita la toma de decisiones basada en fortalezas y oportunidades.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Permite diseñar estrategias para superar debilidades y mitigar amenazas.
          div
            h4 Aplicación y análisis del <em>benchmarking</em>
            p Cuándo aplicarlo:
            ul.lista-ul--separador.mb-5
              li 
                i.fas.fa-check-circle.bg-color-9
                |Cuando se buscan mejoras en procesos internos.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Para identificar tendencias y mejores prácticas en el sector.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Antes de implementar estrategias de diferenciación o innovación.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Al detectar áreas de bajo rendimiento dentro de la organización.
            p Por qué aplicarlo:
            ul.lista-ul--separador
              li 
                i.fas.fa-check-circle.bg-color-9
                |Facilita el aprendizaje a partir de empresas exitosas.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Permite mejorar la eficiencia operativa y la competitividad.
              li 
                i.fas.fa-check-circle.bg-color-9
                |Ayuda a establecer estándares de calidad basados en líderes del mercado.
    
    h2.mb-5(data-aos="fade-left") Aplicabilidad herramienta PESTEL

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h4.mb-2 Cuándo
              p.mb-0 Nuevos mercados, lanzamientos, cambios externos, planificación.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-14.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/20-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4.mb-2 Por qué
              p.mb-0 Identifica riesgos y oportunidades del entorno macro.
    
    h2.mb-5(data-aos="fade-left") Aplicabilidad herramienta DOFA

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-14.p-4.tarjeta(data-aos="fade-up").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/21.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h4.mb-2 Cuándo
              p.mb-0 Inicio de planes, decisiones clave, evaluación interna, redefinición de objetivos.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4.tarjeta(data-aos="fade-down").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/21-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4.mb-2 Por qué
              p.mb-0 Analiza fortalezas, debilidades, oportunidades y amenazas.

    h2.mb-5(data-aos="fade-left") Aplicabilidad herramienta <em>benchmarking</em> 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/22.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h4.mb-2 Cuándo
              p.mb-0 Mejorar procesos, buscar buenas prácticas, innovar, Corregir fallos.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-14.p-4.tarjeta(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/22-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4.mb-2 Por qué
              p.mb-0 Aprende de lideres, mejora eficiencias y establece estándares.
    

    separador

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        #t_1_3.titulo-segundo.color-secundario(data-aos="flip-up")
          h2 1.3	Ejemplo análisis estratégico
        
        .row.mb-5.justify-content-center
          .col-lg-6
            h3.mb-0.text-white.bg-color-10.p-4.text-center Análisis Estratégico del Punto de Venta SENASHOP

        .row.mb-3
          .col-lg-5
            p <b>Tipo de negocio:</b> 
              span <u>almacén de ropa y artículos de belleza</u>
          .col-lg-4
            p <b>Ubicación:</b> 
              span <u>centro de Barranquilla, Atlántico</u>
          .col-lg-3
            p <b>Nombre comercial:</b> 
              span <u>SENASHOP</u>
        
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th(width="20%").bg-color-13
                th.bg-color-11.text-white Aspectos negativos
                th.bg-color-11.text-white Aspectos positivos
            tbody
              tr.bg-color-white
                td Factores internos
                td 
                  h5.mb-5 Debilidades (D)
                  ul.lista-ul--separador.mb-5
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Limitado presupuesto para publicidad y expansión.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Baja visibilidad de marca frente a tiendas grandes y cadenas.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Falta de tienda en línea funcional.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Espacio reducido en el punto de venta.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Inventario limitado en tallas o colores en épocas de alta demanda.

                td 
                  h5.mb-5 Fotalezas (F)
                  ul.lista-ul--separador.mb-5
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Ubicación estratégica en una zona de alto flujo peatonal.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Variedad de productos: ropa para todas las edades, maquillaje, cuidado capilar y perfumería.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Atención personalizada al cliente y asesoría en moda y belleza.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Personal capacitado en ventas y experiencia del cliente.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Precios competitivos frente a marcas reconocidas.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Presencia inicial en redes sociales con buena acogida.
              tr.bg-color-12
                td Factores externos
                td 
                  h5.mb-5 Amenazas (A)
                  ul.lista-ul--separador.mb-5
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Alta competencia con almacenes cercanos y centros comerciales.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Cambios en el comportamiento del consumidor hacia compras digitales.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Inestabilidad económica que afecta el poder adquisitivo.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Fluctuación en los precios de proveedores.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Riesgos de seguridad por ubicación en zona céntrica.
                    
                td 
                  h5.mb-5 Oportunidades (O)
                  ul.lista-ul--separador.mb-5
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Crecimiento del comercio en línea y posibilidad de ventas por redes sociales.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Tendencia creciente hacia el cuidado personal y la moda urbana.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Eventos masivos y festividades locales que generan picos de ventas (Carnaval, Navidad, Día de la Madre).
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Posibilidad de alianzas con microinfluencers locales.
                    li.d-flex 
                      i.fas.fa-check-circle.bg-color-9
                      | Programas de apoyo a emprendimientos y financiación por entidades públicas.


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Matriz DOFA
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-primario.mb-5
            h5 Tabla 3.
            span Matriz DOFA
          
        .tabla-a.color-acento-botones 
          table
            caption Fuente. SENA, 2025.
            thead
              tr
                th.bg-color-4.text-white Internas/externas
                th.bg-color-4.text-white Oportunidades (O)
                th.bg-color-4.text-white Amenazas (A)
            tbody
              tr.bg-color-white
                td Fortalezas (F)
                td FO (Estrategias ofensivas): aprovechar las fortalezas internas para capitalizar oportunidades.
                td FA (Estrategias de defensa): usar fortalezas para enfrentar amenazas del entorno.
              tr.bg-color-5
                td Debilidades (D)
                td DO (Estrategias adaptativas): superar debilidades aprovechando oportunidades.
                td DA (Estrategias de supervivencia): minimizar debilidades y evitar amenazas.
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        h2(data-aos="fade-left") Estrategias derivadas
      
        TabsC.color-acento-botones.mb-5
          .tabs-content.border.px-4.p-md-5.py-3.bg-color-white(titulo="FO – Estrategias ofensivas")
            .row.justify-content-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 FO - Estrategias ofensivas
                ul.lista-ul--separador.mb-5
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Lanzar promociones en temporadas festivas, aprovechando la ubicación céntrica y alto tráfico para aumentar las ventas (F1, F2 + O3).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Usar redes sociales para mostrar productos y hacer transmisiones en vivo, capitalizando el talento del personal y la tendencia de compras online (F3, F6 + O1, O4).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Ofrecer paquetes de asesoría personalizada de moda y belleza para crear experiencias únicas y aumentar el valor percibido (F3, F4 + O2).
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/23.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3.bg-color-white(titulo="Definir")
            .row.justify-content-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 DO - Estrategias adaptativas
                ul.lista-ul--separador.mb-5
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Solicitar apoyo de programas gubernamentales o de formación SENA para digitalizar el negocio y capacitar en marketing digital (D1, D3 + O1, O5).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Aprovechar eventos culturales para posicionarse, saliendo del punto de venta con muestras itinerantes y así ganar visibilidad sin altos costos (D2 + O3).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Vincular microinfluencers locales con intercambio por productos para aumentar visibilidad de la marca (D1, D2 + O4).
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/24.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3.bg-color-white(titulo="Idear")
            .row.justify-content-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 FA - Estrategias de defensa
                ul.lista-ul--separador.mb-5
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Potenciar la atención personalizada y asesoría experta como diferencial frente a grandes tiendas con menor contacto humano (F3, F4 + A1).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Desarrollar una estrategia de fidelización de clientes frecuentes para mantener flujo de ingresos estable (F2, F5 + A3).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Negociar directamente con proveedores regionales para reducir costos y asegurar precios estables (F5 + A4).
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/25.png', alt='', style="width: 100%;")
        
          .tabs-content.border.px-4.p-md-5.py-3.bg-color-white(titulo="Prototipar")
            .row.justify-content-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 DA - Estrategias de supervivencia:
                ul.lista-ul--separador.mb-5
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Implementar catálogo virtual y venta por WhatsApp como alternativa económica ante la falta de tienda online (D3 + A2).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Controlar cuidadosamente el inventario y rotación de productos para minimizar pérdidas en temporada baja (D5 + A3).
                  li.d-flex 
                    i.fas.fa-check-circle.bg-color-9
                    | Aumentar la seguridad física del local con cámaras y seguros para mitigar riesgos por ubicación (D4 + A5).
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/26.png', alt='', style="width: 100%;")
    
        h2(data-aos="fade-left") Conclusión estratégica

        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/27.png", data-aos="zoom-in")
          .col-lg-9(data-aos="fade-left")
            p.mb-5 SENASHOP, como punto de venta en el corazón de Barranquilla, cuenta con ventajas importantes como su ubicación y el enfoque humano en la atención. Sin embargo, para consolidarse y crecer, necesita adaptarse al entorno digital y fortalecer su presencia de marca. 
            .cajon.color-acento-botones.p-4.mb-4.bg-color-8
              p.mb-0 Las estrategias planteadas combinan soluciones prácticas y viables, enfocadas en el uso eficiente de recursos, aprovechamiento de oportunidades y protección ante amenazas del entorno.
         


             

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
