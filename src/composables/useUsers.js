// Un composable no es mas que una simple función.
// NOTA: UN COMPOSABLE NO DEBE CONVERTIRSE EN UNA FUNCIÓN ASINCRONA, por que la función asincrona esta esperando a que se regresen ciertos objetos

import { ref } from 'vue'
import axios from 'axios'

const useUsers = () => {
    const users         = ref([])
    const isLoading     = ref(true)
    const currentPage   = ref(1)
    const errorMessage  = ref()

    const getUsers = async( page = 1 ) => {

        // Se hace una validación para evitar que la pagina llegue a conteos negativos
        if( page <= 0 )
            page = 1

        isLoading.value = true
            const { data } = await axios.get('https://reqres.in/api/users', { params: { page } })

            console.log(data)

            if(data.data.length > 0) { // Si existen registros resultado de la consulta con axios.
                users.value = data.data
                currentPage.value = page
                errorMessage.value = null
            } else if (currentPage.value > 0) { // Si no hay usuarios se envía el mensaje de error.
                errorMessage.value = 'No hay más usuarioss'

            }
        isLoading.value = false

    }

    getUsers()

    // Si se necesita usar alguna de las cosas que van dentro de setup en el template/html, es necesario retornarlo acá:
    return {
        currentPage,
        errorMessage,
        isLoading,
        users,

        nextPage: () => getUsers(currentPage.value + 1),
        prevPage: () => getUsers(currentPage.value - 1),
    }

}

export default useUsers