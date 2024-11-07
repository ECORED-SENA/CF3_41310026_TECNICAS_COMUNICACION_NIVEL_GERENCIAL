<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Los sistemas de información en la organización
    p.mb-0(data-aos="fade-right") Los sistemas de información en una organización se fundamentan en la coherencia funcional entre la información, su manejo por parte del personal involucrado y los recursos disponibles para su movilización. Esta coherencia se refleja en las actividades y técnicas de trabajo empleadas para cumplir con los objetivos de la empresa.
    .row.bg-c6
      .col-12
        .p-5
          .row.mb-5
            .col-lg-4.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema2/img2.png", style="width: 410px", alt="").m-auto
            .col-lg-8.bg-c7(data-aos="fade-left")
              .p-4.p-lg-5
                p.mb-0 Un sistema se define, según el Diccionario de la Real Academia Española, #[b #[i como un conjunto de elementos interrelacionados que, de manera ordenada, contribuyen a un objetivo específico]]. En el contexto organizacional, un sistema de información es un conjunto formal de procesos que operan con un conjunto estructurado de datos.
          p.mb-5(data-aos="fade-right") Estos procesos están diseñados para capturar, depurar, almacenar, recuperar, actualizar y procesar datos, con el fin de proporcionar, distribuir y transmitir información en el lugar y momento en que sea requerido en la organización.
          .row.justify-content-center.mb-5
            .col-10.col-md-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
              .crd_hover_txt1
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema2/img3.png", alt="alt")
                .crd_hover_txt1--body
                  h4.text-center.text-white.mb-3 Sistema de información
                  p.text-center.text-white.mb-0 Está compuesto por un conjunto de elementos integrados e interrelacionados cuyo objetivo es cumplir las funciones de capturar, depurar, almacenar, recuperar, actualizar y procesar datos.
            .col-10.col-md-6.col-xl-4(data-aos="fade-left")
              .crd_hover_txt2
                .crd_hover_txt2--img
                  figure
                    img(src="@/assets/curso/tema2/img4.png", alt="alt")
                .crd_hover_txt2--body
                  h4.text-center.mb-3 Apoyo en la toma de decisiones
                  p.text-center.mb-0 Respalda las actividades de dirección y control, facilitando la toma de decisiones necesarias para desempeñar las funciones y procesos de negocio en consonancia con la estrategia de la empresa.
          p.mb-5(data-aos="fade-up") Además, un sistema de información incluye personas, datos, procesos y tecnologías de la información que interactúan para garantizar el flujo adecuado de información, indispensable para el correcto funcionamiento de la organización.
          .row.mb-4(data-aos="fade-right")
            .col-auto.bg-c8
              .px-2
                .row.align-items-end
                  .col-auto.pe-0
                    figure
                      img(src="@/assets/curso/tema2/img1.svg",style="width: 40px", alt="").m-auto
                  .col
                    h2.mb-0 Componentes del sistema de información en la organización
          p.mb-0(data-aos="fade-down") A continuación, se presentan los componentes principales de un sistema de información en la organización:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/EJ6ruqttscs?si=B0kuKrmKRHfUomMB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Estos componentes pueden clasificarse:]
    .row.mb-5
      .col-12
        .p-4.p-lg-5.bg-c9(data-aos="fade-down")
          .tarjeta.tarjeta--blanco
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Individuos]
                    p.mb-0 Son todas las personas que reciben y envían información dentro del sistema, asumiendo su tratamiento desde la perspectiva que tienen dentro y fuera de la organización.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img3.svg', style='width: 380px', alt='').m-auto
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Propietarios]
                    p.mb-0 Son las personas que patrocinan y promueven el sistema.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img4.svg', style='width: 380px', alt='').m-auto
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Usuarios]
                    p.mb-0 Son las personas dentro de la organización que utilizan el sistema para capturar, introducir, validar, transformar y almacenar datos e información. Este grupo es fundamental en el desarrollo de un sistema de información.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img5.svg', style='width: 380px', alt='').m-auto
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Datos e información]
                    p.mb-0 El procesamiento de los datos permite transformarlos en información.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img6.svg', style='width: 380px', alt='').m-auto
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Diseñadores]
                    p.mb-0 Expertos en tecnologías que resuelven las necesidades y restricciones manifestadas por los usuarios.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img7.svg', style='width: 380px', alt='').m-auto
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Constructores]
                    p.mb-0 Especialistas en tecnologías encargados de construir el sistema.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img8.svg', style='width: 380px', alt='').m-auto
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Analistas]
                    p.mb-0 Encargados de estudiar los problemas y necesidades de la organización para proponer mejoras.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img9.svg', style='width: 380px', alt='').m-auto
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p #[b Tecnologías de la información y la comunicación]
                    p.mb-0 Soporte físico sobre el cual se desarrolla el sistema de información.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/tema2/img10.svg', style='width: 380px', alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c8
        .px-2
          .row.align-items-end
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/tema2/img1.svg",style="width: 40px", alt="").m-auto
            .col
              h2.mb-0 Clasificación de los sistemas de información en la organización
    .row.bg-c10
      .col-12
        .px-5
          .row.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c11
                p.mb-0 Los sistemas de información no son esquemas cerrados que puedan aplicarse uniformemente a cualquier contexto, esperando que funcionen de la misma manera. Por el contrario, estos sistemas se desarrollan a partir de las necesidades específicas de cada sector, adaptándose según las características y requisitos particulares de cada organización. Se propone una clasificación de los sistemas de información en sub-sistemas funcionales, que se organizan según las funciones y actividades llevadas a cabo en las distintas áreas de la organización.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img7.png", style="width: 450px", alt="").m-auto
          p.mb-5(data-aos="fade-right") #[b Sistema de información de #[i marketing] (SIM)]: sistema estructurado de datos, personas, procedimientos, métodos y herramientas de tecnología de la información diseñado para generar un flujo ordenado de información relacionada con los negocios y el entorno organizacional. Este sistema tiene como objetivo proveer información para la toma de decisiones en las áreas de #[i marketing]. #[b.txt-c1 Procesa la información en tres derivaciones principales]:
          .row.justify-content-center.mb-5
            .col-11.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c12.shadow
                figure.mb-4
                  img(src="@/assets/curso/tema2/img12.svg", style="width: 100px", alt="").m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .px-2.py-1.bg-white
                      p.text-center.mb-0 #[b Inteligencia de #[i marketing]]
                p.text-center.mb-0 Se encarga de recopilar información relevante sobre el entorno.
            .col-11.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
              .p-4.bg-c12.shadow
                figure.mb-4
                  img(src="@/assets/curso/tema2/img13.svg", style="width: 100px", alt="").m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .px-2.py-1.bg-white
                      p.text-center.mb-0 #[b Información interna de mercadotecnia]
                p.text-center.mb-0 Recolectada dentro de la organización.
            .col-11.col-md-6.col-lg-4(data-aos="fade-left")
              .p-4.bg-c12.shadow
                figure.mb-4
                  img(src="@/assets/curso/tema2/img14.svg", style="width: 100px", alt="").m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .px-2.py-1.bg-white
                      p.text-center.mb-0 #[b Comunicaciones de mercadotecnia]
                p.text-center.mb-0 Gestionan el flujo de información desde la organización hacia el entorno.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 La información generada por este sistema pertenece al área estratégica de la organización. Estos sistemas de información son:]
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/img8.png", style="width: 300px", alt="").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Sistema de información para directivos (SID)")
            .col-12
              p.mb-0 Proporciona información a los directivos sobre el desempeño global de la organización. Este sistema utiliza fuentes de información interna, provenientes de las áreas funcionales, y fuentes externas de gran utilidad para las jerarquías más altas.
          .row(titulo="Sistema de información de recursos humanos (SIRH)")
            .col-12
              p.mb-0 Permite recopilar y almacenar información relacionada con los recursos humanos, para luego distribuirla a quienes la requieran.
          .row(titulo="Sistema de información financiera (SIF)")
            .col-12
              p.mb-0 Proporciona información relacionada con los estados financieros y asuntos económicos para quienes la necesiten, tanto dentro como fuera de la organización.
    p.mb-5(data-aos="fade-right") Las necesidades de las organizaciones varían debido a diferentes factores, entre ellos los diferentes niveles jerárquicos que existen dentro de la organización, que generalmente no coinciden en cuanto a sus necesidades e intereses. Por esta razón, se propone la clasificación de los sistemas de información según cuatro niveles jerárquicos principales:
    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Figura 1]. Niveles jerárquicos en una organización
    .row.mb-5
      .col-12
        .p-4.bg-c11(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/img15.svg", style="width: 400px", alt="La figura representa los cuatro niveles que representan las jerarquías en una organización. De arriba hacia abajo, los niveles son: nivel estratégico, nivel administrativo, nivel de conocimiento y nivel operativo.").m-auto
    p(data-aos="fade-right") Cada uno de estos niveles requiere diferentes tipos de sistemas de información, que faciliten el flujo de datos y permitan una comunicación efectiva y funcional, beneficiando tanto a las personas encargadas de la toma de decisiones como a la gerencia y a toda la organización.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 La clasificación en función del servicio ofrecido es:]
    TabsC.color-acento-contenido.mb-5(data-aos="fade-left")
      .p-4.p-md-5.bg-c13(titulo="Sistema de procesamiento de transacciones (TPS)")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img9.png', style="width: 500px", alt='').m-auto
          .col-lg-5
            p #[b Sistema de procesamiento de transacciones (TPS)]
            p.mb-0 Captura y procesa datos de las transacciones de negocios que se realizan diariamente en la organización. Es común en áreas como producción y contabilidad, donde se siguen procedimientos definidos.
      .p-4.p-md-5.bg-c13(titulo="Sistema de información gerencial o de gestión (MIS o SIG)")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img10.png', style="width: 500px", alt='').m-auto
          .col-lg-5
            p #[b Sistema de información gerencial o de gestión (MIS o SIG)]
            p.mb-0 Recolecta y procesa información para elaborar informes orientados a la gestión, basándose en el procesamiento de transacciones y operaciones de la organización. Este sistema es esencial para el nivel administrativo.
      .p-4.p-md-5.bg-c13(titulo="Sistema de trabajo del conocimiento (WKS)")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img11.png', style="width: 500px", alt='').m-auto
          .col-lg-5
            p #[b Sistema de trabajo del conocimiento (WKS)]
            p.mb-0 Promueve la creación de nuevos conocimientos, especialmente en la creación de nuevos productos y servicios. Ejemplos de este sistema se encuentran en las áreas de diseño y #[i marketing].
      .p-4.p-md-5.bg-c13(titulo="Sistema de oficina")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img12.png', style="width: 500px", alt='').m-auto
          .col-lg-5
            p #[b Sistema de oficina]
            p.mb-0 Son aplicaciones informáticas que permiten la comunicación y gestión de la información, facilitando el trabajo de quienes la crean, almacenan, procesan y distribuyen.
    .row
      .col-12
        .p-4.bg-c14(data-aos="fade-right")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/img16.svg", style="width: 100px", alt="").m-auto
            .col
              p.mb-0 Los sistemas de oficina típicos gestionan y administran documentos a través de herramientas como procesamiento de texto, digitalización de documentos, programación electrónica y comunicación a través de correo electrónico y videoconferencias. Estos sistemas permiten incrementar la productividad y apoyar las actividades de coordinación y comunicación.
          

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
