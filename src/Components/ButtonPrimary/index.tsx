import React, { ReactElement } from 'react'

type propType = {
    iconPlacing?: "left" | "right";
    text: string;
    icon?: ReactElement;
    onClick?: () => void;
    disable? : boolean
}

const ButtonPrimary = (props: propType) => {
    const { iconPlacing, text, icon, onClick, disable } = props


    return (
        <button disabled={disable} 
         className={` h-fit ${!disable&&'hover:bg-gray-700'} ${disable?'bg-gray-400':'bg-gray-600'} text-white shadow-md cursor-pointer  rounded-sm text-[14px] ${iconPlacing === 'right' ? 'flex-row-reverse' : ''} flex w-fit min-w-[90px] justify-center items-center gap-2 px-3 py-[3px]`} onClick={onClick}>
            {
                icon &&
                <div>{icon}</div>
            }
            <span>{text}</span>
        </button>
    )
}

export default ButtonPrimary


