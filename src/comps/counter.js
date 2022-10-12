import { useState } from "react"

export default function Counter(props){
    const [counter,setCounter] = useState(5);
    const [user,setUser]= useState('chipopo');

    const addCounter=()=>{
        setCounter(counter+1);
    }

    return(
        <div>
            <h2>
                Counter: {counter} - {user}
            </h2>
            <button className="btn btn-danger mx-2" onClick={()=>{setCounter(0)}}>Reset Counter</button>
            <button className="btn btn-info mx-2" onClick={addCounter}>Add+1</button>
            <button className="btn btn-success mx-2" onClick={()=>{setUser('Eliran')}}>change User</button>
        </div>
    )
}