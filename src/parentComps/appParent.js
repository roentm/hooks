import { useState } from 'react'
import Message from './message'

export default function AppParent() {
    const [show,setShow]=useState(true);

    const hideMessage= ()=>{
        setShow(false);
    }

  return (
    <div>
        <h2>Parent Comp:</h2>
        {show && <Message hide={hideMessage} txt="work from parent"/>}
    </div>
  )
}
