import { CiPickerHalf } from "react-icons/ci";
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import ButtonPrimary from '../ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary';
import { carDataType } from '../../types/type';
import { useNavigate } from "react-router-dom";

type propType = {
    carItem: carDataType
}

const CarItem = (props: propType) => {
    const { carItem } = props
    const navigate = useNavigate()

    const detailClickHandler = ()=>{
        navigate(`/detail/${carItem.carName}/${carItem.id}`)
    }

    const handleBook = ()=>{
        navigate(`/booking/${carItem.id}`)
    }

    return (
        <div className='border bg-white md:flex-row flex-col flex items-center mt-5 mx-3 shadow-md last:mb-5'>
            <div className='md:w-[200px] md:h-[100px] w-full'>
                <img className='w-full h-full object-cover' src={carItem?.image} alt="" />
            </div>
            <div className='flex flex-col md:flex-row justify-between  w-full items-center gap-2 md:gap-0 md:p-5 py-5'>
                <div className='flex flex-col justify-center md:gap-2'>
                    <div className='text-lg font-semibold text-center' >{carItem?.carName}</div>
                    <div className='flex gap-10 text-slate-500'>
                        <div className='flex justify-center items-center gap-1'>
                            <div>
                                <CiPickerHalf />
                            </div>
                            <p>{carItem?.color}</p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <div>
                                <MdAirlineSeatReclineNormal />
                            </div>
                            <p>{carItem?.capacity} Seater</p>
                        </div>
                    </div>
                </div>
                <div>
                    {carItem?.rentPrice}
                </div>
                <div className='flex gap-2'>
                    <div className='border relative'>
                        <ButtonPrimary text={'Book Now'} onClick={handleBook} disable={!carItem?.isAvailable} />
                        {!carItem?.isAvailable && <span className='text-[10px] text-red-500 leading-[15px] absolute bottom-[-20px] right-[25%]'>Unavailable</span>}
                    </div>
                    <ButtonSecondary onClick={detailClickHandler} text={'Details'} />
                </div>
            </div>

        </div>
    )
}

export default CarItem