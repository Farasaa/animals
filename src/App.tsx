import { useState } from "react"
import Animals from "./Animals"
import './App.css'

type Animal = string[]


function getRandomAnimal(): string {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse' ]
    

    return animals[Math.floor(Math.random() * animals.length)]
    
}

console.log(getRandomAnimal())

export default function App(){
    const [animals, setAnimals] = useState<Animal>([])
    


    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])    
    }

  const renderAnimals = animals.map((animal, index) =>{
    return <Animals type={animal} key={index} />

  })

    return(
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animals-list">{renderAnimals}</div>
            
            
        </div>
    )
}