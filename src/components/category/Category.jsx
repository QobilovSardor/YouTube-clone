import { category } from '../../constants';
import { useState } from 'react';

function Category({selectedCategoryHandler, selectedCategory}) {

  return (
      <div className="chips-wrapper">
        {category.map(item => (
          <button
              className='chips'
              key={item.name}
              style={{background: item.name === selectedCategory && 'white', color: item.name === selectedCategory && 'black'}}
              onClick={() => selectedCategoryHandler(item.name)}>{item.name}</button>
        ))}
    </div>
  );
}

export default Category;