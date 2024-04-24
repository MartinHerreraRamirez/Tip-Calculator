import { Dispatch, SetStateAction } from "react"
import { tipOptions } from "../data/dbTips"

type TipFormProps = {
  setTipValue: Dispatch<SetStateAction<number>>
}

export default function TipForm({setTipValue} : TipFormProps) {
  return (
    <>
      <h3 className="font-black text-3xl mb-2">Resume</h3>

      <div className="text-center mt-5 border-t-4 border-b-4">
        <h3 className="font-black text-2xl mb-2">Tip</h3>

        <form className="flex flex-row gap-6 justify-center">
          {tipOptions.map( item => (
            <div key={item.id}>
              <label htmlFor={item.id}>{item.label}</label>
              <input 
                id={item.id}
                type="radio" 
                name="tip"
                value={item.value}
                onChange={ e => setTipValue(+e.target.value)}
                />
            </div>
          ))}
        </form>
        
      </div>
    </>
  )
}
