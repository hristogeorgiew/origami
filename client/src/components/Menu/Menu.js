import { useState } from 'react';
import MenuItem from './MenuItem';
import { MENU_ITEMS } from './MenuConstants';

import './Menu.css';

function Menu() {

  const[currentItem, setCurrentItem] = useState();
  console.log(currentItem);
  return (
    <aside className="menu"> 
        {MENU_ITEMS.map(x => 
          <MenuItem 
            key={x.id} 
            id={x.id}
            isSelected={x.id == currentItem } 
            onClick={setCurrentItem}
          >
            {x.text}
          </MenuItem>
        )}
    </aside>
  );
}

export default Menu;
