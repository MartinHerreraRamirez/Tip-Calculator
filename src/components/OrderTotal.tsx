import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/index"

type OrderTotalProps = {
  order: OrderItem[],
  tipValue: number,
  resetOrder: () => void
}

export default function OrderTotal({order, tipValue, resetOrder} : OrderTotalProps) {

  const subTotalAmount = useMemo(() => order.reduce( (total, item) => (item.price * item.quantity) + total, 0),[order])
  const tipAmount = useMemo(() => subTotalAmount * tipValue, [order, tipValue])
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [order, tipValue])

  return (
    <>
      <div className="space-y-3 text-center border-b-4 py-1 rounded-lg mb-5">
        <h2 className="text-2xl font-black">Check</h2>

        <p className='text-md'>
           Subtotal: {''} <span className="font-bold">{formatCurrency(subTotalAmount)}</span> 
        </p>

        <p className='text-md'>
           Tip: {''} <span className="font-bold">{formatCurrency(tipAmount)}</span> 
        </p>

        <p className='text-md'>
           Total: {''} <span className="font-bold">{formatCurrency(totalAmount)}</span> 
        </p>

        <button 
            className='border-2 border-teal-400 font-extrabold text-lg uppercase rounded-lg px-10 hover:bg-teal-400 hover:text-white'
            onClick={() => resetOrder()}
        >
         Save 
        </button>

      </div>
    </>
  )
}
