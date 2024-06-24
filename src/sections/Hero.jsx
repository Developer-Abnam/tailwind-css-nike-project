import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col gap-10 max-container min-h-screen justify-center'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 z-10'>
        <p className='text-xl capitalize font-montserrat text-coral-red'>our summer collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82]'>
          <span className='xl:bg-white xl:whitespace-nowrap z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
          <p className='font-montserrat leading-8 text-slate-gray mt-6 mb-14 sm:max-w-sm'>Discover stylish nike arrivals, quality comfort and innovation for your active life</p>
      <Button label='Shop Now' iconURL={arrowRight} />
      <div className='flex justify-starts items-start w-full mt-20 gap-16 w-full flex-wrap'>
      {statistics.map((start)=>{
        return <div key={start.label}>
          <p className='text-4xl font-palanquin font-bold'>{start.value}</p>
          <p className='leading-7 font-montserrat text-slate-gray'>{start.label}</p>
        </div>        
      })}
      </div>
      </div>
      <div className='flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="Shoe Collection" width={610} height={500} className='object-contain z-10 relative' />
      <div className='flex absolute sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map(shoe=>{
         return <div key={shoe}>
            <ShoeCard imgURL={shoe} changeBigShoeImg={(shoe)=>{setbigShoeImg(shoe)}} bigShoeImg={bigShoeImg} />
          </div>
        })}
      </div>
      </div>
    </section>
  )
}

export default Hero