import { useState } from 'react'

import bird from './images/bird.svg'
import cat from './images/cat.svg'
import cow from './images/cow.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import heart from './images/heart.svg'
import horse from './images/horse.svg'
import './AnimalShow.css'




type AnimalImages  = {
    [key:string]: string
}

const images : AnimalImages = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}



interface AnimalShow {
    type: string
    
}


export default function Animals(props: AnimalShow){


const [clicks, setClicks] = useState(0)

function handleClick(){
    setClicks(clicks + 1)
}

    return(

        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt='animal svg' src={images[props.type]} />
            <img 
            className='heart'
            alt='heart' 
            src={heart} 
            style={{width : 10 + 10 * clicks + 'px'}}
            />

        </div>
    )
    
}