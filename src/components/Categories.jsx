import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import {useController} from 'react-hook-form'

const categories = [
    "Female",
    "Male",
    "Alive",
    "Death",
    "?"
]


const Categories = (props) => {

    const [category, setCategory] = useState('None')
    const {
        field: { value, onChange },
      } = useController(props);

    const categories = [
        "None",
        "Female",
        "Male",
        "Alive",
        "Death",
        "?"
    ]
    const handleCategory = (category) =>{
        setCategory(category)
    }

    useEffect(() => {
        onChange(category)
    },[category])

  return (
    <div className='relative top-5'>
    <RadioGroup 
    value={category}
    onChange={handleCategory}
    className="flex top-5 flex-row justify-center">
        {
            categories.map(category =>(
                <RadioGroup.Option key={category} value={category}>{({active, checked}) => (
                    <span  className={`drop-shadow-df text-white font-bold text-xl mx-3 rounded-lg border-lt-white px-4 ${
                        checked ? 'bg-lt-green' :  'bg-dk-grey'
                }`}>{checked}{category}</span>

                )}</RadioGroup.Option>
            ))
        }
    </RadioGroup>
    </div>
  )
}

export default Categories