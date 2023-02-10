import React, { useEffect } from 'react'
import CarItem from '../../Components/CarItem'
import { useDispatch, useSelector } from 'react-redux'
import { carData } from '../../Components/Content/db'
import { setCars } from '../../Store/redux/cars'
import { carDataType } from '../../types/type'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Footer from '../../Components/Footer'


const Home = () => {
    const dispatch = useDispatch()
    //let assume getting car list from databse
    useEffect(() => {
        dispatch(setCars(carData.list))
    }, [])

    

    const carList :carDataType[] = useSelector((state: any) => state.carReducer.carList)

    return (
        <div className='w-full p-5 md:p-20  bg-slate-50 '>
            <div>
                {
                    carList?.map((car: carDataType, index:number) => {
                        return <CarItem key={index} carItem={car} />
                    })

                }
            </div>
        </div>
    )
}

export default Home