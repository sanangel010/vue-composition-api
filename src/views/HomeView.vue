<template>
  <div class="home">
    <h1>Reactive VS Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3> {{ hulk }} </h3>

    <button @click="changeIronman">Cambiar IronMan</button>
    <button @click="changeHulk">Cambiar Hulk</button>
    
    <h3>{{ ironmanIsAlive }}</h3>
    <h3> {{ hulkIsAlive }} </h3>
    <button @click="changeStatus">Cambiar Estatus</button>

  </div>
</template>

<script>

import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',

  // Método en el cúal arranca el Composition API
  setup(){

    // La principal diferencia entre ref y reactive es que reactive solo acepta objetos.
    // para objetos primitivos y booleanos es mejor ref
    const ironman = ref({ name: 'Tony', age: 50})
    const hulk = reactive({ name: 'Bruce', age: 48})

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      // Esto no funciona debido a que es una variable reactiva que esta envuelta.
      // ironmanIsAlive = reactive(!ironmanIsAlive)
    }


    return {
      ironman, 
      hulk,

      ironmanIsAlive,
      hulkIsAlive,

      changeStatus,

      changeIronman: () => {
        ironman.value.name = 'Tony stank'
        ironman.value.age = 55
      },
      changeHulk: () => { 
        hulk.name = 'Bruce Nanner'
        hulk.age = 40
      }
      

    }

  }

}
</script>
