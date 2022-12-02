import { ref } from 'vue'

const useCounter = ( initValue = 5 ) => {
    const counter = ref( initValue )

    const increase = () => {
        counter.value++
    }

    // Lo que se regrese aqui va a tener los principios de reactividad de vue,
    // Cuando se este haciendo referencia al counter el html va a cambiar.
    return {
        // Objetos reactivos.
        counter,

        // MEtodos
        increase,
        // Se manda a llamar de esta forma en virtud que solamente se necesita mandar a llamar en la misma pagina y no se planea exportar a ningun lado.
        decrease: () => counter.value--,
    }
}

export default useCounter