import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { tipOptions } from "../data/db"


type OrderItemsProps = {
    order: OrderItem[]
    subPriceTotal: number
    removeItem: (id: OrderItem['id']) => void
    tipAmount: number
    setTip: React.Dispatch<React.SetStateAction<number>>
    total: number
    saveOrder: () => void
    tip: number
    parent :string

}

export default function OrderItems({ order, subPriceTotal, removeItem, tipAmount, setTip, total, saveOrder, tip, parent }: OrderItemsProps) {

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
                <h3 className='font-black text-2xl'>Propina:</h3>
                <form action="">
                    {tipOptions.map(tipOrder =>
                        <div key={tipOrder.id} className='flex gap-2'>
                            <label htmlFor={tipOrder.id}>{tipOrder.label} </label>
                            <input
                                type="radio" name="tipOrder" id={tipOrder.id} value={tipOrder.value}
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOrder.value === tip}
                            />
                        </div>
                    )}
                </form>
            </div>

            <section>
                <h5 className="text-2xl font-black">Totales y Propina:</h5>
                <p>Subtotal a pagar: <span className="font-black">{formatCurrency(subPriceTotal)}</span></p>
                <p>Propina: <span className="font-black">{formatCurrency(tipAmount)}</span></p>
                <p>Total a Pagar: <span className="font-black">{formatCurrency(total)}</span> </p>
            </section>


            <div id={parent}>
                <button
                    className="bg-black w-full p-3 uppercase text-white mt-10 font-bold"
                    disabled={total === 0}
                    onClick={saveOrder}
                >
                    Guardar Orden
                </button>
            </div>




        </>
    )


}