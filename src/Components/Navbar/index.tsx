import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='z-[9999] w-full h-[50px] pl-5 justify-center filter backdrop-blur-[8px] font-medium text-lg child:pt-2 child-hover:bg-white child-hover:text-gray-600 child:h-full child:px-5 child:py-auto contrast-more flex-row  items-center  flex bg-gray-900/50 sticky top-0 text-white'>
            <Link to={'/'}>
                <a><div>Home</div></a>
            </Link>
            <Link to={'/about'}>
                <a><div>About us</div></a>
            </Link>
            <Link to={'/contact'}>
                <a><div>Contact us</div></a>
            </Link>

        </div>
    )
}

export default Navbar