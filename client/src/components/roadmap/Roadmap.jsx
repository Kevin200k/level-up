// import React, { useMemo } from "react"
// import ReactFlow, { Background, Controls } from "reactflow"
// import "reactflow/dist/style.css"


// const StageNodes = ({ data }) => {
//   return (
//     <div className="bg-white border-2 border-blue-500 shadow-md rounded-xl p-4 w-72 text-center">
//       <h3 className="text-lg font-bold text-blue-600">{data.stage}</h3>
//       <p className="text-sm text-gray-500 mb-2">⏳ {data.duration}</p>

//       <ul className="list-disc list-inside text-sm text-gray-700 text-left">
//         {data.topics.map((t, i) => (
//           <li key={i}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const nodesTypes = { stageNodes: StageNodes }

// const RoadmapFlow = ({ roadmap }) => {
//   const { nodess, edges } = useMemo(() => {
//     const nodess = roadmap.map((stage, index) => ({
//       id: `stage-${index}`,
//       type: "stageNodes",
//       position: { x: 0, y: index * 250 },
//       data: stage,
//     }))

//     const edges = roadmap.slice(1).map((_, index) => ({
//       id: `edge-${index}`,
//       source: `stage-${index}`,
//       target: `stage-${index + 1}`,
//       type: "smoothstep",
//       animated: true,
//       style: { stroke: "#3b82f6", strokeWidth: 2 },
//     }))

//     return { nodess, edges }
//   }, [roadmap])

//   return (
//     <div style={{ width: "100%", height: "80vh" }}>
//       <ReactFlow
//         nodess={nodess}
//         edges={edges}
//         nodesTypes={nodesTypes}
//         fitView
//       >
//         <Background gap={20} color="#eee" />
//         <Controls />
//       </ReactFlow>
//     </div>
//   )
// }

// export default RoadmapFlow



// import ReactFlow from "reactflow"
// import "reactflow/dist/style.css";

// const BasicFlow = () => {

//   const nodess = [
//     {
//       id: "1",
//       position: { x:0, y:0 },
//       data: { label: 'Nodes 1' }
//     },
//     {
//       id: "2",
//       position: { x:0, y:80 },
//       data: { label: "Nodes 2" }
//     }
//   ]

//   const edges = [
//     { id: "e1-2", source: "1", target: "2", type: "smoothstep" }
//   ];


//   return (
//     <div style={{width: "100%", height: "500px"}}>
//       <ReactFlow nodess={nodess} edges={edges} fitView />
//     </div>
//   )
// }

// export default BasicFlow

// // BasicFlow.jsx
// import React from "react";
// import ReactFlow from "reactflow";
// import "reactflow/dist/style.css";
// import CourseNodes from "./CourseNodes"; // import custom nodes

// const BasicFlow = () => {
//   const nodess = [
//     {
//       id: "1",
//       type: "courseNodes", // 👈 tell ReactFlow to use your custom nodes
//       position: { x: 0, y: 0 },
//       data: { title: "Frontend Development", duration: "6 months" },
//     },
//     {
//       id: "2",
//       type: "courseNodes",
//       position: { x: 300, y: 200 },
//       data: { title: "Data Science", duration: "9 months" },
//     },
//   ];

//   const edges = [{ id: "e1-2", source: "1", target: "2", type: "smoothstep" }];

//   // 👇 register your custom nodes type
//   const nodesTypes = { courseNodes: CourseNodes };

//   return (
//     <div style={{ width: "100%", height: "80vh" }}>
//       <ReactFlow nodess={nodess} edges={edges} nodesTypes={nodesTypes} fitView />
//     </div>
//   );
// };

// export default BasicFlow;

// // BasicFlow.jsx
// import React, { useState } from "react";
// import ReactFlow from "reactflow";
// import "reactflow/dist/style.css";
// import CourseNodes from "./CourseNodes";

// const BasicFlow = () => {
//   const [selectedCourses, setSelectedCourses] = useState([]);

//   const handleSelect = (courseTitle) => {
//     setSelectedCourses((prev) => [...prev, courseTitle]);
//     console.log("Selected:", courseTitle);
//   };

//   const nodess = [
//     {
//       id: "1",
//       type: "courseNodes",
//       position: { x: 0, y: 0 },
//       data: { title: "Frontend Development", duration: "6 months", onSelect: handleSelect },
//     },
//     {
//       id: "2",
//       type: "courseNodes",
//       position: { x: 300, y: 200 },
//       data: { title: "Data Science", duration: "9 months", onSelect: handleSelect },
//     },
//   ];

//   const edges = [{ id: "e1-2", source: "1", target: "2", type: "smoothstep" }];

//   const nodesTypes = { courseNodes: CourseNodes };

//   return (
//     <div style={{ width: "100%", height: "80vh" }}>
//       <ReactFlow nodess={nodess} edges={edges} nodesTypes={nodesTypes} fitView />
      
//       {/* 👇 Show selected courses */}
//       <div className="absolute bottom-4 left-4 bg-white p-3 shadow-md rounded-lg border">
//         <h4 className="font-bold">Selected Courses:</h4>
//         <ul>
//           {selectedCourses.map((course, i) => (
//             <li key={i} className="text-blue-600">
//               {course}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BasicFlow;

import React from 'react'
import ReactFlow from 'reactflow'
import "reactflow/dist/style.css";
import CustomNode from './CustomNode';
import NodeContents from './NodeContents';

const Roadmap = () => {
  const topics = [
    "Basics Of Computer, How the Web Works",
    "HTML & CSS",
    "Javascript React"
  ];

  const firstNodeContents = [
    "Introduction to Computer",
    "How the Internet works",
    "Quit"
  ];

  // Main topic nodes
  const topicNodes = topics.map((topic, index) => ({
    id: `t-${index + 1}`,
    position: { x: 0, y: index * 200 },
    data: { label: topic },
    type: "CustomNode",
  }));

  // Content nodes (only attach to first main node)
  const contentNodes = firstNodeContents.map((content, index) => ({
    id: `c-${index + 1}`,
    position: { x: 300, y: index * 150 }, // stagger beside first node
    data: { label: content },
    type: "NodeContents",
  }));

  // Vertical edges between main nodes
  const topicEdges = topics.slice(1).map((_, index) => ({
    id: `t-edge-${index + 1}`,
    source: `t-${index + 1}`,
    sourceHandle: "bottom",   // force edge from bottom of current node
    target: `t-${index + 2}`,
    targetHandle: "top",      // connect to top of next node
    type: "straight",
  }));

  // Edges: only first topic → all contents
  const contentEdges = firstNodeContents.map((_, index) => ({
    id: `tc-${index + 1}`,
    source: "t-1",
    sourceHandle: "r1",       // right handle of first node
    target: `c-${index + 1}`,
    targetHandle: "left",     // left side of content node
    type: "straight",
  }));

  const nodes = [...topicNodes, ...contentNodes];
  const edges = [...topicEdges, ...contentEdges];

  const nodeTypes = { CustomNode, NodeContents };

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView />
    </div>
  );
};

export default Roadmap;
