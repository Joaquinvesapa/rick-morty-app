import React from 'react'
import { RadioGroup } from '@headlessui/react';

const Categories = (props) => {
    const { categories, selectedCategory, onCategorySelect} = props;
    return (
      <div className='relative top-5'>
      <RadioGroup className="flex top-5 flex-row justify-center" onChange={event => onCategorySelect(event)} value={selectedCategory}>
        {categories.map(category => (
          <RadioGroup.Option key={category} value={category} className={`drop-shadow-df text-white font-bold text-xl mx-3 rounded-lg border-lt-white px-4
           ${category === selectedCategory ? 'bg-lt-green' :  'bg-dk-grey'}`}>{category}
            
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      </div>);
}

export default Categories