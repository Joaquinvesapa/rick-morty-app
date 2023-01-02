import React, { useEffect, useState } from 'react'
import Categories from './Categories';
import { set, useForm, useController } from "react-hook-form";
import { RadioGroup } from '@headlessui/react';
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

  //#region 
  const [category, setCategory] = useState('')

    const categories = {
      gender: ["Female",
      "Male"],
      status: ["Alive",
      "Dead",
      "Unknown"]
    }
    const handleCategory = (category) =>{
        setCategory(category)
    }

    const [search, setSearch] = new useState('');
    const [characters, setCharacters] = new useState(results)

    const filterByName = (items) => {
      // console.log(items)
      return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    const filterByStatus = (items) => {
      // console.log(items)
      return items.filter(item => item.status.toLowerCase() === category.toLowerCase() || item.status.toLowerCase() === '')
    }
    const filterByGender = (items) =>{
      // console.log(items)
      return items.filter(item => item.gender.toLowerCase() === category.toLowerCase() || item.gender.toLowerCase() === '')
    }

    const filterCharacters = (condition) => {
      let filter
      condition === true ? filter === characters
      : filter = filterByName(characters)
      if(categories.gender.includes(category)){
        filter = filterByGender(filter)
      }else{
        filter = filterByStatus(filter)
      }

      return filter
    }
    useEffect(() => {
      filterCharacters(false)
    },[characters])


  return (
    <div>
      <div className="w-full relative flex flex-col justify-center">
          <input onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="text-bold py-2 pl-4 pr-3 focus:outline-none focus:ring-dk-grey focus:ring-2 focus:border-dk-grey shadow-inner-xl relative h-8 bg-lt-white w-full rounded-xl drop-shadow-[5px_12px_3px_rgba(0,0,0,0.5)]"/>
          <div className='relative top-5'>
          <RadioGroup 
          value={category}
          onChange={handleCategory}
          className="flex top-5 flex-row justify-center">
              {
                  categories.gender.map(category =>(
                      <RadioGroup.Option key={category} value={category}>{({active, checked}) => (
                          <span  className={`drop-shadow-df text-white font-bold text-xl mx-3 rounded-lg border-lt-white px-4 ${
                            checked ? 'bg-lt-green' :  'bg-dk-grey'
                      }`}>{checked}{category}</span>

                      )}</RadioGroup.Option>
                  ))
              }
              {
                  categories.status.map(category =>(
                      <RadioGroup.Option key={category} value={category}>{({active, checked}) => (
                          <span  className={`drop-shadow-df text-white font-bold text-xl mx-3 rounded-lg border-lt-white px-4 ${
                            checked ? 'bg-lt-green' :  'bg-dk-grey'
                      }`}>{checked}{category}</span>

                      )}</RadioGroup.Option>
                  ))
              }
          </RadioGroup>
          </div>
      </div>
      {
        filterCharacters(false).length === 0
      ? <div className='w-full h-10 pt-24 flex justify-center items-center'>
          <h1 className='relative text-bold font-bold text-lt-white text-3xl drop-shadow-[5px_12px_3px_rgba(0,0,0,0.5)] border-1'>Aca no hay nada pa'</h1>
        </div>
      : <div className="relative grid items-center w-full top-9 h-auto grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4">{
      filterCharacters(false).map((item) =>(
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