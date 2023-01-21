import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonPrimary from '../../Components/ButtonPrimary'
import ButtonSecondary from '../../Components/ButtonSecondary'
import { carData } from '../../Components/Content/db'
import Popup from '../../Components/Popup/Popup'

const CarBooking = () => {

  const naviagte = useNavigate()
  const [open, setOpen] = useState(false);
  const { id } = useParams()
  const carList = carData.list
  const car = carList.filter((car) => car.id == parseInt(id ? id : ''))
  const carDetail = car[0];
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    issue: '',
    return: ''
  })

  const [isValidDate, setIsValidDate] = useState(false);

  useEffect(() => {
    console.log(userData);
    const returnDate = new Date(userData.return).getTime()
    const issueDate = new Date(userData.issue).getTime()
    if (returnDate > issueDate) {
      setIsValidDate(true);
    } else {
      setIsValidDate(false);
    }
  }, [userData.return, userData.issue])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, identifier: string) => {
    setUserData((curData) => (
      {
        ...curData,
        [identifier]: e.target.value
      }
    ))
  }

  const popUpHandler = () => {
    setOpen((pop) => !pop)
  }

  const ContinueHandler = () => {
    setOpen((pop) => !pop)
    setUserData({
      name: '',
      phone: '',
      issue: '',
      return: ''
    })
    naviagte('/')
  }

  const handleBookCar = () => {
    if (
      userData.name.length < 3
      && userData.phone.length < 3
    ) {
      alert("Please re-check the credentials");
    } else if (!isValidDate) {
      alert("Please enter the valid Date \n return date should be greater that issue date")
    } else {
      setOpen(true);
      
    }
  }

  return (
    <div className='h-[100vh]'>

      <Popup open={open}>
        <div className='flex rounded-md flex-col p-5 justify-center items-center w-[90%] md:w-[50%] bg-gradient-to-r from-blue-100 to-gray-200'>
          <h1 className='text-xl mb-5'>✅ Booking Confirmed!</h1>
          <div>You Booked : <strong>{carDetail.carName}</strong></div>
          <div>for the duration : <strong>{userData?.issue}-{userData?.return}</strong></div>
          <div className='self-end font-bold mt-5 cursor-pointer hover:bg-slate-300 px-3 py-1 rounded-lg' onClick={ContinueHandler}>Continue</div>
        </div>
      </Popup>

      <div className='w-full h-full p-10 md:px-48 bg-gradient-to-r from-blue-100 to-gray-100 shadow-2 border-blackxl/ '>
        <h1 className='text-lg font-medium mb-20'>Booking details</h1>
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
            <label htmlFor="date1">Issue Date</label>
            <input className='border-b-2 p-2 border-black bg-transparent'
              placeholder='MM/DD/YYYY'
              id='date1' type="text"
              value={userData.issue}
              onChange={(e) => { handleInputChange(e, 'issue') }} />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="date2">Return Date</label>
            <input className='border-b-2 p-2 border-black bg-transparent'
              id='date2' type="text"
              placeholder='MM/DD/YYYY'
              value={userData.return}
              onChange={(e) => { handleInputChange(e, 'return') }} />
          </div>
        </div>
        <div className='flex justify-between mt-10'>
          <div>
            <ButtonSecondary text={'Back'} onClick={() => { naviagte(-1) }} />
          </div>
          <div>
            <ButtonPrimary text={'Book car'} onClick={handleBookCar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarBooking