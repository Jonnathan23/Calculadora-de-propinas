import MenuItems from "./components/MenuItem"
import OrderItems from "./components/OrderItems"
import useOrder from "./hooks/useOrder"
import { usePropinas } from "./hooks/usePropinas"


function App() {



  const { data } = usePropinas()

  const { order, addOrder, subPriceTotal, removeItem, tipAmount, setTip, total, saveOrder } = useOrder()

  console.log(data)
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {data.map(item =>
              <MenuItems
                key={item.id}
                item={item}
                addOrder={addOrder}

              />
            )}
          </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <h2 className="font-black text-4xl">Consumo</h2>
          <OrderItems
            order={order}
            subPriceTotal={subPriceTotal}
            removeItem={removeItem}
            tipAmount={tipAmount}
            setTip={setTip}
            total={total}
            saveOrder={saveOrder}

          />
        </div>

      </main>



    </>
  )
}

export default App
