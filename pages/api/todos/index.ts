import http from '../../../utils/http'

import { API } from '../../../constants/api'

const {TODO} = API

export const fetchTodos = async()=>{
   const response = await http.get(TODO.LIST)
   return response.data
}


