<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input 
        type="number"
        placeholder="Número del pokémon"
        ref="txtSearchId"
        v-model="pokemonId"
        >
  </form>
  <br>
  <span>Precione enter para continuar...</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'


export default {

    setup(){

        const router = useRouter()
        const pokemonId = ref(1)
        const txtSearchId = ref()

        // En este caso se debe usarl el: onActivated, debido a que en el App.vue, se indico que se debe mantener 
        // el estado de la aplicación con(v-slot y keep-alive ), por lo cual no se esta ejecutando el onmounted, lo que nos impide usar el focused para darle
        // el foco al input.
        onActivated( () => {
            txtSearchId.value = focus()
        } )


        return {
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                console.log('Pokemon a buscar:', pokemonId.value)
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }
        }

    }
}
</script>

<style>

</style>