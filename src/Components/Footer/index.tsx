import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='w-full p-10 bg-gray-500 flex flex-col gap-12'>
            <h1 className='text-3xl font-bold text-white'>RENT Vroom</h1>
            <div className='text-white'>
                <h2>RENT Vroom Pvt. Ltd.</h2>
                <h2>Rd. Civil lines, amazing plaza</h2>
                <h2>Uttar pradesh, bijnor(246701)</h2>
            </div>
            <div className='flex text-white md:flex-row flex-col  justify-between items-center'>
                <div className='flex gap-5 font-semibold text-3xl'>
                    <div><BsTwitter className='cursor-pointer hover:text-blue-400' /></div>
                    <div><BsInstagram className='cursor-pointer hover:text-pink-600' /></div>
                    <div><BsLinkedin className='cursor-pointer hover:text-blue-600' /></div>
                </div>
                <div className='flex gap-5 text-sm md:mt-0 mt-5'>
                    <div>Privacy Policy</div>
                    <div>Terms Of services</div>
                </div>
            </div>
        </div>
    )
}

export default Footer