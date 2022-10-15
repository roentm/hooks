export default function Message(props) {
  return (
    <div className='w-50 p-3 h3 bg-warning'>
        Message: {props.txt}
        <button onClick={()=>{props.hide()}} className="btn btn-danger float-end">X</button>
    </div>
  )
}
