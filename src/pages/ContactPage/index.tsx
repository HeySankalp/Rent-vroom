import React, { ChangeEvent, useState } from 'react'
import { BsCheck2, BsCheck2Square } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../../Components/ButtonPrimary';
import ButtonSecondary from '../../Components/ButtonSecondary';
import Popup from '../../Components/Popup/Popup';

const ContactPage = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        ask: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, identifier: string) => {
        setUserData((curData) => (
            {
                ...curData,
                [identifier]: e.target.value
            }
        ))
    }

    const handleBookCar = () => {
        setOpen(true);

    }

    const ContinueHandler = () => {
        setOpen((pop) => !pop)
    setUserData({
      name: '',
      phone: '',
      email: '',
      ask: ''
    })
    navigate('/')
    }

    return (
        <div className='w-full h-full p-10 md:px-48 bg-gradient-to-r from-blue-100 to-gray-100 shadow-2 border-blackxl/ '>
            <Popup open={open}>
                <div className='flex rounded-md flex-col p-5  justify-center items-center w-[90%] md:w-[50%] bg-gradient-to-r from-blue-100 to-gray-200'>
                    <p className='font-medium text-gray-600'>Your Question has been submitted</p>
                    <BsCheck2Square className='font-medium text-5xl mt-4 text-green-500'/>
                    <div className='self-end font-bold mt-5 cursor-pointer hover:bg-slate-300 px-3 py-1 rounded-lg' onClick={ContinueHandler}>Continue</div>
                </div>
            </Popup>
            <h1 className='text-lg font-medium mb-20 '>Send us your query</h1>
            <div className='flex md:flex-row flex-col gap-20 justify-between mt-10' >
                <div className='flex flex-col w-full'>
                    <label htmlFor="name">Name</label>
                    <input className='border-b-2 p-2 border-black bg-transparent'
                        id='name' type="text" placeholder='john doe'
                        value={userData.name}
                        onChange={(e) => { handleInputChange(e, 'name') }} />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="number">Contact Number</label>
                    <input className='border-b-2 p-2 border-black bg-transparent'
                        id='number' type="number"
                        placeholder='Phone'
                        value={userData.phone}
                        onChange={(e) => { handleInputChange(e, 'phone') }} />
                </div>
            </div>
            <div className='flex gap-20 md:flex-row flex-col justify-between mt-10'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="date1">Email </label>
                    <input className='border-b-2 p-2 border-black bg-transparent'
                        placeholder='eg: envkt@example.com'

                        id='date1' type="text"
                        value={userData.email}
                        onChange={(e) => { handleInputChange(e, 'email') }} />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="date2">Ask us</label>
                    <input className='border-b-2 p-2 border-black bg-transparent'
                        id='date2' type="text"
                        placeholder='Your Question'
                        value={userData.ask}
                        onChange={(e) => { handleInputChange(e, 'ask') }} />
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <div>
                    <ButtonSecondary text={'Back'} onClick={() => { navigate(-1) }} />
                </div>
                <div>
                    <ButtonPrimary text={'Send'} onClick={handleBookCar} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage