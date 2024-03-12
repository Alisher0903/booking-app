import React from 'react'

const BookingMenu = ({ leftText, rightText, button, className }) => {
    let style = {
        pStyle: 'font-bold text-[1.2rem] tracking-tight'
    }
    
    return (
        <div className='flex justify-between items-center my-4'>
            <div>
                <p className={`${style.pStyle}`}>{leftText}</p>
            </div>
            <div>
                <span className={`${style.pStyle} ${className}`}>{rightText}</span>
                <span>{button}</span>
            </div>
        </div>
    )
}

export default BookingMenu