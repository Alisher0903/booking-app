import React from 'react'
import Button from './button'
import img from '../../../../assets/landing-img/first-img.png'

const FirstSection = () => {
    return (
        <div className='flex justify-between items-center w-full h-full border-b-2 border-black'>
            <div className='w-[40%]'>
                <h1 className='text-[2.7rem] leading-[3rem] font-bold tracking-wide'>
                    Online Hospitality <br /> facility finder system <br /> a right place.
                </h1>
                <p className='mt-7 w-[70%] leading-5 opacity-80'>
                    In case you want to access the near by hospitality facilities services this is the  right place for you.
                </p>
                <h5 className='font-bold text-[1.5rem] mt-8 opacity-70 tracking-tight ms-5'>
                    want nearby facilities on the map? click below
                </h5>
                <div className='mt-10 text-center'>
                    <Button name={"View on map"} />
                </div>
            </div>
            <div className='w-[60%] flex justify-center items-center'>
                <div className='firstSection-img'>
                    <img className='w-full h-full' src={img} alt="first img" />
                </div>
            </div>
        </div>
    )
}

export default FirstSection