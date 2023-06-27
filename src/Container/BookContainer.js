import React,{useState} from 'react'
import { buyBook } from '../redux'
import { connect } from 'react-redux'


function BookContainer(props) {
    const [number,setNumber]=useState(1);
  return (
    <div>
      <h1>No of Books : {props.bookValue} </h1>
      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>props.buyBook(number)} >Increase {number}</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
        bookValue : state.book.bookValue
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyBook : number=>dispatch(buyBook(number))
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BookContainer)
