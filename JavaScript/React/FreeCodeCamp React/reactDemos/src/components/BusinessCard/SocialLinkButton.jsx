import { useState, useEffect } from 'react';

export default function SocialLinkButton(props) {
    const [iconSrc, setIconSrc] = useState(null);

    useEffect(() => {
        const importIcon = async () => {
            try {
                const module = await import(`../../assets/${props.site}-icon.svg`);
                setIconSrc(module.default);
            } catch (error) {
                console.error(`Error loading image for ${props.site}:`, error);
            }
        };

        importIcon();
    }, [props.site]);

    if (!iconSrc) {
        // You can return a loading state or alternative content while the image is being loaded
        return null;
    }

    return (
        <a href={`https://www.${props.site}.com/`}>
            <img src={iconSrc}></img>
        </a>
    )
}