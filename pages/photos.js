import data from "optimized.json" assert { type: "json" };
import { useState, useEffect } from "react";

export default function Photos() {
    const [imageData, setImageData] = useState('');

    // useEffect(() => {
    //     const imageBase64 = data.images.oldShapVal; // assuming the image is returned as 'image' in the response
    //     const img = new Image();
    //     img.src = 'data:image/png;base64,' + imageBase64;
    //     console.log(imageBase64)
    //     console.log(data)
    //     setImageData(img.src)
    // }, []);

    const a =            
        Object.keys(data).flatMap((opt, outerIndex) => {
            return Object.keys(data[opt].images).map((imgTitle, innerIndex) => {
                console.log(imgTitle)
                const imgSrc = 'data:image/png;base64,' + data[opt].images[imgTitle];
                return (
                    <img src={imgSrc} alt="hi" key={`${outerIndex}-${innerIndex}`} />
                )
            })
        });

        console.log(a.slice(0, 1))
    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            { 
                a
            }
        </div>
    )
}