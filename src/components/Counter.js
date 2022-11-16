import { useEffect, useState } from "react";
import "./counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(10)
    const [msg, setMsg] = useState("this is counter")
    const addOne = () => {
        if (counter < 20) setCounter(counter + 1)
    }
    const depreciateOne = () => {
        if (counter > 1) setCounter(counter - 1)
    }

    // לבצע פעולה רק כשהקומפוננטה מופיעה על המסך בפעם הראשונה
    useEffect(() => {
        // מתבצע כשהקומפונטטה יוצאת מהדום
        return () => {
            console.log("work")
        }
    }, [])

    // כשיש סטייט בתוך המערך הפונקציה תרוץ בכול שינוי של הסטייט 
    useEffect(() => {
        console.log("counterChanged")
    }, [counter])

    return (
        <div className="text-center" >
            <div className="text-center" >
                <h1>{counter}</h1>
            </div>
            <div className="wrapperCounter">
                <button onClick={addOne} className="me-3 btn btn-info">+</button>
                <button onClick={depreciateOne} className="btn btn-danger">-</button>
            </div>
            <h3>{msg}</h3>
        </div>
    )
}
export default Counter;