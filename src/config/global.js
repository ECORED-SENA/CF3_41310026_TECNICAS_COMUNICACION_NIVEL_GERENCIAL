export default {
  global: {
    componenteFormativo: 'Sistemas de información',
    descripcionCurso:
      'El componente formativo trata sobre la importancia de la calidad y confiabilidad de los datos en los sistemas de información organizacional y gerencial. Destaca la necesidad de diferenciar entre datos e información, y cómo estos, al ser procesados adecuadamente, son fundamentales para la toma de decisiones y la eficiencia en la gestión de las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Información y datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Los sistemas de información en la organización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de información en el nivel gerencial',
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
        download: 'downloads/41310026_CF3_DU.pdf',
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
      tema: 'Información y datos',
      referencia:
        'Innovación Aprendizaje. (2016). Video: Los datos y la información. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IEx7KVfOqfM',
    },
    {
      tema: 'Los sistemas de información en la organización',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Sistemas de información.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n9kqKg1tDV0',
    },
    {
      tema: 'Los sistemas de información en la organización',
      referencia:
        'Albós Raya, A. (2019). Introducción a los sistemas de información en las organizaciones. UOC.',
      tipo: 'Documento',
      link:
        'https://openaccess.uoc.edu/bitstream/10609/148041/2/IntroduccionALosSistemasDeInformacionEnLasOrganizaciones.pdf',
    },
    {
      tema: 'Sistemas de información en el nivel gerencial',
      referencia:
        'Dirección de Educación en Línea. (2019). Sistemas Gerenciales - Sistemas de información y de gestión empresarial - Udla en línea. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4H5t2CL6FZUv',
    },
    {
      tema: 'Sistemas de información en el nivel gerencial',
      referencia: 'Périssé, M. (s.f.). Sistemas de información gerencial.',
      tipo: 'Documento',
      link: 'https://www.regionpiura.gob.pe/documentos/bases/PphpSuzzy0.PDF',
    },
  ],
  glosario: [
    {
      termino: 'Entrada',
      significado:
        'elementos que ingresan al sistema desde el entorno con el objetivo de ser procesados al interior del mismo.',
    },
    {
      termino: 'Información',
      significado:
        'conjunto de datos procesados que posibilita el conocimiento de algún hecho o fenómeno.',
    },
    {
      termino: 'Procesamiento',
      significado:
        'mecanismo utilizado para convertir las entradas en salidas, produciendo cambios y agregando valor y utilidad a los elementos procesados.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'función inherente al sistema de información que compara las salidas con estándares o criterios establecidos, ejerciendo control sobre el sistema.',
    },
    {
      termino: 'Salida',
      significado:
        'elementos resultantes o beneficios obtenidos de la transformación ocurrida durante el procesamiento.',
    },
    {
      termino: 'SIG',
      significado:
        'sistemas de información gerencial que asisten en la toma de decisiones y facilitan estrategias para aumentar la productividad de la organización, también conocidos como <i>Business Intelligence</i>.',
    },
    {
      termino: 'Sistema',
      significado:
        'conjunto de elementos dinámicamente relacionados entre sí, en el que se ejecuta una actividad para alcanzar un objetivo. Opera sobre entradas y provee salidas procesadas en el contexto en el que está inserto.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'sistema especializado cuyos elementos se interrelacionan para recolectar, procesar y difundir datos e información en pro del cumplimiento de un objetivo establecido dentro del sistema mismo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andreu, R., Ricart, J., & Valor, J. (1996). <i>Estrategia y sistemas de información (2ª ed.)</i>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Arjonilla, D., Sixto, J., Medina, G., & José, A. (2002). <i>La gestión de los sistemas de información en la empresa</i>. Madrid: Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Fernández, V. (2006). <i>Desarrollo de sistemas de información: Una metodología basada en el modelado</i>. Catalunya: Universitat Politècnica de Catalunya.',
      link: '',
    },
    {
      referencia:
        'Laudon, J., & Laudon, K. (2004). <i>Sistemas de información gerencial (8ª ed.)</i>. México: Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ponjuan, G. (2004). <i>Sistemas de información: Principios y aplicaciones</i>. La Habana.',
      link: '',
    },
    {
      referencia:
        'Whitten, J., Bentley, L. D., & Dittman, K. (2004). <i>System analysis & design methods (International edition)</i>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Herney Sánchez Pizarro',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Uhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
