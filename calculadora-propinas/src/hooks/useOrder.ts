import { MenuItemType } from "../types"
import { useState, useMemo } from "react"
import { OrderItem } from "../types"



export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const parent: string = "saveOrder"


    function addOrder(item: MenuItemType) {
        const itemExist = order.findIndex(searchOrder => searchOrder.id === item.id)

        if (itemExist == -1) {
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        } else {
            const updateItem = [...order]
            updateItem[itemExist].quantity++
            setOrder(updateItem)
        }

    }

    function removeItem(id: OrderItem['id']) {
        setOrder(revItem => revItem.filter(item => item.id != id))

    }

    function saveOrder() {
        const msg = document.createElement('p')
        const div = document.getElementById(parent)

        msg.textContent = 'Se ha guardado su orden'
        msg.classList.add('guardar')

        div?.appendChild(msg)

        setTimeout(() => {
            msg.remove()


        }, 2000)
        setOrder([])
        setTip(0)


        //save ? setSave(false) : setSave(true);
    }


    const subPriceTotal = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

    const tipAmount = useMemo(() => subPriceTotal * tip, [tip, order])
    const total = useMemo(() => subPriceTotal + tipAmount, [tip, order])



    return {
        order,
        addOrder,
        subPriceTotal,
        removeItem,
        tipAmount,
        setTip,
        total,
        saveOrder,
        tip,
        parent
    }

}