import Project from "./Project"
import platinumGif from "../assets/gifs/platinum_gif.gif"
import rn from "../assets/images/React-Native.png"
import "../styles/Card.css"
import "../App.css"

import { platinum_description, sparrow_description } from "../data/descriptions"

export default function Projects() {
    return (
        <div className="parent-container">
            <h1> Personal Projects </h1>
            <div className="card-container" >
                <Project title="Pokémon Platinum (PyGame)" img={platinumGif} description={platinum_description} githubLink="https://github.com/HenryVag/pokemon-platinum-pygame" tools={["Python", "PyGame", "Tiled"]} />
                <Project title="Sparrow MP3-Player" img={rn} description={sparrow_description} githubLink="https://github.com/HenryVag/sparrow-mp3" tools={["React-Native", "Expo", "Expo Filesystem", "Expo Audio"]} />
            </div>
        </div>
        
    )
}