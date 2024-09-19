<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Información y datos
    p(data-aos="fade-right") Los sistemas de información en las organizaciones dependen en gran medida de la calidad de la información y los datos que se manejan. Es fundamental diferenciar entre información y datos, ya que ambos son componentes esenciales en estos sistemas. El procesamiento de datos y su transformación en información se convierten en insumos fundamentales para la gestión de la comunicación organizacional y su adecuado tratamiento por parte de los miembros de la empresa, proporcionando un apoyo vital a la funcionalidad gerencial.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Diferenciación entre información y datos:]
    .row.mb-5
      .col-lg-4.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img1.png", style="width: 410px", alt="").m-auto
      .col-lg-8.bg-c3(data-aos="fade-left")
        .p-4.p-lg-5
          .row.mb-4
            .col-auto.bg-c4
              .px-4.py-2
                p.mb-0 #[b Definición de datos]
          p.mb-0 Los datos son símbolos que describen hechos, condiciones, valores o situaciones. Estos pueden incluir letras, números, signos ortográficos u otros símbolos que representen cantidades, medidas, palabras o descripciones. Sin embargo, los datos aislados no constituyen información.
    p.mb-5(data-aos="fade-right") #[b.txt-c1 Transformación de datos en información:]
    .row.justify-content-center
      .col-10.col-md-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .crd_hover_txt1
          .crd_hover_txt1--img
            figure
              img(src="@/assets/curso/tema1/img2.png", alt="alt")
          .crd_hover_txt1--body
            h4.text-center.text-white.mb-3 Organización
            p.text-center.text-white.mb-0 Los datos deben organizarse en un conjunto.
      .col-10.col-md-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .crd_hover_txt2
          .crd_hover_txt2--img
            figure
              img(src="@/assets/curso/tema1/img3.png", alt="alt")
          .crd_hover_txt2--body
            h4.text-center.mb-3 Contexto
            p.text-center.mb-0 Deben estar asociados a un contexto específico.
      .col-10.col-md-6.col-xl-4(data-aos="fade-left")
        .crd_hover_txt1
          .crd_hover_txt1--img
            figure
              img(src="@/assets/curso/tema1/img4.png", alt="alt")
          .crd_hover_txt1--body
            h4.text-center.text-white.mb-3 Relevancia
            p.text-center.text-white.mb-0 Deben proporcionar información relevante relacionada con estados y asuntos financieros, tanto para uso interno como externo en la organización.
    .row.bg-c5
      .col-12
        .p-5
          p.mb-5(data-aos="fade-right") #[b.txt-c1 Transformación de datos en información:]
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema1/img5.png", style="width: 450px", alt="").m-auto
            .col-lg-8(data-aos="fade-left")
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/img1.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    p.mb-0 Es un conjunto de datos organizados y asociados dentro de un contexto que poseen un significado y representan un conocimiento o idea útiles para ejecutar una acción.
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarillo
                  .p-4
                    p.mb-0 La integración de estas características permite el análisis e interpretación de la información, generando el conocimiento necesario para la toma de decisiones y la ejecución de acciones pertinentes.
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    p.mb-0 Como recurso, la información es un insumo esencial que puede determinar el éxito o el fracaso de una organización.
          p.mb-0(data-aos="fade-right") Mientras que los datos son elementos básicos sin un contexto específico, la información surge cuando esos datos se organizan, contextualizan y se interpretan para ser útiles en la toma de decisiones y acciones dentro de la organización.
      
</template>

<script>
export default {
  name: 'Tema1',
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
