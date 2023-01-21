import React, { useEffect } from 'react'
import CarItem from '../../Components/CarItem'
import { useDispatch, useSelector } from 'react-redux'
import { carData } from '../../Components/Content/db'
import { setCars } from '../../Store/redux/cars'
import { carDataType } from '../../types/type'


const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setCars(carData.list))
    }, [])

    

    const carList :carDataType[] = useSelector((state: any) => state.carReducer.carList)

    return (
        <div className='w-full  bg-slate-50 '>
            <div className='md:m-20'>
                <h1 className='text-3xl m-5 underline leading-[20px] '>🚗 Cars For Rent</h1>
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