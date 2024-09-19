<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .p-5
          .row.mb-5
            .col-md-auto(data-aos="fade-right")
              figure
                img(src="@/assets/curso/intro/img1.svg", style="width: 100px", alt="").m-auto
            .col(data-aos="fade-left")
              p.mb-0 En las organizaciones, especialmente en su ámbito administrativo y gerencial, es crucial la calidad y confiabilidad de los datos e información que recolectamos, clasificamos, organizamos, evaluamos y transmitimos. #[b.txt-c1 Estos elementos no solo constituyen la base sobre la cual se desarrollan todas las actividades organizacionales, sino que también son esenciales para garantizar que las decisiones se tomen con base en un conocimiento preciso y oportuno]. De esta manera, se asegura la efectividad del flujo de información en los procesos y procedimientos internos, lo que a su vez repercute en la eficiencia operativa y en la capacidad de la organización para responder a desafíos y oportunidades.
          .row
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .row.mb-3
                .col-12
                  .p-4.bg-c2
                    p.mb-0 La información y los datos son insumos fundamentales para el análisis e interpretación, permitiendo a las diferentes áreas, en especial a la gerencia, tomar decisiones estratégicas que faciliten los ajustes necesarios, solucionen problemas o mejoren la funcionalidad para alcanzar el éxito organizacional.
              p.mb-0 #[b.txt-c1 Esta efectividad se logra mediante la implementación coherente de un sistema de información que integre y coordine las diferentes fuentes de datos, y que esté alineado con las necesidades y objetivos de la organización]. La relación entre el sistema de información organizacional y el nivel gerencial es clave para garantizar que la información fluya correctamente y se utilice de manera óptima en la toma de decisiones.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/intro/img2.svg", style="width: 450px", alt="").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
