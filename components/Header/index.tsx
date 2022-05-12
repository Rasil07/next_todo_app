import Link from 'next/link'
import React from 'react'

function Index() {
  return (
    <div>
     <h1>Todo App</h1>
     <Link href={"/todos/list"} >Todos</Link>
     <Link href={"/todos/create"} >Create</Link>

    </div>
  )
}

export default Index