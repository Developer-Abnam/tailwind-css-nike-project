import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'
const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg font-montserrat text-slate-gray mt-2'>Experience top-notch quality and style with ur sought-after selections. Discover a world of comfort, design, and values</p>
      </div>
      <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {
          products.map((product)=>{
            return <PopularProductsCard key={product.name} {...product}
             />
          })
        }
      </div>
    </section>
  )
}

export default PopularProducts