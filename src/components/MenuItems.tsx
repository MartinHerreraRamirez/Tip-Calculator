import type { MenuItem } from '../types/index'
import { formatCurrency } from '../helpers'

type MenuItemsProps = {
    menuItem: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItems({menuItem, addItem} : MenuItemsProps) {
  return (
    <button 
      className="border-2 border-teal-400 w-full rounded-md px-2 py-2 hover:bg-teal-300 flex justify-between items-center"
      onClick={() => addItem(menuItem)}
    >
      <div className='flex space-x-2  items-center'>
        <img 
          className='w-8 h-8'
          src={`img/${menuItem.image}.png`} 
          alt={menuItem.name} 
        />
        <p>{menuItem.name}</p>
      </div>
      <p className='font-black'>{formatCurrency(menuItem.price)}</p>
    </button>
  )
}
