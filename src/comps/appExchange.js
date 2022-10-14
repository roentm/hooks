import { useRef, useState } from "react"

export default function AppExchange() {

    const coinRef=useRef();
    const amountRef=useRef();
    const [nis,setNIS]=useState(330);

    const calcTotal=()=>{
        const myTotal=coinRef.current.value+amountRef.current.value;
        setNIS(myTotal.toFixed(2));
    }

  return (
    <div className="col-lg-6 p-3 shadow mt-3 mx-auto">
        <h2>Enter the coin you want:</h2>
        <select onChange={calcTotal} ref={coinRef} className="form-select">
            <option value="3.3">USD</option>
            <option value="3.9">EURO</option>
            <option value="0.11">BATH</option>
        </select>
        <h2>Enter the amount you want:</h2>
        <input onInput={calcTotal} ref={amountRef} type="number" defaultValue="100" className="form-control" />
        <h3 className="mt-4">You will get {nis} NIS</h3>
    </div>
  )
}
