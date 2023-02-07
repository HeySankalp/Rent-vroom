import React, { useState } from 'react'
import { images } from '../../Components/Content/db';
import ImageCarousal from '../../Components/ImageCarousel'

const About = () => {



    return (
        <div className='w-full h-[500px]'>
            <ImageCarousal 
            navButtons={true}
            imagesArray={images}
            showPagination={true} 
        />

            {/* <div className='w-[100%] h-[200px] snap-x  whitespace-nowrap overflow-x-scroll overflow-y-hidden'>
                <div className='snap-start w-screen h-full inline-block overflow-hidden'>
                    <img className='h-full w-full  object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" />
                </div>
                <div className='snap-start w-screen h-full inline-block overflow-hidden'>
                    <img className='h-full w-full  object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" />
                </div>
                <div className='snap-start w-screen h-full inline-block overflow-hidden'>
                    <img className='h-full w-full  object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" />
                </div>
            </div> */}

        </div>
    );
}

export default About