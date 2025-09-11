import React from 'react'
import { Handle, Position } from 'reactflow'

const CustomNode = ({ data, index }) => {
  return (
    <div className='border-2 border-black w-56 h-16 bg-[#68E01D] rounded flex items-center justify-center p-3'>
      
      <Handle type='target' position={Position.Top} id='top' />

      <h1 className='font-semibold text-lg text-center'>{data.label}</h1>
      
      <Handle type='source' position={Position.Right} id='r1' /> 
      
      <Handle type='source' position={Position.Bottom} id='bottom' />
    </div>
  )
}

export default CustomNode