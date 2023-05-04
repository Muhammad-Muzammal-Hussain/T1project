import React, { useReducer } from 'react'
const reducer = (state,action) => {
  if(action.type==='Incr'){
    state=state+1
  }
  if(state>0 && action.type==='Decr'){
    state=state-1
  }
  return state;
}

export default function UseReducer() {
    const initialData=0   
     const [state,dispatch]=useReducer(reducer,initialData)
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=>dispatch({type:'Incr'})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={()=>dispatch({type:'Decr'})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>  
    </>
  )
}
