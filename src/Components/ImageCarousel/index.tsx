import { useEffect, useRef, useState } from 'react';
import NextArrow from '../icons/NextArrow';
import PrevArrow from '../icons/PrevArrow';
import ImageItem from './ImageItem';

type carouselPropType = {
    imagesArray: string[];
    showPagination?: boolean;
    navButtons?: boolean;
    objectFit?: "cover" | "contain" | "fill";
}

const ImageCarousal = (props: carouselPropType) => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const { imagesArray, } = props;
    let carouselBox = document.querySelector('#carouselBox');

    const nextButton = () => {
        let boxWidth = carouselBox?.clientWidth;
        if(boxWidth) {
            carouselBox?.scrollBy(boxWidth,0);
        }
    }
    const prevButton = () => {
        let boxWidth = carouselBox?.clientWidth;
        if(boxWidth) {
            carouselBox?.scrollBy(-boxWidth,0);
        }
    }

    const isValidImageArray = (images: string[]) => {
        images.map((image, index) => {
            if (
                !image.endsWith('.jpg') &&
                !image.endsWith('.png') &&
                !image.endsWith('.jpeg')
            ) {
                return false;
            }
        });
        return true;
    };

    const validImages = isValidImageArray(imagesArray);
    return validImages ? (
        <div className='relative min-w-[300px] h-full max-h-[700px] '>
            {
                props.navButtons
                    ? <>
                        <div
                            onClick={prevButton}
                            className='w-10 h-10 top-[40%] left-0 absolute text-white/40 cursor-pointer rounded-full hover:text-white active:bg-gray-400/60 p-1'>
                            <PrevArrow />
                        </div>
                        <div 
                        onClick={nextButton}
                        className='w-10 h-10 absolute top-[40%] right-0 text-white/40 cursor-pointer rounded-full hover:text-white active:bg-gray-400/60 p-1'>
                            <NextArrow />
                        </div>
                    </>
                    : null
            }
            <div id='carouselBox' className="w-full h-full  snap-x  whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide overflow-y-hidden">
                {imagesArray.map((value, index) => {
                    return (

                        <ImageItem
                            objectFit={props.objectFit}
                            key={index}
                            setVisibleIndex={setVisibleIndex}
                            index={index}
                            image={value}
                        />
                    );
                })}
            </div>
            {
                props.showPagination
                    ? <div className="my-[10px] z-10 absolute bottom-2 right-0 w-full mx-auto flex  flex-row items-center justify-center gap-2">
                        {imagesArray.map((value, index) => (
                            <a id='anchor' key={index} href={`#${index}`}>
                                <div
                                    id={`${index}`}
                                    className={`h-[11px] w-[11px] cursor-pointer rounded-full ${index === visibleIndex ? 'bg-[#c8c8c8]/70' : 'bg-[#666666]/70'
                                        }`}
                                />
                            </a>
                        ))}
                    </div>
                    : null
            }

        </div>
    ) : (
        <></>
    );
};
export default ImageCarousal;
