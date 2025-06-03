export default {
  global: {
    Name: 'Análisis estratégico del mercado',
    Description:
      'El módulo Análisis estratégico del mercado ayuda a comprender el entorno competitivo, identificar oportunidades y tomar decisiones fundamentadas. Se aprenderá a evaluar tendencias, comportamiento del consumidor y factores clave que influyen en la comercialización. Con este conocimiento, se podrá diseñar estrategias efectivas para diferenciar y fortalecer la posición de un negocio en el mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Herramientas de análisis estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de herramientas para análisis estratégico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aplicabilidad de herramientas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ejemplo análisis estratégico',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de mercado',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elementos internos del mercado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elementos externos del mercado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_63110189_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas de Análisis Estratégico',
      referencia:
        'Cuenta Conmigo. (2020). Análisis PESTEL. Fácil, rápido y sencillo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zr19Z0kVA1w',
    },
    {
      tema: 'Herramientas de Análisis Estratégico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Benchmarking</em>: qué es, cómo funciona, utilidad [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4by9PtD7qDw',
    },
    {
      tema: 'Herramientas de Análisis Estratégico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Estrategia de diagnóstico y análisis empresarial [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CDspVWIYvRk ',
    },
    {
      tema: 'Herramientas de Análisis Estratégico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Matriz DOFA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=84fuGpQeYg0',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'evaluación detallada de una situación para tomar decisiones estratégicas.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'comparación con empresas líderes para identificar mejores prácticas.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona o entidad que adquiere productos o servicios de una empresa.',
    },
    {
      termino: 'Competencia',
      significado:
        'empresas o actores que ofrecen productos o servicios similares en el mercado.',
    },
    {
      termino: 'Diferenciación',
      significado:
        'estrategia para destacar en el mercado mediante atributos únicos.',
    },
    {
      termino: 'DOFA',
      significado:
        'herramienta de análisis estratégico que evalúa <b>Debilidades, Oportunidades, Fortalezas y Amenazas.</b>',
    },
    {
      termino: 'Entorno',
      significado:
        'factores internos y externos que afectan el desarrollo de una empresa.',
    },
    {
      termino: 'Estrategia',
      significado:
        'plan de acción diseñado para alcanzar objetivos organizacionales.',
    },
    {
      termino: 'Innovación',
      significado:
        'introducción de mejoras o cambios significativos en productos, servicios o procesos.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'conjunto de estrategias para atraer y fidelizar clientes mediante productos y servicios.',
    },
    {
      termino: 'Mercado',
      significado:
        'espacio donde se realizan intercambios de bienes y servicios entre compradores y vendedores.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'estructura que define como una empresa genera y entrega valor.',
    },
    {
      termino: 'PESTEL',
      significado:
        'análisis de factores <b>Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales</b> que influyen en una organización.',
    },
    {
      termino: 'Segmentación',
      significado:
        'división del mercado en grupos homogéneos para estrategias más efectivas.',
    },
    {
      termino: 'Valor',
      significado:
        'beneficio percibido por un cliente al adquirir un producto o servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beltrán Espitia, G. (2018). El arte de seducir: Merchandising (1.ª ed.). Ecoe Ediciones. [PDF]. Recuperado de ',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/01/El-arte-de-seducir-1.pdf',
    },
    {
      referencia:
        '<em>Camp, R. C. (1989). Benchmarking: The search for industry best practices that lead to superior performance. ASQC Quality Press</em>',
      link: '',
    },
    {
      referencia:
        '<em>Chernev, A. (2020). Strategic marketing management (9th ed.). Cerebellum Press.</em> ',
      link: '',
    },
    {
      referencia:
        '<em>David, F. R. (2020). Strategic management: A competitive advantage approach, concepts and cases (17th ed.). Pearson.</em>',
      link: '',
    },
    {
      referencia:
        '<em>Kotler, P., & Armstrong, G. (2018). Principles of marketing (17th ed.). Pearson.</em',
      link: '',
    },
    {
      referencia:
        '<em>Kotler, P., & Keller, K. L. (2016). Marketing management (15th ed.). Pearson.</em',
      link: '',
    },
    {
      referencia:
        '<em>Porter, M. E. (2008). The five competitive forces that shape strategy. Harvard Business Review</em>, 86(1), 78-93.',
      link: '',
    },
    {
      referencia:
        '<em>Chiavenato, I.</em> (2006). Introducción a la teoría general de la administración (7.ª ed.). <em>McGraw-Hill.</em> ',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15525/mod_resource/content/0/Chiavenato%20Idalverto.%20Introducci%C3%B3n%20a%20la%20teor%C3%ADa%20general%20de%20la%20Administraci%C3%B3n.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos  ',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: '	Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
