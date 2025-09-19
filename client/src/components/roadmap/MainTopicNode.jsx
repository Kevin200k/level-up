// src/components/MainTopicNode.jsx
import React from 'react';
import { Handle, Position } from 'reactflow';

const MainTopicNode = ({ data, isConnectable }) => {
  return (
    <div className='w-44 h-16 bg-purple-700 text-white shadow-lg flex items-center justify-center border-2 border-black'>
      {/* Target handle for incoming connections (from previous main topic) */}
      <Handle
        type="target"
        position={Position.Top}
        id="t"
        isConnectable={isConnectable}
        // style={{ opacity: 0 }} // Hidden handle for cleaner look
      />

      <Handle 
        type="target"
        position={ Position.Left }
        id="l" />

      <h1 className='text-center font-bold text-lg p-2'>{data.label}</h1>
      
      {/* Source handle for outgoing connections (to next main topic) */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
        // style={{ opacity: 0 }} // Hidden handle for cleaner look
      />
      {/* Source handle for side content connections */}
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        isConnectable={isConnectable}
        style={{ top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', width: 10, height: 10, background: '#fff', border: '2px solid #5B21B6' }}
      />
    </div>
  );
};

export default MainTopicNode;