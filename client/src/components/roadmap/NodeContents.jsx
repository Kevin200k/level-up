import React from 'react'
import { Handle, Position } from 'reactflow'

const NodeContents = ({ data }) => {
  return (
    <div className='w-40 h-10 border-2 rounded flex items-center justify-center bg-white'>

      {/* <Handle type='target' position={ Position.Top } /> */}

      <Handle type="target" position={Position.Left} />
      <h2 className="text-center text-sm font-medium">{data.label}</h2>

      <Handle type="source" position={ Position.Bottom } id="bottom" />
    </div>
  )
}

export default NodeContents
