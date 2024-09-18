'use client'
import React from 'react'
import { useEffect, useState } from 'react'
const Data = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        async function fetchData(){
            let data = await fetch('https://jsonplaceholder.typicode.com/posts')
            data = await data.json()
            setProduct(data);
        }
        fetchData()
    }, [])
  return (
    <ul>
        {product?.map((p) => (
                <li key={p.id} className='border border-black p-4 m-3 hover:bg-black hover:text-white duration-75'>{p.title}</li>

        ))}
    </ul>
  )
}

export default Data
