import { useState, useEffect } from 'react';

export default function ExpGridImage(props) {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const importImage = async () => {
            try {
                const module = await import(`../../assets/experiences/${props.filename}.png`);
                setImageSrc(module.default);
            } catch (error) {
                console.error(`Error loading image for ${props.filename}:`, error);
            }
        };

        importImage();
    }, [props.filename]);

    if (!imageSrc) {
        // You can return a loading state or alternative content while the image is being loaded
        return null;
    }

    return (
        <img src={imageSrc} className={`image-${props.dex}`}></img>
    )
}