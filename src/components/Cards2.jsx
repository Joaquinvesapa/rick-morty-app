
import React from 'react'

const response = await fetch('https://rickandmortyapi.com/api/character')
const data = await response.json();//guarda datos en una variable
const characters = data.results.splice(0, 10);//limitando la carga a 2 datos solamente
console.log(characters[9].status)

const renderStatusSwitch = (status) => {
  switch(status){
    case 'Alive':
      return 'Status: 🟢 Alive';
    case 'Dead':
      return 'Status: 🔴 Death';
    case 'unknown':
      return 'Status: ❔';
  }
}
const Cards2 = () => {

    return (
        <div class="relative grid items-center w-full top-9 h-auto grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4">
            {characters.map((character) =>(
                <div class="p-5 bg-dk-grey drop-shadow-[5px_10px_5px_rgba(0,0,0,0.8)] h-auto w-auto rounded-2xl flex justify-start flex-row max-w-xl space-x-7">
                    <img class="object-cover w-36 rounded-2xl h-auto lg:w-44" src={character.image} alt=""/>     
                    <div class="text-lt-white text-content">
                    <h2 class="text-xl 2xl:text-2xl">{character.name}</h2>
                    <p class="relative top-2">{renderStatusSwitch(character.status)}</p>
                    </div>  
                </div>
                ))}
        </div>

    )
}
export default Cards2;


