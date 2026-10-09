'use client'
import { useDeleteTodoMutation, useGetTodoQuery } from '@/api/todo'
import React from 'react'

const page = () => {

  const {data,refetch,...rest} = useGetTodoQuery("")
const [deleteTodo,{data:data2}] = useDeleteTodoMutation()
  console.log(rest);

  const handleDelete=async (id)=>{
    deleteTodo(id)
    await refetch()
  }
  return (
    <div>
      {
        data?.data?.map((e)=>{
return <div key={e.id}>
  <h1>{e.name}</h1>
  <button onClick={()=>handleDelete(e.id)}>delete</button>
</div>
        })
      }
    </div>
  )
}

export default page