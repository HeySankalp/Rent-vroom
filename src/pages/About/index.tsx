import React, { useState } from 'react'
import { images } from '../../Components/Content/db';
import ImageCarousal from '../../Components/ImageCarousel/ImageCarousel';
import QrScanner from "react-qr-scanner";
const About = () => {
    const previewStyle = {
        height: 520,
        width: 640,
        objectFit: "cover",
    };
    const [facing, setFacing] = useState("environment");


    const handleScan = (data: any) => {
        if (data) {
            console.log(data);
        }
    };

    const handleError = (error: any) => {
        console.error(error);
    };

    const changeFacing = () => {
        if (facing === "environment") {
            setFacing("user")
        } else {
            setFacing("environment");
        }
    }

    return (
        <div>
            <div className='w-full h-[300px]'>
                <ImageCarousal
                    navButtons={true}
                    imagesArray={images}
                    showPagination={true}
                    objectFit={"contain"}
                />
            </div>
            <QrScanner
                delay={1000}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
                options={{
                    facingMode : "environment"
                }}
            />
            <button onClick={changeFacing}>change</button>
            <button onClick={changeFacing}>change</button>
            <div className='p-10'>
                <h1 className='text-lg font-semibold'>About US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus nisi tempore ipsum unde quos vitae vero magnam soluta corrupti recusandae ducimus officia fuga dicta qui architecto eveniet ut, veritatis nostrum ea earum nihil perspiciatis pariatur quae? Tenetur nemo doloremque cum, quia explicabo veniam reiciendis excepturi enim perspiciatis magnam blanditiis et dignissimos deserunt similique non quasi! Iste quo fuga saepe eaque illo necessitatibus inventore voluptatem iure deserunt vel, porro ab adipisci ipsa excepturi amet voluptatum! Placeat consequatur veniam, laudantium maxime at illo magni nulla vel aliquam porro eaque cum cupiditate doloremque, molestias natus provident minima repudiandae id aspernatur nobis eum!</p>
            </div>
            <div className='p-10'>
                <h1 className='text-lg font-semibold'>Our Policy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus nisi tempore ipsum unde quos vitae vero magnam soluta corrupti recusandae ducimus officia fuga dicta qui architecto eveniet ut, veritatis nostrum ea earum nihil perspiciatis pariatur quae? Tenetur nemo doloremque cum, quia explicabo veniam reiciendis excepturi enim perspiciatis magnam blanditiis et dignissimos deserunt similique non quasi! Iste quo fuga saepe eaque illo necessitatibus inventore voluptatem iure deserunt vel, porro ab adipisci ipsa excepturi amet voluptatum! Placeat consequatur veniam, laudantium maxime at illo magni nulla vel aliquam porro eaque cum cupiditate doloremque, molestias natus provident minima repudiandae id aspernatur nobis eum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia autem minus sit nemo beatae perferendis nihil sapiente! Asperiores, consequatur deleniti! Natus officia consectetur distinctio eius! Fugit, reprehenderit numquam tempora obcaecati nesciunt recusandae quae eaque amet impedit, magni assumenda eveniet deleniti!</p>
            </div>
        </div>
    );
}

export default About