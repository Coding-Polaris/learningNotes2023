import "/src/stylesheets/memegenerator.scss"
import TextInput from "../TextInput.jsx"
import defaultImg from "/src/assets/memegenerator/memeimg.png"
import memesData from "./memesdata"
import { useState } from 'react'

export default function MemeInterface() {
    const [meme, setMeme] = useState({
        image: defaultImg,
        topText: "SHUT UP",
        bottomText: "AND TAKE MY MONEY"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getRandomMeme = function() {
        const memeArr = allMemeImages["data"]["memes"]
        const len = memeArr.length
        const randomIndex = Math.floor(
            Math.random(length) * len
        )

        const newMeme = memeArr[randomIndex]
        const url = newMeme.url
        return(url)
    }    

    const randomizeMemeImage = function(e) {
        e.preventDefault()
        const newImgUrl = getRandomMeme()
        setMeme(oldMeme => ({...oldMeme, image: newImgUrl}))
    }

    return (
        <section id="meme-interface-wrapper">
            <form id="meme-form">
                <TextInput kind="top-text" placeHold="Shut up"></TextInput>
                <TextInput kind="bottom-text" placeHold="And take my money"></TextInput>
                <button id="generate-meme-button" onClick={randomizeMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </form>
            <div className="meme-captioning-area">
                <div className="meme-img-container">
                    <img src={meme.image} />
                </div>
                <div className="memetext meme-top-text">{meme.topText}</div>
                <div className="memetext meme-bottom-text">{meme.bottomText}</div>
            </div>
        </section>
    )
}