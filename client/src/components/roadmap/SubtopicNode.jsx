// src/components/SubtopicNode.jsx
import React from 'react';
import { Handle, Position } from 'reactflow';

const SubtopicNode = ({ data, isConnectable }) => {
  return (
    <div className='w-32 h-12 bg-blue-600 text-white rounded-md shadow flex items-center justify-center border border-blue-700'>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
        style={{ top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', width: 10, height: 10, background: '#fff', border: '2px solid #2563EB' }}

      />

      <Handle
        type='source'
        position={ Position.Right }
        id="r"
        isConnectable={ isConnectable }
        style={{ top: '50%', transform: 'translateY(-50%)', borderRadius: '50%', width: 10, height: 10, background: '#fff', border: '2px solid #2563EB' }}
      />
      <h2 className='text-center text-sm font-medium p-2'>{data.label}</h2>
    </div>
  );
};

export default SubtopicNode;