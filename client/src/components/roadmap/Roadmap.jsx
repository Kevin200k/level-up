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

// import React from 'react'
// import ReactFlow from 'reactflow'
// import "reactflow/dist/style.css";
// import CustomNode from './CustomNode';
// import NodeContents from './NodeContents';
// import { useCourses } from '../../context/CourseContext';

// const Roadmap = () => {

//   const { courses: courseList } = useCourses()

//   const topics = [
//     "Basics Of Computer, How the Web Works",
//     "HTML & CSS",
//     "Javascript React"
//   ];

//   const firstContent = [
//     "Introduction to Computer",
//     "How the Internet works",
//     "Quiz"
//   ];

//   const secondContent = [
//     "HTML Fundamentals",
//     "Css Styling Basics",
//     "Practical: Build a Personal Portforlio"
//   ];

//   const thirdContent = [
//     "Javascript Essentials",
//     "React Basics",
//     "React Project: Todo App"
//   ];

//   // Main topic nodes
//   const topicNodes = topics.map((topic, index) => ({
//     id: `t-${index + 1}`,
//     position: { x: 0, y: index * 200 },
//     data: { label: topic },
//     type: "CustomNode",
//   }));

//   // Content nodes
//   const firstContentNodes = firstContent.map((content, index) => ({
//     id: `c-${index + 1}`,
//     position: { x: 300, y: index * 50 },
//     data: { label: content },
//     type: "NodeContents",
//   }));

//   const secondContentNodes = secondContent.map((content, index) => ({
//     id: `d-${index + 1}`,
//     position: { x: 300, y: 200 + index * 50 }, // align with topic 2
//     data: { label: content },
//     type: "NodeContents",
//   }));

//   const thirdContentNodes = thirdContent.map((content, index) => ({
//     id: `e-${index + 1}`,
//     position: { x: 300, y: 400 + index * 50 }, // align with topic 3
//     data: { label: content },
//     type: "NodeContents",
//   }));

//   // Vertical edges between main nodes
//   const topicEdges = topics.slice(1).map((_, index) => ({
//     id: `t-edge-${index + 1}`,
//     source: `t-${index + 1}`,
//     sourceHandle: "bottom",
//     target: `t-${index + 2}`,
//     targetHandle: "top",
//     type: "straight",
//     style: { strokeWidth: 2, stroke: "black" }
//   }));

//   // Edges: topic 1 → its contents
//   const contentEdges = firstContent.map((_, index) => {
//     const edges = [
//       {
//         id: `c-edge-${index + 1}`,
//         source: "t-1",
//         sourceHandle: "r1",
//         target: `c-${index + 1}`,
//         targetHandle: "left",
//         type: "default",
//         style: { strokeWidth: 1, stroke: "black", strokeDasharray: "5,5" }
//       },
//     ];

//     // Special: if it's the 3rd node, also connect to t-2
//     if (index === 2) {
//       edges.push({
//         id: `c-extra-edge-${index + 1}`,
//         source: `c-${index + 1}`,
//         sourceHandle: "bottom",
//         target: "t-2",
//         targetHandle: "top",
//         type: "bezier", // make it curved
//         style: { strokeWidth: 1.2, stroke: "black" }
//       });
//     }
    
//     return edges;
//   }).flat();
  
//   // Edges: topic 2 → its contents
//   const secondContentEdges = secondContent.map((_, index) => {
//     const edges = [
//       {
//         id: `d-edge-${index + 1}`,
//         source: "t-2",
//         sourceHandle: "r1",
//         target: `d-${index + 1}`,
//         targetHandle: "left",
//         type: "default",
//         style: { strokeWidth: 1, stroke: "black", strokeDasharray: "5,5" }
//       },
//     ];

//     // Special: if it's the 3rd node, also connect to t-3
//     if (index === 2) {
//       edges.push({
//         id: `d-extra-edge-${index + 1}`,
//         source: `d-${index + 1}`,
//         sourceHandle: "bottom",
//         target: "t-3",
//         targetHandle: "top",
//         type: "bezier",
//         style: { strokeWidth: 1.2, stroke: "black" }
//       });
//     }

//     return edges;
//   }).flat();

//   // Edges: topic 3 → its contents
//   const thirdContentEdges = thirdContent.map((_, index) => ({
//     id: `e-edge-${index + 1}`,
//     source: "t-3",
//     sourceHandle: "r1",
//     target: `e-${index + 1}`,
//     targetHandle: "left",
//     type: "default",
//     style: { strokeWidth: 1, stroke: "black", strokeDasharray: "5,5"}
//   }));

