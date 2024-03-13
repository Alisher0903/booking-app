const Cards = ({ image, name, countName, btn1, btn2 }) => {
    return (
        <div
            className='bg-slate-50 overflow-hidden rounded-3xl shadow-md shadow-slate-400 
            hover:shadow-lg hover:shadow-gray-500 duration-200 w-full'>
            <div className='w-full h-80 p-3 overflow-hidden'>
                <img
                    className='w-full h-full object-cover rounded-md'
                    src={image}
                    alt="card img" />
            </div>
            <div className="flex justify-between items-start p-3 mt-2">
                <h3 className='font-bold tracking-wide text-[1.1rem]'>
                    {name}
                </h3>
                <h3 className='font-bold tracking-wide text-[1.1rem]'>
                    {countName}
                </h3>
            </div>
            <div className="flex justify-between items-start p-3 mt-2">
                <button>{btn1}</button>
                <button>{btn2}</button>
            </div>
        </div>
    )
}

export default Cards