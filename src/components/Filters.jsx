import React, { useState } from 'react'
import InputSearch from './InputSearch.jsx';
import Categories from './Categories.jsx';

const Filters = (props) => {
    const {filteredCharacters, setFilteredCharachters, characters, onFilterCharacter} = props
    const [selectedCategory, setSelectedCategory] = useState('None');
    const [selectedGender, setGender] = useState("None")
    const [selectedStatus, setStatus] = useState("None")
    const [searchQuery, setSearchQuery] = useState(null)
    const [filter, setFilter] = useState([searchQuery, selectedGender, selectedStatus])
 
    const handleFilterCharacter = (search, gender, status) => {
        filter.splice(0,3,search,gender,status)
        setFilter(filter)
        onFilterCharacter(filter)
    }
    
    const categories = ["None","Female","Male","Alive","Dead","Unknown"]
    //#region
    const handleCategorySelect = category => {
      if (category === "None"){
        
        // setFilteredCharachters(characters);
        setSelectedCategory('None');
        handleFilterCharacter(searchQuery,'None', 'None')
        // filter.splice(1,1,category)
        // setFilter(filter)
      }else if(category.toLowerCase() === "female" || category.toLowerCase() === "male") {
  
        // setFilteredCharachters(characters.filter(item => item.gender.toLowerCase() === category.toLowerCase()));
        setSelectedCategory(category);
        setStatus('None')
        setGender(category)
        handleFilterCharacter(searchQuery,category, 'None')
        // filter.splice(1,1,category)
        // setFilter(filter)
  
      }else if(category.toLowerCase() === "alive" || category.toLowerCase() === "dead" || category.toLowerCase() === "unknown") {
  
        // setFilteredCharachters(characters.filter(item => item.status.toLowerCase() === category.toLowerCase()));
        setSelectedCategory(category);
        setGender('None')
        setStatus(category)
        handleFilterCharacter(searchQuery,'None', category)
        // filter.splice(1,1,category)
        // setFilter(filter)
      }
    };
  
    const handleSearch = search => {
      if(search === null){
        // setFilteredCharachters(characters.filter(item => item.name.toLowerCase() != search))
        setSearchQuery(null)
        handleFilterCharacter(search,selectedGender, selectedStatus)
        // filter.splice(0,1,search)
        // setFilter(filter)
      }else{
        // setFilteredCharachters(characters.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
        setSearchQuery(search)
        handleFilterCharacter(search,selectedGender, selectedStatus)
        // filter.splice(0,1,search)
        // setFilter(filter)
      }
    }
    return (
    <>
    <InputSearch searchQuery={searchQuery} onSearch={handleSearch}/>
    <Categories categories={categories} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
    </>
  )
}

export default Filters