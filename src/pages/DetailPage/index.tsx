import React from 'react'
import { CiPickerHalf } from 'react-icons/ci'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonPrimary from '../../Components/ButtonPrimary'
import { carData } from '../../Components/Content/db'
import { MdClose } from 'react-icons/md'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const CarDetail = () => {
    const carList = carData.list
    const navigate = useNavigate()
    const { id } = useParams()
    const car = carList.filter((car) => car.id == parseInt(id ? id : ''))
    const carDetail = car[0];

    const handleBook = ()=>{
        navigate(`/booking/${id}`)
    }

    return (
        <div className='flex flex-col justify-center w-full items-center p-5 md:p-24'>
            <div className='flex border md:flex-row flex-col'>
                <div className='h-[300px] md:w-[60%] w-full overflow-hidden'><img className='object-cover w-full h-full' src={carDetail?.image} alt="" /></div>
                <div className=' flex flex-col justify-between p-10 md:gap-0 gap-5 '>
                    <div className='text-2xl font-semibold'>{carDetail?.carName}</div>
                    <div className='flex gap-10 text-slate-500'>
                        <div className='flex justify-center items-center gap-1'>
                            <div>
                                <CiPickerHalf />
                            </div>
                            <p>{carDetail?.color}</p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <div>
                                <MdAirlineSeatReclineNormal />
                            </div>
                            <p>{carDetail?.capacity} Seater</p>
                        </div>
                    </div>
                    <div>Rent price {carDetail?.rentPrice}</div>
                    <div className='flex gap-2 items-center'>
                    <ButtonPrimary disable={!carDetail?.isAvailable} onClick={handleBook} text={'Book now'} />
                    {
                        carDetail?.bookedBy.length>0&&
                        <div className='text-red-500 text-sm'>Currently unavailable!</div>
                    }
                    </div>
                </div>
            </div>
            <div className='w-full mt-24'>
                <h1 className='text-gray-500 text-2xl'>Car Details</h1>
                <div className='bg-gray-500 w-full h-[3px] mt-1' />
                <div className='flex flex-col justify-between gap-4 py-5'>
                    {
                        carDetail.bookedBy.length > 0 &&
                        <div>
                            <ButtonPrimary text={'Not Available'} iconPlacing="right" icon={<MdClose />} disable={true} />
                        </div>
                    }
                    <div>Vehicle Number : {carDetail?.moreDetail?.vehicleNumber}</div>
                    <div>{carDetail?.moreDetail?.fuel}</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores veniam. Reprehenderit ipsam, magnam quisquam quis animi asperiores veniam nam doloribus accusamus impedit! At debitis rem voluptate deserunt in! Fugit dolore quas voluptate error, ea, voluptas magnam dignissimos, pariatur consequatur ipsa culpa debitis consequuntur repellendus porro. Voluptatum quam commodi ad.</div>
                </div>
            </div>
            {
                carDetail.bookedBy.length > 0 &&

                <div className='w-full mt-10'>
                    <h1 className='text-gray-500 text-2xl'>Current Booking</h1>
                    <div className='bg-gray-500 w-full h-[3px] mt-1' />
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-3'>
                            <div className='text-slate-500'>NAME</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-slate-500'>PHONE</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-slate-500'>ISSUED</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-slate-500'>RETURN</div>
                        </div>
                    </div>
                    {
                        carDetail.bookedBy.map((user) => <div className='flex justify-between mt-5'>
                            <span className=' text-center'>
                                {user.name}
                            </span>
                            <span className=' text-center'>
                                {user.phone}
                            </span>
                            <span className=' text-center'>
                                {user.issueDate}
                            </span>
                            <span className=' text-center'>
                                {user.returnDate}
                            </span>
                        </div>)
                    }
                </div>
            }
            <div className='w-full mt-20 flex flex-col gap-12'>
                <h1 className='text-3xl font-bold text-gray-700'>Rent Vroom</h1>
                <div>
                    <h2>Rentvroom Pvt. Ltd.</h2>
                    <h2>No. 296, 3rd cross Rd, Jakkasandar, Koramamgla</h2>
                    <h2>Bengluru, Karanataka 560034</h2>
                </div>
                <div className='text-gray-700 flex gap-10 text-lg '>
                    <div><BsTwitter className='cursor-pointer' /></div>
                    <div><BsInstagram className='cursor-pointer' /></div>
                    <div><BsLinkedin className='cursor-pointer' /></div>
                </div>
                <div className='flex text-gray-500 md:flex-row flex-col  justify-between items-center'>
                    <div className='flex gap-5 font-semibold'>
                        <a className='cursor-pointer hover:text-gray-700' href='/' >Home</a>
                        <a className='cursor-pointer hover:text-gray-700'>Contact</a>
                        <a className='cursor-pointer hover:text-gray-700'>About</a>
                    </div>
                    <div className='flex gap-5 text-sm md:mt-0 mt-5'>
                        <div>Privacy Policy</div>
                        <div>Terms Of services</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetail