import { category } from '../../constants';
import { useState } from 'react';

function Category() {

  const [selectedCategory, setselectedCategory] = useState('All');

  return (
      <div className="chips-wrapper">
        {category.map(item => (
          <button className='chips' key={item.name}>{item.name}</button>
        ))}
    </div>
  );
}

export default Category;