//   const nodes = [
//     ...topicNodes,
//     ...firstContentNodes,
//     ...secondContentNodes,
//     ...thirdContentNodes,
//   ];

//   const edges = [
//     ...topicEdges,
//     ...contentEdges,
//     ...secondContentEdges,
//     ...thirdContentEdges
//   ];

//   const nodeTypes = { CustomNode, NodeContents };

//   return (
//     <div style={{ width: "100%", height: "80vh" }}>
//       <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView />
//     </div>
//   );
// };

// export default Roadmap;

import React from "react"
import ReactFlow from "reactflow"
import "reactflow/dist/style.css"
import MainTopicNode from "./MainTopicNode"
import SubtopicNode from "./SubtopicNode"
import ProjectNode from "./ProjectNode"
import QuizNode from "./QuizNode"   // ✅ fixed import

const Roadmap = () => {
  const topics = [ "Node 1", "Node 2", "Node 3" ]
  const subTopics = [ "subNode 1", "subNode 2", "subNode 3" ]
  const secondSubTopic = [ "subNode 11", "subNode 22", "subNode 33" ]
  const thirdSubTopic = [ "subNode 21", "subNode 22", "subNode 23" ]

  // MainTopicNode
  const mainNode = topics.map((topic, index) => ({
    id: `t-${index + 1}`,
    position:
      index === 0
        ? { x: 0, y: index * 200 }
        : index === 1
        ? { x: 400, y: index * 200 }
        : { x: 400, y: index * 260 },
    data: { label: topic },
    type: "MainTopicNode",
  }))

  // First SubtopicNode
  const subTopicNode = subTopics.map((topic, index) => ({
    id: `st-${index + 1}`,
    position: { x: 300, y: -50 + index * 60 },
    data: { label: topic },
    type: index === 2 
      ? "QuizNode" 
      : "SubtopicNode"
  }))

  // Second SubTopicNode...
  const secondSubTopicNode = secondSubTopic.map((topic, index) => ({
    id: `tt-${ index + 1 }`,
    position: { x: 200, y: 260 + index * 60  },
    data: { label: topic },
    type: index === 2
      ? "ProjectNode"
      : "SubtopicNode"
  }))

  //Third SubTopicNode...
  const thirdSubTopicNode = thirdSubTopic.map((topic, index) => ({
    id: `ft-${ index + 1 }`,
    position: { x: 100, y: 480 + index * 60 },
    data: { label: topic },
    type: index === 2
      ? "ProjectNode"
      : "SubtopicNode"
  }))

  const mainTopicEdge = {
    id: `e-1`,
    source: "t-1",
    sourceHandle: "b",
    target: "t-2",
    targetHandle: "l",
    type: "step",
    style: { strokeWidth: 5, stroke: "black" }
  }


  const secondTopicEdges = topics.slice(1, topics.length - 1).map((_, index) => ({
    id: `e-${index + 2}`,
    source: `t-${index + 2}`,
    sourceHandle: "b",
    target: `t-${index + 3}`,
    targetHandle: "t",
    type: "step",
    style: { strokeWidth: 5, stroke: "black" }
  }))

  // First Subtopic Node
  const firstSubTopicEdge = subTopics.map((_, index) => ({
    id: `st-e-${index + 1}`,
    source: "t-1",
    sourceHandle: "c",
    target: `st-${index + 1}`,
    targetHandle: "l",
    type: "default",
    style: { strokeWidth: 1.5, stroke: "black", strokeDasharray: "6,5" }
  }))

  // second Subtopic Node
  const secondSubTopicEdge = secondSubTopic.map((_, index) => ({
    id: `tt-e-${index + 1}`,
    source: `tt-${ index + 1 }`,
    sourceHandle: "r",
    target: "t-2",
    targetHandle: "l",
    type: "default",
    style: { strokeWidth: 1.5, stroke: "black", strokeDasharray: "6,5" }
  }))

  const thirdSubTopicEdge = thirdSubTopic.map((_, index) => ({
    id: `ft-e-${index + 1}`,
    source: `ft-${ index + 1 }`,
    sourceHandle: "r",
    target: "t-3",
    targetHandle: "l",
    type: "default",
    style: { strokeWidth: 1.5, stroke: "black", strokeDasharray: "6,5" }
  }))

  const nodes = [...mainNode, ...subTopicNode, ...secondSubTopicNode, ...thirdSubTopicNode ]

  const edges = [mainTopicEdge, ...secondTopicEdges, ...firstSubTopicEdge, ...secondSubTopicEdge, ...thirdSubTopicEdge]

  const nodeTypes = { MainTopicNode, SubtopicNode, QuizNode, ProjectNode }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
    </div>
  )
}

export default Roadmap

