import React from 'react'
import { Handle, Position } from 'reactflow'

const TitleNode = ({ data }) => {
  return (
    <div className="bg-transparent border-0 font-bold">
      <Handle type='target' position={ Position.Top } />

      <h1 className='text-3xl'>{ data.label }</h1>

      <Handle type='source' id='b' position={ Position.Bottom } />
    </div>
  )
}

export default TitleNode