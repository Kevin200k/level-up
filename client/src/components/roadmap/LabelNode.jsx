import React from 'react'
import { Handle, Position } from 'reactflow'

const LabelNode = ({ data }) => {
  return (
    <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center">
      { data.label }

      <Handle 
      type="source" 
      id='r' 
      position={ Position.Right } 
      style={{ opacity: 0 }} />

      <Handle 
      type="source" 
      id='l' 
      position={ Position.Left } 
      style={{ opacity: 0 }} />
    </div>
  )
}

export default LabelNode