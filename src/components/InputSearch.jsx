import React from 'react'

const InputSearch = (props) => {
    const {searchQuery, onSearch} = props
  return (
    <input 
    value={searchQuery === null ? '' : searchQuery}
    onChange={(e) => onSearch(e.target.value === '' ? null : e.target.value)} 
    placeholder="Search" 
    className="text-bold py-2 pl-4 pr-3 focus:outline-none focus:ring-dk-grey focus:ring-2 focus:border-dk-grey shadow-inner-xl relative h-8 bg-lt-white w-full rounded-xl drop-shadow-[5px_12px_3px_rgba(0,0,0,0.5)]"/>
  )
}

export default InputSearch