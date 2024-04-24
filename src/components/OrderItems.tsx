import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderItemsProps = {
  order: OrderItem[]
  removeItem: (id: OrderItem['id']) => void
}

export default function   OrderItems({order, removeItem} : OrderItemsProps) {
  return (
    <div className=" h-3/5">
      <h2 className="font-black text-3xl">Consumption</h2>

      <div className="space-y-3 mt-5 max-h-80 overflow-y-scroll">
        {order.length === 0 ?
         <p className="text-center font-semibold">The order is empty</p> 
         :
          (
            order.map( item => (
              <div 
                key={item.id}
                className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b"
              >
                <div>
                  <p className="md:text-lg sm:text-md">
                    {item.name} - {formatCurrency(item.price)}
                  </p>

                  <p className="font-black">
                    Quantity: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                  </p> 
                </div>

                <button
                  className="bg-red-600 sm:w-7 sm:h-7 rounded-full text-white mx-2"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button> 

              </div>
            ))
          )
        }
      </div>
     
    </div>
  )
}
