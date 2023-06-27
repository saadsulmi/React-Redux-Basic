import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector((state)=>{
        return state.cake.numOfCakes
    })
    const dispatch=useDispatch()
  return (
    <div>
      <h1>no of cakes : {numOfCakes}</h1>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
