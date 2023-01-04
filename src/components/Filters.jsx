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
    const handleCategorySelect = async category => {
      await setSelectedCategory(category);
      if (category === "None"){

        handleFilterCharacter(searchQuery,'None', 'None')
      }else if(category.toLowerCase() === "female" || category.toLowerCase() === "male") {
        handleFilterCharacter(searchQuery,category, 'None')
  
      }else if(category.toLowerCase() === "alive" || category.toLowerCase() === "dead" || category.toLowerCase() === "unknown") {
        
        handleFilterCharacter(searchQuery,'None', category)
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