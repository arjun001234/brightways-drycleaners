import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { ExtendedCategory } from '~/routes/pricing/$service'
import { Category, itemOperation } from '~/types/types'
import Item from './item'

type categoryProps = {
    category: ExtendedCategory
}

const Category : React.FC<categoryProps> = ({category}) => {

  const[open,setOpen] = React.useState(false);

  return (
    <div className='flex flex-col gap-3'>
        <section className='flex justify-between p-5 bg-slate-100 dark:bg-gray-800' onClick={() => setOpen(prev => !prev)}>
          <p className='font-text text-[18px] text-gray-400 text-left font-semibold'>{category.name}</p>
          {!open ? <IoMdArrowDropdown className='h-[30px] w-[30px] fill-gray-400' /> : <IoMdArrowDropup className='h-[30px] w-[30px] fill-gray-400' />}
        </section>
        {open &&
        <section className='flex flex-col gap-2'>
            {category.items.map((item) => {
               return <Item key={item._id} item={item} operation={itemOperation.ADD} />
            })}
        </section>}
    </div>
  )
}

export default Category