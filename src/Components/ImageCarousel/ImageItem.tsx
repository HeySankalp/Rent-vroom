import { useEffect, useRef, useState } from "react";

type imagePropType = {
    image: string;
    index: number;
    setVisibleIndex: (arg: any) => void;
    objectFit?: "cover" | "contain" | "fill";
};

const ImageItem = (props: imagePropType) => {

    const [element, setElement] = useState<any>(null);
    const { objectFit } = props

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;
        if (currentElement) {
            currentObserver.observe(currentElement);
        }
    }, [element]);

    const doThisWhenInView = () => {
        props.setVisibleIndex(props.index);
    };

    const observer = useRef(new IntersectionObserver(doThisWhenInView, { threshold: 1.0 }));

    return (
        <div
            id={props.index.toString()}
            key={props.index}
            className='snap-start  w-full h-full inline-block overflow-hidden'>
            <img
                ref={setElement}
                className={`image image-${objectFit ?? "cover"} bg-black`}
                src={props.image}
                alt=""
            />
        </div>
    );
};

export default ImageItem