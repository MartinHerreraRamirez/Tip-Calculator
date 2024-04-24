import { menuItems } from "./data/db"
import MenuItems from "./components/MenuItems"
import OrderItems from "./components/OrderItems"
import OrderTotal from "./components/OrderTotal"
import TipForm from "./components/TipForm"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tipValue, setTipValue, addItem, removeItem, resetOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-500 py-5">
        <h1 className=" text-center text-4xl font-black">
          Tip Calculator
        </h1>
      </header>

      <main className="max-w-7xl mx-auto my-20 grid md:grid-cols-2 h-5/6">

        <div className="space-y-3 mx-5">
          <h2 className="font-black text-3xl">Menu</h2>
          {menuItems.map( menuItem => 
            <MenuItems 
              key={menuItem.id}
              menuItem={menuItem}      
              addItem={addItem}      
            />
          )}
        </div>

        <div className="mx-5">

          <OrderItems 
            order={order}
            removeItem={removeItem}
          />
          
          {order.length > 0 && (            
              <div>

                <TipForm 
                  setTipValue={setTipValue}
                  />

                <OrderTotal
                  order={order}    
                  tipValue={tipValue}   
                  resetOrder={resetOrder}   
                  />          
              </div>
            )
          }

        </div>        

      </main>
    </>
  )
}

export default App
