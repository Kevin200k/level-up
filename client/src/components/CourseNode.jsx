// Custom Node

// CourseNode.jsx
// import React from "react";
// import { Handle, Position } from "reactflow"; // 👈 Import Handle and Position

// const CourseNode = ({ data }) => {
//   return (
//     <div className="bg-white border-2 border-blue-500 rounded-xl shadow-md p-4 w-48 text-center">
//       {/* 👈 Add a target handle at the top */}
//       <Handle type="target" position={Position.Top} />

//       <h3 className="text-lg font-bold text-blue-600">{data.title}</h3>
//       <p className="text-sm text-gray-500">{data.duration}</p>
//       <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
//         Select
//       </button>

//       {/* 👈 Add a source handle at the bottom */}
//       <Handle type="source" position={Position.Bottom} />
//     </div>
//   );
// };

// export default CourseNode;

// CourseNode.jsx
import React from 'react'
import ReactFlow from 'reactflow'
import "reactflow/dist/style.css";
import CustomNode from './roadmap/CustomNode';
import NodeContents from './roadmap/NodeContents';

const Roadmap = () => {
  const topics = [
    "Basics Of Computer, How the Web Works",
    "HTML & CSS",
    "Javascript React"
  ];

  const contents = [
    "Introduction to Computer",
    "How the Internet works",
    "Quit"
  ];

  // Big topic nodes
  const topicNodes = topics.map((topic, index) => ({
    id: `t-${index + 1}`,
    position: { x: 0, y: index * 200 },
    data: { label: topic },
    type: "CustomNode"
  }));

  // Content nodes (each content gets its own node)
  const contentNodes = contents.map((content, index) => ({
    id: `c-${index + 1}`,
    position: { x: 300, y: index * 200 }, // align with parent
    data: { label: content },
    type: "NodeContents"
  }));

  // Edges: topic → content
  const contentEdges = topics.map((_, index) => ({
    id: `tc-${index + 1}`,
    source: `t-${index + 1}`,
    sourceHandle: "r1",       // use the right handle
    target: `c-${index + 1}`,
    type: "straight"
  }));

  const nodes = [...topicNodes, ...contentNodes];
  const edges = [...contentEdges];

  const nodeTypes = { CustomNode, NodeContents };

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView />
    </div>
  );
};

export default Roadmap;
