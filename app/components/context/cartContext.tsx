import React, { Children } from "react";
import { itemType } from "~/types/types";


export type CartItemType = {
    quantity: number,
    item: itemType
}

export type CartType = {
    estimatedCost: number,
    items: CartItemType[]
}

export type CartContextType = {
    cart: CartType
    add: (item: itemType) => void,
    remove: (id: number) => void
    getTotalItems: () => number
}

export const CartContext = React.createContext<CartContextType | null>(null)

const CartProvider : React.FC = ({children}) => {

    const [items,setItems] = React.useState<CartItemType[]>([])
    const [totalCost,setTotalCost] = React.useState<number>(0)

    const getTotalCost = () => {
        const cost = items.reduce((prev,curr) => {
            return prev + curr.quantity*curr.item.price
        },0)
        setTotalCost(cost)
    }

    const add = (item: itemType) : void => {
       const index = items.findIndex(prev => item.id === prev.item.id)
       setItems(prev => {
            if (index === -1) {
                const currentItem : CartItemType = {quantity: 1,item: item}
                return [...prev,currentItem]
            }else{
                prev[index].quantity++
                return [...prev]
            }
       })
    }

    const remove = (id: number) : void => {
       const index = items.findIndex(prev => id === prev.item.id)
       if (index !== -1){
        setItems(prev => {
            if (prev[index].quantity > 1) {
                prev[index].quantity--
                return [...prev]
            }else{
                return prev.filter(item => item.item.id !== id)
            }
       })
       }
    }

    React.useEffect(() => {
      getTotalCost()
    },[items])

    const getTotalItems = () : number => {
       return items.reduce((prev,curr) => {return prev + curr.quantity},0)
    }

    return <CartContext.Provider value={{cart: {estimatedCost: totalCost,items: items},add,remove,getTotalItems}}>{children}</CartContext.Provider>
}

export default CartProvider;

