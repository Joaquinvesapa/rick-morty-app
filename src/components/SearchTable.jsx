import React, { useState } from 'react'
const response = await fetch('https://rickandmortyapi.com/api/character')
const data = await response.json();//guarda datos en una variable
const characters = data.results.splice(0, 10);//limitando la carga a 2 datos solamente
// console.log(characters[9].status)

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


const SearchTable = () => {

    const [search, setSearch] = new useState('');
    console.log(search)

  return (
    <div>
      <div className="w-full relative flex justify-center">
          <input onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="text-bold py-2 pl-4 pr-3 focus:outline-none focus:ring-dk-grey focus:ring-2 focus:border-dk-grey shadow-inner-xl relative h-8 bg-lt-white w-full rounded-xl drop-shadow-[5px_12px_3px_rgba(0,0,0,0.5)]"/>
      </div>
      <div className="relative grid items-center w-full top-9 h-auto grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4">
      {characters.filter((item)=>{
        return search.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase());
      }).map((item) =>(
          <div key={item.id} className="p-5 bg-dk-grey drop-shadow-[5px_10px_5px_rgba(0,0,0,0.8)] h-auto w-auto rounded-2xl flex justify-start flex-row max-w-xl space-x-7">
              <img className="object-cover w-36 rounded-2xl h-auto lg:w-44" src={item.image} alt=""/>     
              <div className="text-lt-white text-content">
              <h2 className="text-xl 2xl:text-2xl">{item.name}</h2>
              <p className="relative top-2">{renderStatusSwitch(item.status)}</p>
              </div>  
          </div>
          ))}
      </div>
    </div>

  )
}

export default SearchTable