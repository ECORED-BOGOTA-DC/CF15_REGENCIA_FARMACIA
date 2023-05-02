export default {
  global: {
    componenteFormativo:
      'Almacenar y controlar productos farmacéuticos en los servicios farmacéuticos',
    descripcionCurso:
      'Este componente aborda los conocimientos de almacenamiento de los productos según las condiciones locativas y técnicas del almacenamiento de los productos farmacéuticos según direccionamientos normativos, el seguimiento y evaluación del proceso de almacenamiento de medicamentos y los dispositivos médicos, para que los aprendices reconozcan cada uno de los parámetros a seguir que permitan aplicar las buenas prácticas de almacenamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        //imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        //imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Ubicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de ubicaciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Señalización del espacio',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Almacenaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodos de almacenaje',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Capacidad de almacenamiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Condiciones y controles de las fechas de vencimiento',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medicamentos de alto costo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medicamentos de control especial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Documentos utilizados durante el proceso de almacenamiento de medicamentos y dispositivos médicos',
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
      tema: 'Almacenaje',
      referencia:
        'Ministerio de Salud y Protección Social. (2020). <i>Manual buenas prácticas de almacenamiento bodega zona franca del Ministerio de Salud y Protección Social.</i> MinSalud.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/ABIM02.pdf',
    },
    {
      tema: 'Medicamentos de alto costo',
      referencia:
        'Universidad Nacional de Colombia. (2017). <i>Medicamentos enfermedades huérfanas</i> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=FtfPRkVEd1s&ab_channel=UniversidadNacionaldeColombia%E2%80%93SitioOficial',
    },
    {
      tema: '',
      referencia:
        'MinSalud. (2014). <i>ABECÉ sobre medicamentos biotecnológicos.</i> MinSalud.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/MET/abc-biomedicamentos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ámbar',
      significado:
        'Color entre amarillo y naranja, como el de esta resina fósil.',
    },
    {
      termino: 'Arrumar',
      significado: 'Poner unas cosas sobre otras.',
    },
    {
      termino: 'Compatibilidad',
      significado:
        'Que puede existir, ocurrir o hacerse al mismo tiempo que otra cosa y de forma armónica con ella o combinarse con ella sin estorbarla.',
    },
    {
      termino: 'Deshumidificador',
      significado:
        'Aparato de climatización que elimina la humedad del aire del lugar donde se tenga ubicado.',
    },
    {
      termino: 'Enfermedad catastrófica',
      significado:
        'Es aquella que representa una alta complejidad técnica en su manejo, alto costo, baja ocurrencia, bajo costo y efectividad en su tratamiento.',
    },
    {
      termino: 'Estibador',
      significado:
        'Es una máquina que permite colocar las cargas de forma regular y organizadas en <i>pallets</i> una encima de otra, en dos o más niveles.',
    },
    {
      termino: 'Extintor',
      significado: 'Artefacto que sirve para apagar el fuego.',
    },
    {
      termino: 'Fonética',
      significado: 'Conjunto de sonidos de una lengua o dialecto.',
    },
    {
      termino: 'Lupus eritematoso cutáneo',
      significado:
        'Enfermedad autoinmune (el sistema inmunológico ataca los tejidos y órganos del cuerpo) que afectan la piel.',
    },
    {
      termino: 'Medicamento LASA',
      significado:
        'Del inglés, <i>look alike, sound alike</i>, son aquellos medicamentos que se parecen físicamente o que sus nombres suenan parecidos, por ejemplo, cefalotina 1gr y cefazolina 1gr.',
    },
    {
      termino: 'Montacarga',
      significado:
        'Es un aparato de elevación que sirve para realizar el transporte de material o de personas. Consta de una plataforma que se desliza a través de guías metálicas dispuestas al efecto.',
    },
    {
      termino: 'Prevalecer',
      significado: 'Sobresalir o imponerse una persona o una cosa entre otras.',
    },
    {
      termino: 'Producto perecedero',
      significado:
        'Es aquel que, por su composición, características fisicoquímicas y biológicas, puede experimentar alteración de diversa naturaleza en un tiempo determinado y que por lo tanto, exige condiciones especiales de proceso, conservación, almacenamiento, transporte y expendio.',
    },
    {
      termino: 'Silicagel',
      significado:
        'Es un desecante que absorbe el exceso de humedad, protege y conserva sus productos durante el almacenaje y transporte.',
    },
    {
      termino: 'Síndrome de Noonan',
      significado:
        'Es una enfermedad que se puede presentar al momento del nacimiento (congénita), que causa desarrollo anormal en muchas partes del cuerpo anormal.',
    },
    {
      termino: 'Sistema FEFO',
      significado:
        'Adquiere su nombre en las siglas en inglés de <i>first expired - first out</i>, el primero que caduca debe ser el primero que salga.',
    },
    {
      termino: 'Sistema FIFO',
      significado:
        'Adquiere su nombre en las siglas en inglés de <i>first in - first out</i>, el primero en entrar  es el primero en salir.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 780 de 2016.  [Ministerio de Salud y Protección Social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf ',
    },
    {
      referencia:
        'Economía3. (2015). <i>¿Cómo ubicar los productos en el lineal?</i> Economía3.',
      link: 'https://economia3.com/como-ubicar-los-productos-en-el-lineal/',
    },
    {
      referencia:
        'Fondo Colombiano de Enfermedades de Alto Costo. (s.f.). <i>Normatividad.</i> Cuenta alto costo.',
      link: 'https://cuentadealtocosto.org/site/normatividad/',
    },
    {
      referencia:
        'Hospital San Rafael de Itagüí. (2020). <i>PR_04_AF-1-Almacenamiento de medicamentos y dispositivos médicos.</i> Hospital San Rafael de Itagüí.',
      link:
        'https://hsanrafael.gov.co/wp-content/uploads/2020/11/PR_04_AF-1-Almacenamiento-medicamentos-dispositivos-medicos-V7.pdf',
    },
    {
      referencia:
        'Interlake. (2018). <i>Cómo se calcula la capacidad de carga de las estanterías industriales.</i> Mecalux.',
      link:
        'http://interlake.com.mx/blog/se-calcula-la-capacidad-carga-las-estanterias-industriales/',
    },
    {
      referencia:
        'Mecalux. (2019). Almacén caótico: ventajas y retos de este sistema de gestión de ubicaciones. Mecalux.',
      link: 'https://www.mecalux.com.co/blog/almacen-caotico-ventajas',
    },
    {
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social]. Por la cual se determina el modelo de gestión del servicio farmacéutico, se adopta el manual de condiciones esenciales y procedimientos de dicho servicio y se dictan otras disposiciones. Mayo 14 de 2007.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
