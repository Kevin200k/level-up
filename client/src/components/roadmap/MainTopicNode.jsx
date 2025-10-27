import React from 'react';
import { Handle, Position } from 'reactflow';

const MainTopicNode = ({ data, isConnectable }) => {
  return (
    <div className='w-80 h-32 bg-purple-700 text-white shadow-lg flex items-center justify-center border-2 border-black '>
      <Handle
        type="target"
        position={Position.Top}
        id="t"
        isConnectable={isConnectable}
        style={{  borderRadius: '50%', width: 10, height: 10, background: '#fff', border: '2px solid #5B21B6' }}
      />

      <Handle 
        type="target"
        position={ Position.Left }
        style={{ borderRadius: '50%', width: 10, height: 10, background: '#fff', border: '2px solid #5B21B6' }}
        id="l" />

      <h1 className='text-center text-[25px] p-2'>{data.label}</h1>
      
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
        style={{ borderRadius: '50%', width: 10, height: 10, background: '#fff', border: '2px solid #5B21B6' }}
      />

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