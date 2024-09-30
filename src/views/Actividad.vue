<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un sistema de información?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de datos desorganizados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de elementos integrados e interrelacionados para capturar, procesar y distribuir información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema solo para almacenar datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un conjunto de personas que crean información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los principales objetivos de un sistema de información?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los datos recopilados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar datos sin procesar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Proporcionar, distribuir y transmitir información en el lugar y momento requeridos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mantener los datos ocultos para la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elementos forman parte de los componentes de un sistema de información en la organización?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documentos, datos, usuarios, equipos y procesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ficheros, equipos, documentos, registros y procesos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Solo personas y equipos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Tecnología y empleados únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué hace el sistema de información de marketing (SIM)?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Captura datos sin procesarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Genera un flujo ordenado de información relativa a los negocios y al entorno organizacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacena información financiera de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo recopila datos sin analizarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función del Sistema de Información para Directivos (SID)?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo recopilar datos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporcionar información a los directivos sobre el desempeño global de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar información para los usuarios comunes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recopilar información sobre los productos de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de datos procesa el Sistema de Procesamiento de Transacciones (TPS)?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información de <i>marketing</i> únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Datos de las transacciones de negocios que se realizan diariamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Datos financieros exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Información sobre los recursos humanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un objetivo del Sistema de Información Financiera (SIF)?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proporcionar información sobre el desempeño global de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Brindar información relacionada con los estados financieros y asuntos económicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar datos sobre <i>marketing</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recopilar información de los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué nivel organizacional necesita información más detallada para tomar decisiones operativas?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Nivel operativo.', esCorrecta: true },
            { id: 'b', texto: 'Nivel estratégico.', esCorrecta: false },
            { id: 'c', texto: 'Nivel administrativo.', esCorrecta: false },
            { id: 'd', texto: 'Nivel gerencial.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función tiene el Sistema de Información de Recursos Humanos (SIRH)?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recopilar información sobre productos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recopilar y almacenar información sobre los recursos humanos para distribuirla a las personas que la requieran.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear información sobre las finanzas de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recopilar información sobre marketing.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué elemento NO pertenece a los componentes del sistema de información?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Procesos.', esCorrecta: false },
            { id: 'b', texto: 'Equipos.', esCorrecta: false },
            { id: 'c', texto: 'Clientes.', esCorrecta: true },
            { id: 'd', texto: 'Ficheros.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
