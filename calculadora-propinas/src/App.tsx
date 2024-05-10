import MenuItems from "./components/MenuItem"
<<<<<<< HEAD
import OrderItems from "./components/OrderItems"
import useOrder from "./hooks/useOrder"
=======
>>>>>>> c6721cde3bd23bfc5409434b3246d34f4b9734a5
//import { menuItems } from "./data/db"
import { usePropinas } from "./hooks/usePropinas"


function App() {

  const { data } = usePropinas()
<<<<<<< HEAD
  const { order, addOrder ,priceTotal} = useOrder()
=======
>>>>>>> c6721cde3bd23bfc5409434b3246d34f4b9734a5

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
<<<<<<< HEAD
                addOrder={addOrder}
=======
>>>>>>> c6721cde3bd23bfc5409434b3246d34f4b9734a5
              />
            )}
          </div>

        </div>

        <div>
          <h2>Consumo</h2>
          <OrderItems
            order={order}
            priceTotal={priceTotal}           
          />
        </div>
      </main>



    </>
  )
}

export default App
