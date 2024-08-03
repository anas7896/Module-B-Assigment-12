import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Products = () => {
    // const {id} = useParams("")
    // console.log(id)
    const [getvalue, Setetvalue] = useSearchParams()
    const data = getvalue.get("name")
  return (
    <div>
        <h1>Products Page</h1>
        {/* {id} */}
        {data}
    </div>
  )
}

export default Products