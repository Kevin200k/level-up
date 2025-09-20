import React from "react"
import { Position, Handle } from "reactflow"

const StageNode = ({ data }) => {
  return (
    <div className="px-2 text-center border-0 bg-white">

      <Handle type="target" id="t" position={Position.Top} />
      <Handle type="target" id="l" position={Position.Left} />
      <Handle type="target" id="r" position={Position.Right} />

      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">{data.label}</span>
      </div>

      
      <Handle type="source" id="cb" position={Position.Bottom} />
    </div>
  ) 
}

export default StageNode
