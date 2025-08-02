import React, { useReducer, useState } from 'react'


const counter = (state,action) => {
   
    switch (action.type) {
        case "increment":
            
        return {
            ...state,
            count: state.count +1
        }
        
        case "discrement":

        return  {
            ...state,
           count: state.count > 0 ? state.count -1 : 0
        }
        
        case "AmoutByInput":
            return{
                ...state,
                count: state.count + Number(action.nextValue)
            }
        default:
            return state
    }
}
 const initialState = {
    count : 0
}


function UseReducer() {

    const [state,dispatch] = useReducer(counter,initialState)
    const [input ,setInput] = useState(0)


    const HnadleInput = (e) => {

        dispatch(
            {type:"AmoutByInput",
             nextValue: input 
            }
        )

    }
  return (
    <div className='flex justify-center items-center h-screen gap-8'>
      <div className='flex justify-center items-center gap-7'>
        <button 
        onClick={() => {dispatch({type:"discrement"})}}
        className='px-4 py-3 bg-red-500 hover:cursor-pointer rounded-md text-2xl font-bold'>-</button>
        <p>{state.count}</p>
        <button 
        onClick={() => {dispatch({type:"increment"})}}
        className='px-4 py-3 bg-blue-500 hover:cursor-pointer rounded-md text-2xl font-bold'>+</button>
      </div>
      <div className='flex gap-4 justify-center items-center'>
        <input 
        onChange={(e) => setInput(e.target.value)}
        className='h-10 w-30 border-2 border-black pl-3'
        type="number" name="" id=""
        placeholder='Enter Amount' />

        <button 
        onClick={HnadleInput}
        className='px-4 py-2 bg-amber-400 rounded-md font-bold text-2xl hover:cursor-pointer hover:bg-amber-500'>Click</button>
      </div>
    </div>
  )
}

export default UseReducer
