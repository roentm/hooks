export default function AppInput(props){
    return(
        <div className="col-lg-6 border p-3 my-3">
            <h2>Enter your favorite color:</h2>
            <input type="text" className="form-control" />
            <button className="btn btn-info mt-3">Change Color</button>
        </div>
    )
}