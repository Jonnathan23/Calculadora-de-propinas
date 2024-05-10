import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderItemsProps = {
    order: OrderItem[]
    subPriceTotal: number
    removeItem: (id: OrderItem['id']) => void
    
}

export default function OrderItems({ order, subPriceTotal, removeItem }: OrderItemsProps) {

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
            <section>
                <h5>Propina:</h5>
                <ul>
                    <li><input type="checkbox" name="" id="" />10%</li>
                    <li><input type="checkbox" name="" id="" />20%</li>
                    <li><input type="checkbox" name="" id="" />50%</li>
                </ul>
            </section>
            
            <section>
                <h5 className="text-2xl font-black">Totales y Propina:</h5>
                <p>Subtotal a pagar: {formatCurrency(subPriceTotal)}</p>
                <p>Propina: </p>
                <p>Total a Pagar</p>
            </section>

        </>
    )


}