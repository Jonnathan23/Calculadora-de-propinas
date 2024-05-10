import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderItemsProps = {
    order: OrderItem[]
    priceTotal: number
    removeItem: (id: OrderItem['id']) => void
    
}

export default function OrderItems({ order, priceTotal, removeItem }: OrderItemsProps) {

    return (
        <>
            <div className="space-y-3 ">
                {order.map(item => (

                    <div 
                    className="flex items-center justify-between border-t border-gray-200 p-5 last-of-type:border-b"
                    key={item.id}
                    >
                        <div>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>

                        </div>
                        <button
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>


                ))}
            </div>
            <div>
                <p>Precio:{priceTotal}</p>
            </div>

        </>
    )


}