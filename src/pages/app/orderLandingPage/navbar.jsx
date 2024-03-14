import { FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { FaList } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const toggleNavbar = () => setNavbar(!navbar);

    return (
        <section className='w-full fixed z-10 bg-white shadow-md'>
            <header className={`max-w-[1200px] mx-auto px-5 py-6 md:px-0 flex items-center justify-between`}>
                <h1 className='text-4xl cursor-pointer'><Link>HFfinder</Link></h1>
                <nav className='text-[#F46A06] hidden md:block px-2 lg:px-0'>
                    <ul className='flex gap-8 lg:gap-12 font-semibold'>
                        <li className='flex items-center text-xl gap-2 cursor-pointer'>
                            <FaHome color='black' />
                            Home
                        </li>
                        <li className='flex items-center text-xl gap-2 cursor-pointer'>
                            <FaBowlFood color='black' />
                            Create facility
                        </li>
                        <li className='flex items-center text-xl gap-2 cursor-pointer'>
                            <IoCall color='black' />
                            ContactUs
                        </li>
                        <li className='flex items-center text-xl gap-2 cursor-pointer'>
                            <FiLogIn color='black' />
                            Login
                        </li>
                    </ul>
                </nav>
                
                <FaList onClick={toggleNavbar} fontSize={30} className='block md:hidden cursor-pointer' />
            </header>

            {/* navbar sm */}
            <nav className={`text-[#F46A06] duration-200 ${navbar ? "h-[230px]" : "h-0"} overflow-hidden block md:hidden px-2 lg:px-0`}>
                <ul className='flex text-center flex-col gap-8 lg:gap-12 font-semibold'>
                    <li className='flex items-center text-xl gap-2 cursor-pointer'>
                        <FaHome color='black' />
                        Home
                    </li>
                    <li className='flex items-center text-xl gap-2 cursor-pointer'>
                        <FaBowlFood color='black' />
                        Create facility
                    </li>
                    <li className='flex items-center text-xl gap-2 cursor-pointer'>
                        <IoCall color='black' />
                        ContactUs
                    </li>
                    <li className='flex items-center text-xl gap-2 cursor-pointer'>
                        <FiLogIn color='black' />
                        Login
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar
