import React, { useState } from 'react'
import { addUser, subscribe } from './Models/User'

export default function FireStoreDb() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  // subscribe()
  return (
    <>
      <div style={{display:"flex" , flexDirection:"column"}}>
        <input placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={async()=>await addUser(name,age)}>Add</button>
      </div>
      
      <ul style={{display:"flex" , flexDirection:"column"}}>
        
      </ul>
    </>
  )
}
