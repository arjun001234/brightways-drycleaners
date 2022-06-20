import React from 'react'
import { itemOperation, Item as itemType } from '~/types/types'
import { CartContext, CartContextType } from '../context/cartContext'

type itemProps = {
    item: itemType
    operation: itemOperation
    classes?: string
}

const Item : React.FC<itemProps> = ({item,operation = itemOperation.ADD,classes = ''}) => {

  const {add,remove} = React.useContext(CartContext) as CartContextType;

  return (
    <div className={`flex flex-row items-center gap-3 ` + classes}>
        <p className='flex-1 font-text text-[16px] dark:text-white text-black'>{item.name}</p>
        <p className='font-text text-[16px] dark:text-white text-black'>{item.minPrice} - {item.maxPrice}</p>
        {/* {operation === itemOperation.ADD && <BsPlusCircle color='#2C4EFF' onClick={add.bind(null,item)}  />}
        {operation === itemOperation.SUBTRACT && <BiMinusCircle color='#2C4EFF' onClick={remove.bind(null,item.id)}  />} */}
    </div>
  )
}

export default Item