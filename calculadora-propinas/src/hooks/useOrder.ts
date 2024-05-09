import { useMemo, useState } from "react"
import { OrderItem } from "../types"
import { MenuItemType } from "../types"

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

    const priceTotal = useMemo(() => order.reduce((total, item) => total +  (item.price * item.quantity),0),[order] )


    
    return{
        order,
        addOrder,
        priceTotal

    }

}