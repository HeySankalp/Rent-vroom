import React from 'react'

const Popup = ({children, open}:any) => {
    return (
        <div className={`fixed  w-full h-full bg-black/50 left-0 ${open?'block':'hidden'} top-0 flex justify-center items-center`}>
        {children}
        </div>
    )
}

export default Popup