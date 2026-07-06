import React from 'react'

export default function app() {
    const [count,setCount]=React.useState(0);
  return (
    <div>
        <button onClick={()=>{
            setCount(count+1)
            console.log(count);
            
        }}></button>
    </div>
  )
}
