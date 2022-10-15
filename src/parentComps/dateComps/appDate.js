import { useState } from "react"
import InputDate from "./inputDate"
import ShowDate from "./showDate"

export default function AppDate() {
  
  const [deadline,setDeadline]=useState("2023-10-15")
  const changeDate =(_date)=>{
    setDeadline(_date)
  }
  return (
    <div className="col-lg-8 border shadow mx-auto my-5">
      <ShowDate deadline={deadline} />
      <InputDate changeDate={changeDate} />

    </div>
  )
}
