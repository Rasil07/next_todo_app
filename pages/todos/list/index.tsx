import { NextPage } from 'next'
import React from 'react'
import { useQuery } from 'react-query'

import { fetchTodos } from '../../api/todos'


const Index:NextPage = ()=> {
 const {data,error,isLoading , isError }= useQuery('list_todos',fetchTodos)
 if(isLoading){return <div>
   <h3>Loading...</h3>
 </div>}


  return (
    <div> List </div>
  )
}

export default Index 