<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de información en el nivel gerencial
    p.mb-5 El sistema de información gerencial (SIG) es crucial para la organización, ya que integra y recopila información de todas las áreas, lo que permite a la gerencia ampliar su perspectiva cuando enfrenta desafíos o necesita implementar mejoras. Este sistema es fundamental para la recolección, análisis y emisión de información, siendo un eje central en la toma de decisiones estratégicas.

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
