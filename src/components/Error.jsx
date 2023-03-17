import React from 'react'

//const Error = ({msgError}) => {
const Error = ({children}) => {
  return (
    <div className="bg-red-400 text-white text-center mb-3 p-3 uppercase font-bold rounded-md" > 
    <p>{children}</p>
   </div>
  )
}

export default Error
