import React from 'react'
import { Handle, Position } from 'reactflow'

const CustomNode = ({ data }) => {
  return (
    <div className='border-2 border-black w-56 h-16 bg-[#68E01D] rounded flex items-center justify-center p-3'>
      {/* top handle for chaining from previous topic */}
      <Handle type='target' position={Position.Top} id='top' />

      <h1 className='font-semibold text-lg text-center'>{data.label}</h1>
      
      {/* right handle for content */}
      <Handle type='source' position={Position.Right} id='r1' /> 
      
      {/* bottom handle for chaining to next topic */}
      <Handle type='source' position={Position.Bottom} id='bottom' />
    </div>
  )
}

export default CustomNode
