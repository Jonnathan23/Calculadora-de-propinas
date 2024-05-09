import type { OrderItem } from "../types"

type OrderItemsProps = {
    order: OrderItem[]
    priceTotal:number
    // item: OrderItem
}

export default function OrderItems({ order, priceTotal  }: OrderItemsProps) {

    return (
        <>
            <div>
                {order.map(item => (
                    <>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{item.quantity}</p>
                    </>
                ))}
            </div>
            <div>
                <p>Precio:{priceTotal}</p>
            </div>

        </>
    )


}