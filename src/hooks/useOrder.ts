import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    const [ order, setOrder ] = useState<OrderItem[]>([])
    const [ tipValue, setTipValue] = useState<number>(0)

    const addItem = (item: MenuItem)  => {

        const itemExist = order.find( orderItem => orderItem.id === item.id)
        if(itemExist){
            const updateOrder = order.map( orderItem => orderItem.id === item.id
                ? {...orderItem, quantity: orderItem.quantity + 1}
                : orderItem
            )
            setOrder(updateOrder)
        } else {
            const castItem: OrderItem = {...item, quantity: 1}        
            setOrder([...order, castItem])
        }
    }

    const removeItem = (id: OrderItem['id']) => {
        setOrder(order.filter( itemOrder => itemOrder.id !== id))        
    }        

    const resetOrder = () => {
        setOrder([])
    }

    return {        
        order,
        tipValue,
        setTipValue,
        addItem,
        removeItem,
        resetOrder
    }
}
