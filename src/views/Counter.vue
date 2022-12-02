<template>
  <h1>Counter view :)</h1>
  <h2>Ejemplo con Composition API</h2>
  <h3>{{ counter }}</h3>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>

</template>

<script>
import useCounter from '@/composables/useCounter';

export default {
    name: 'Counter',
    props: {},
    emits: [],
    setup() {
        // Se desestructura para obtener los retornios del composable.
        // NOTA: En el orden que se ponen en el composable se tienen que desestructurar de este lado donde se este llamando.
        // NOTA2: La ventaja de los composables es que se pueden enviar parametros, en este caso se envia el valor inicial por defecto
        const { counter, increase, decrease } = useCounter( 55 )

        // Se retorma para el uso del html solo loq ue se va a ocupar.
        return {
            counter, increase, decrease
        }


        /* Código que se va al composable/useCounter.js */
        // const counter = ref(5)

        // const increase = () => {
        //     counter.value++
        // }

        // // const decrease = () => {
        // //     counter.value--
        // // }        

        // return {
        //     // Objetos reactivos.
        //     counter,

        //     // MEtodos
        //     increase,
        //     // Se manda a llamar de esta forma en virtud que solamente se necesita mandar a llamar en la misma pagina y no se planea exportar a ningun lado.
        //     decrease: () => counter.value--,
        // }
    }

}
</script>

<style>

</style>