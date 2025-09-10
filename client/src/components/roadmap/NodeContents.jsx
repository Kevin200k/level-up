import React from 'react'
import { Handle, Position } from 'reactflow'

const NodeContents = ({ data }) => {
  return (
    <div className='w-40 h-24 border-2 rounded flex items-center justify-center bg-white'>
      <Handle type="target" position={Position.Left} />
      <h2 className="text-center text-sm font-medium">{data.label}</h2>
    </div>
  )
}

export default NodeContents
