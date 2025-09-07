import React, { useMemo } from "react"
import ReactFlow, { Background, Controls } from "reactflow"
import "reactflow/dist/style.css"


const StageNode = ({ data }) => {
  return (
    <div className="bg-white border-2 border-blue-500 shadow-md rounded-xl p-4 w-72 text-center">
      <h3 className="text-lg font-bold text-blue-600">{data.stage}</h3>
      <p className="text-sm text-gray-500 mb-2">⏳ {data.duration}</p>

      <ul className="list-disc list-inside text-sm text-gray-700 text-left">
        {data.topics.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

const nodeTypes = { stageNode: StageNode }

const RoadmapFlow = ({ roadmap }) => {
  const { nodes, edges } = useMemo(() => {
    const nodes = roadmap.map((stage, index) => ({
      id: `stage-${index}`,
      type: "stageNode",
      position: { x: 0, y: index * 250 },
      data: stage,
    }))

    const edges = roadmap.slice(1).map((_, index) => ({
      id: `edge-${index}`,
      source: `stage-${index}`,
      target: `stage-${index + 1}`,
      type: "smoothstep",
      animated: true,
      style: { stroke: "#3b82f6", strokeWidth: 2 },
    }))

    return { nodes, edges }
  }, [roadmap])

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={20} color="#eee" />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default RoadmapFlow
