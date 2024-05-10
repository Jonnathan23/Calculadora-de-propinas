<<<<<<< HEAD
import { useMemo, useState } from "react"
import { OrderItem } from "../types"
import { MenuItemType } from "../types"
=======
import { useState } from "react"
import { OrderItem } from "../types"
>>>>>>> c6721cde3bd23bfc5409434b3246d34f4b9734a5

export default function useOrder(){
    
    const [order, setOrder] = useState<OrderItem[]>([])
<<<<<<< HEAD

    function addOrder(item :MenuItemType){
        const itemExist = order.findIndex(searchOrder => searchOrder.id === item.id)

        if(itemExist == -1){
            const newItem: OrderItem = {...item, quantity : 1}
            setOrder([...order,newItem])
        }else{
            const updateItem = [...order]
            updateItem[itemExist].quantity++
            setOrder(updateItem)
        }
        
    }

    const priceTotal = useMemo(() => order.reduce((total, item) => total +  (item.price * item.quantity),0),[order] )


    
    return{
        order,
        addOrder,
        priceTotal
=======
    
    return{
>>>>>>> c6721cde3bd23bfc5409434b3246d34f4b9734a5

    }

}