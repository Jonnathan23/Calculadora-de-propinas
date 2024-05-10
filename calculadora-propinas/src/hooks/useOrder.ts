import { MenuItemType } from "../types"
import { useState, useMemo } from "react"
import { OrderItem } from "../types"


export default function useOrder(){
    
    const [order, setOrder] = useState<OrderItem[]>([])


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

    function removeItem(id:OrderItem['id']){
        setOrder(revItem => revItem.filter(item => item.id != id) )

    }

    const priceTotal = useMemo(() => order.reduce((total, item) => total +  (item.price * item.quantity),0),[order] )


    
    return{
        order,
        addOrder,
        priceTotal,
        removeItem

    
    }

}