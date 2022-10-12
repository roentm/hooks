import { useRef, useState } from "react";

export default function AppInput(props) {
    const color = useRef();
    const [bg, setBG] = useState("");

    const changeColor=()=>{
        setBG(color.current.value);
    }

    return (
        <div style={{ background: bg }} className="col-lg-6 border p-3 my-3">
            <h2>Enter your favorite color:</h2>
            <input ref={color} type="text" className="form-control" />
            <button className="btn btn-info mt-3" onClick={changeColor}>Change Color</button>
        </div>
    )
}