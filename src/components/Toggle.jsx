import { useState } from "react"
import "./toggle.css"
const Toglle = () => {
    const [toglle, setToglle] = useState(false)
    const updateToglle = () => {
        // קיצור
        setToglle(!toglle)
        // if(toglle){
        //     setToglle(false)
        // }
        // else{
        //     setToglle(true)
        // }
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-3">
                <button onClick={updateToglle} className="showBtn">show/hide</button>
            </div>
            {
                toglle && <div className="showDiv mt-4"></div>
            }

        </div>
    )
}

export default Toglle