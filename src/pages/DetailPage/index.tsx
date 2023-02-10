import React from 'react'
import { CiPickerHalf } from 'react-icons/ci'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonPrimary from '../../Components/ButtonPrimary'
import { carData } from '../../Components/Content/db'
import { MdClose } from 'react-icons/md'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Footer from '../../Components/Footer'

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
        <div className='flex flex-col mt-2 justify-center w-full min-w-[300px] items-center p-5 md:p-24'>
            <div className='flex border md:flex-row flex-col w-full'>
                <div className='h-[300px] md:w-[60%] w-full overflow-hidden'><img className='object-contain w-full h-full' src={carDetail?.image} alt="" /></div>
                <div className=' flex flex-col justify-between p-10 md:gap-0 gap-5 md:mx-auto '>
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
        </div>
    )
}

export default CarDetail