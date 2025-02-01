import { useState, useRef, useCallback, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';

import {
  addNodeWithId,
  onNodesChange,
  onEdgesChange,
  onConnect,
  selectNodes,
  selectEdges,
} from './store/flowSlice.js';

import {
  InputNode,
  LLMNode,
  OutputNode,
  TextNode,
  MathOperationNode,
  ImageProcessingNode,
  DataValidationNode,
  APIRequestNode,
  ConditionNode
} from './nodes/index.js';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

export const PipelineUI = () => {

  const nodeTypes = useMemo(() => ({
    customInput: InputNode,
    llm: LLMNode,
    customOutput: OutputNode,
    text: TextNode,
    math: MathOperationNode,
    img: ImageProcessingNode,
    dataval: DataValidationNode,
    api: APIRequestNode,
    condition: ConditionNode
  }), []);

  // Reference to the ReactFlow wrapper div
  const reactFlowWrapper = useRef(null);
  
  // State to store the ReactFlow instance
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  
  const dispatch = useDispatch();
  
  // Select nodes and edges from Redux store
  const nodes = useSelector(selectNodes);
  const edges = useSelector(selectEdges);

  // Helper function to generate initial node data
  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: `${type}` };
  };

  // Handler for dropping new nodes onto the canvas
  const onDropHandler = useCallback(
    (event) => {
      event.preventDefault();
  
      // Check if the dropped item is a ReactFlow node
      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const type = appData?.nodeType;
  
        // Return if node type is invalid
        if (typeof type === 'undefined' || !type) {
          return;
        }
  
        // Convert screen coordinates to flow coordinates
        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });
  
        // Create new node object
        const newNode = {
          type,
          position,
          data: getInitNodeData('placeholder', type),
        };
  
        // Dispatch action to add new node
        dispatch(addNodeWithId({ type, node: newNode }));
      }
    },
    [reactFlowInstance, dispatch]
  );

  // Handler for node changes (position, selection, etc.)
  const onNodesChangeHandler = useCallback(
    (changes) => {
      dispatch(onNodesChange(changes));
    },
    [dispatch]
  );

  // Handler for edge changes (connections between nodes)
  const onEdgesChangeHandler = useCallback(
    (changes) => {
      dispatch(onEdgesChange(changes));
    },
    [dispatch]
  );

  // Handler for new connections between nodes
  const onConnectHandler = useCallback(
    (connection) => {
      dispatch(onConnect(connection));
    },
    [dispatch]
  );

  // Handler for dragging nodes over the canvas
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
      <div ref={reactFlowWrapper} className='h-[60vh] md:h-[75vh]'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChangeHandler}
          onEdgesChange={onEdgesChangeHandler}
          onConnect={onConnectHandler}
          onDrop={onDropHandler}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType='smoothstep'
          defaultEdgeOptions={{
            style: {
              stroke: 'black',
              strokeWidth: 2
            }
          }}
        >
          <Background 
            color="gray" 
            size='2' 
            gap='20' 
            className='border-2 bg-gradient-to-r from-purple-50 to-indigo-100 border-black' 
          />
          <Controls className='border-2 border-slate-900' />
          <MiniMap className='border-2 border-slate-900' />
        </ReactFlow>
      </div>
  );
};