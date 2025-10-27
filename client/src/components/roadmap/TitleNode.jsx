import React from 'react'
import { Handle, Position } from 'reactflow'

const TitleNode = ({ data }) => {
  return (
    <div className="bg-transparent border-0 font-bold">
      <Handle 
      type='target' 
      position={ Position.Top }
      style={{ opacity: 0 }}
      />

      <h1 className='text-5xl'>{ data.label }</h1>

      <Handle 
      type='source' 
      id='b' 
      position={ Position.Bottom }  
      style={{ opacity: 0 }} />
    </div>
  )
}

export default TitleNode