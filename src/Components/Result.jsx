import React from 'react'
import './Result.css'
const Result = ({result}) => {
  return (
    <div className='result' onClick={(e)=> alert(`you clicked on ${result.name}`)}>
      {result.name}
    </div>
  )
}

export default Result
