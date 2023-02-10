import { useEffect, useState } from 'react';
import NextArrow from './icons/NextArrow';
import PrevArrow from './icons/PrevArrow';
import ImageItem from './ImageItem';
import  './pakage.css';

type carouselPropType = {
    imagesArray: string[];
    showPagination?: boolean;
    navButtons?: boolean;
    objectFit?: "cover" | "contain" | "fill";
}




const ImageCarousal = (props: carouselPropType) => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const { imagesArray, } = props;
    const [boxWidth, setBoxWidth] = useState(0)
    let carouselBox = document.querySelector('#carouselBox');

    useEffect(() => {
        if (carouselBox) {
            setBoxWidth(carouselBox.clientWidth);
        }
    }, [carouselBox?.clientWidth])

    const nextButton = () => {
        carouselBox?.scrollBy(boxWidth, 0);
    }
    const prevButton = () => {
        carouselBox?.scrollBy(-boxWidth, 0);
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
        <div className='image-carousel-main'>
            {
                props.navButtons
                    ? <>
                        <div
                            onClick={prevButton}
                            className='prev-icon'>
                            <PrevArrow />
                        </div>
                        <div
                            onClick={nextButton}
                            className='next-icon'>
                            <NextArrow />
                        </div>
                    </>
                    : null
            }
            <div id='carouselBox' className="carousel-box">
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
                    ? <div className="paginaion-container">
                        {imagesArray.map((value, index) => (
                            <a id='anchor' key={index} href={`#${index}`}>
                                <div
                                    id={`${index}`}
                                    className={`paginator-dots ${index === visibleIndex ? 'dot-active' : 'dot-inactive'
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
