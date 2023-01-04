import React, { useState } from 'react'
import Filters from './Filters.jsx';
import InputSearch from './InputSearch.jsx';
const response = await fetch('https://rickandmortyapi.com/api/character')
const data = await response.json();//guarda datos en una variable
const results = data.results.splice(0,10);//limitando la carga a 2 datos solamente
// console.log(results[9].status)

const renderStatusSwitch = (status) => {
  switch(status){
    case 'Alive':
      return 'Status: 🟢 Alive';
    case 'Dead':
      return 'Status: 🔴 Dead';
    case 'unknown':
      return 'Status: ❔';
  }
}

const SearchTable = () => {
  
  const [filteredCharacters, setFilteredCharachters] = useState(results)
  
  //e[0] === searchQuery
  //e[1] === selectedGender
  //e[2] === selectedStatus
  const handleFilterCharacters = e => {
    console.log(e)
    if(e[0] === null && e[1] === 'None' && e[2] === 'None'){
      setFilteredCharachters(results)
    }else if(e[0] != null && e[1] === 'None' && e[2] === 'None'){
      setFilteredCharachters(results.filter(item => item.name.toLowerCase().includes(e[0].toLowerCase())))
    // }else if(e[1] != 'None'){
    //   setFilteredCharachters(results.filter(item => item.gender.toLowerCase() === (e[1].toLowerCase())))
    // }else if(e[2] != 'None'){
    //   setFilteredCharachters(results.filter(item => item.status.toLowerCase() === (e[2].toLowerCase())))
    }else{
      setFilteredCharachters(results.filter(item => item.status.toLowerCase() === (e[2].toLowerCase())))
    }
  }

  return (
    <div>
      <Filters filteredCharacters={filteredCharacters} setFilteredCharachters={setFilteredCharachters} characters={results} onFilterCharacter={handleFilterCharacters}/>
      {
        filteredCharacters.length === 0
      ? <div className='w-full h-10 pt-24 flex justify-center items-center'>
          <h1 className='relative text-bold font-bold text-lt-white text-3xl drop-shadow-[5px_12px_3px_rgba(0,0,0,0.5)] border-1'>Aca no hay nada pa'</h1>
        </div>
      : <div className="relative grid items-center w-full top-9 h-auto grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4">{
        filteredCharacters.map((item) =>(
        <div key={item.id} className="p-5 bg-dk-grey drop-shadow-[5px_10px_5px_rgba(0,0,0,0.8)] h-auto w-auto rounded-2xl flex justify-start flex-row max-w-xl space-x-7">
            <img className="object-cover w-36 rounded-2xl h-auto lg:w-44" src={item.image} alt=""/>     
            <div className="text-lt-white text-content">
            <h2 className="text-xl 2xl:text-2xl">{item.name}</h2>
            <p className="relative top-2">{renderStatusSwitch(item.status)}</p>
            <p className="relative top-2">Gender: {item.gender}</p>
            </div>  
        </div>
    ))}  
    </div>
      }
    </div>

  )
}

export default SearchTable