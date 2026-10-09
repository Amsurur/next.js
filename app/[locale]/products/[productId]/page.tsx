import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import React from 'react'

async function getDataById(id:string) {
  try {
      const {data} = await axios.get("https://6788f5c12c874e66b7d708f0.mockapi.io/users"+"/"+id)
      return data
  } catch (error) {
      console.error(error);
      
  }
}


const page =async({
  params,
}: {
  params: Promise<{ productId: string }>
}) => {
  const {productId} = await params
const data =  await getDataById(productId)
console.log(data);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <form action={async()=>{
            "use server"
            try {
                await axios.delete("https://6788f5c12c874e66b7d708f0.mockapi.io/users/"+data.id)
                revalidatePath(`/products/${productId}`)
            } catch (error) {
                console.error(error);
                
            }
            redirect("/products");
        }}>
            <button type='submit'>delete</button>
        </form>
    </div>
  )
}

export default page