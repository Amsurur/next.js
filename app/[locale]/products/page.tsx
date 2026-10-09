import axios from 'axios'
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import React from 'react'

async function getData() {
    try {
        const {data} = await axios.get("https://6788f5c12c874e66b7d708f0.mockapi.io/users")
        return data
    } catch (error) {
        console.error(error);
        
    }
}

const Page = async () => {

     const data = await getData()
     console.log(data);
     
  return (
    <div>

        {
            data.map((e)=>{
                return <div key={e.id}>
                    <h1>{e.name}</h1>

        <form action={async()=>{
            "use server"
            try {
                await axios.delete("https://6788f5c12c874e66b7d708f0.mockapi.io/users/"+e.id)
                revalidatePath('/products')

            } catch (error) {
                console.error(error);
                
            }
        }}>
            <button type='submit'>delete</button>
        </form>
        <Link href={`products/${e.id}`}>
        Info
                </Link>
                </div>
            })
        }
    </div>
  )
}

export default Page