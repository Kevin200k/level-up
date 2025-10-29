import React, { useEffect, useState } from "react"
import ReactFlow from "reactflow"
import "reactflow/dist/style.css"
import MainTopicNode from "./MainTopicNode"
import SubtopicNode from "./SubtopicNode"
import ProjectNode from "./ProjectNode"
import QuizNode from "./QuizNode"
import TitleNode from "./TitleNode"
import StageNode from "./StageNode"
import LabelNode from "./LabelNode"
import { useCourses } from '../../context/CourseContext'


const nodeTypes = { MainTopicNode, SubtopicNode, QuizNode, ProjectNode, TitleNode, StageNode, LabelNode }


const Roadmap = ({ courseId }) => {

  const { courses: courseList, loading } = useCourses()

  // const { courseId } = useParams(courseList)

  // const { courseList: roadmapId } = useParams()

  if (loading) {
    return (
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    )
  }

  const findRoute = courseList.find(course => course.id === courseId)

  const topics = findRoute?.roadmap?.map(stage => stage.topics || []) || []

  const subTopics = findRoute?.roadmap[0]?.content?.map( content => content.lesson || []) || []

  const secondSubTopic = findRoute?.roadmap[1]?.content?.map( content => content.lesson || [] ) || []

  const thirdSubTopic = findRoute?.roadmap[2]?.content?.map( content => content.lesson || [] ) || []
  
  // MainTopicNode
  const mainNode = topics.map((topic, index) => ({
    id: `t-${index + 1}`,
    position:
      index === 0
        ? { x: 0, y: index * 200 }
        : index === 1
        ? { x: 400, y: index * 200 }
        : { x: 400, y: index  * 260 },
    data: { label: topic },
    type: "MainTopicNode",
  }))

  // First SubtopicNode
  const subTopicNode = subTopics.map((topic, index) => ({
    id: `st-${index + 1}`,
    position: { x: 450, y: -180 + index * 90 },
    data: { label: topic },
    type: index === 2 
      ? "QuizNode" 
      : "SubtopicNode"
  }))

  // Second SubTopicNode...
  const secondSubTopicNode = secondSubTopic.map((topic, index) => ({
    id: `tt-${ index + 1 }`,
    position: { x: 40, y: 300 + index * 90  },
    data: { label: topic },
    type: index === 2
      ? "ProjectNode"
      : "SubtopicNode"
  }))

  //Third SubTopicNode...
  const thirdSubTopicNode = thirdSubTopic.map((topic, index) => ({
    id: `ft-${ index + 1 }`,
    position: { x: 800, y: 530 + index * 90 },
    data: { label: topic },
    type: index === 2
      ? "ProjectNode"
      : "SubtopicNode"
  }))

  // title Node...
  const title = {
    id: "tn-1",
    position: { x: -70, y: -280 },
    data: { label: findRoute?.title || [] },
    type: "TitleNode"
  }

  // First Stage Node...
  const firstStage = {
    id: "sn-1",
    position: { x: 27, y: -90 },
    data: { label: findRoute?.roadmap[0]?.stage || [] },
    type: "StageNode"
  }

  // Second Stage Node...
  const secondStage = {
    id: "sn-2",
    position: { x: 445, y: 120 },
    data: { label: findRoute?.roadmap[1]?.stage || [] },
    type: "StageNode"
  }

  const thirdStage = {
    id: "sn-3",
    position: { x: 500, y: 470 },
    data: { label: findRoute?.roadmap[2]?.stage || [] },
    type: "StageNode"
  }

  // Firstlabel....
  const firstLabel = {
    id: "ln-1",
    position: { x: -200, y: -75 },
    data: { label: '1' },
    type: "LabelNode"
  }

  // SecondLabel
  const secondLabel = {
    id: "ln-2",
    position: { x: 900, y: 135 },
    data: { label: '2' },
    type: "LabelNode"
  }

  // ThirdLabel...
  const thirdLabel = {
    id: "ln-3",
    position: { x: 900, y: 465 },
    data: { label: '3' },
    type: "LabelNode"
  }

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
    source: "t-3",
    sourceHandle: "c",
    target: `ft-${index + 1}`,
    targetHandle: "a",
    type: "default",
    style: { strokeWidth: 1.5, stroke: "black", strokeDasharray: "6,5" }
  }));


  const firstCustomEdge = {
    id: "tn-s1",
    source: "tn-1",
    sourceHandle: "b",
    target: "sn-1",
    targetHandle: "t",
    type: "step",
    style: { strokeWidth: 1, stroke: "black", strokeDasharray: "6,5" }
  }

  const secondCustomEdge = {
    id: "tn-s2",
    source: "sn-1",
    sourceHandle: "b",
    target: "t-1",
    targetHandle: "t",
    type: "step",
    style: { strokeWidth: 1, stroke: "black", strokeDasharray: "6,5" }
  }

  const thirdCustomEdge = {
    id: "tn-s3",
    source: "sn-2",
    sourceHandle: "b",
    target: "t-2",
    type: "step",
    targetHandle: "t",
    style: { strokeWidth: 1, stroke: "black", strokeDasharray: "6,5" }
  }

  const firstLabelEdge = {
    id: "ln-s1",
    source: "ln-1",
    sourceHandle: "r",
    target: "sn-1",
    type: "step",
    targetHandle: "l",
    style: { strokeWidth: 1, stroke: "black", strokeDasharray: "6,5" }
  }

  const secondLabelEdge = {
    id: "ln-s2",
    source: "ln-2",
    sourceHandle: "l",
    target: "sn-2",
    type: "step",
    targetHandle: "r",
    style: { strokeWidth: 1, stroke: "black", strokeDasharray: "6,5" }
  }

  const thirdLabelEdge = {
    id: "ln-s3",
    source: "ln-3",
    sourceHandle: "l",
    target: "sn-3",
    type: "step",
    targetHandle: "r",
    style: { strokeWidth: 1, stroke: "black", strokeDasharray: "6,5" }
  }

  const nodes = [...mainNode, ...subTopicNode, ...secondSubTopicNode, ...thirdSubTopicNode, title, firstStage, secondStage, thirdStage, firstLabel, secondLabel, thirdLabel ]

  const edges = [mainTopicEdge, ...secondTopicEdges, ...firstSubTopicEdge, ...secondSubTopicEdge, ...thirdSubTopicEdge, firstCustomEdge, secondCustomEdge, thirdCustomEdge, firstLabelEdge, secondLabelEdge, thirdLabelEdge]

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow 
      nodes={nodes} 
      edges={edges} 
      nodeTypes={nodeTypes} 
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false} // ❌ can’t select nodes/edges   
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false} 
      fitView />

    </div>
  )
}

export default Roadmap