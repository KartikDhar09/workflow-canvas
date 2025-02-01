import { createSlice } from '@reduxjs/toolkit';

import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

const initialState = {
  nodes: [],
  edges: [],
  nodeIDs: {},
  lastNodeId: null
};

const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    // Adds a new node with an automatically generated unique ID
    addNodeWithId: (state, action) => {
      const { type, node } = action.payload;
      
      // Initialize counter for this node type if it doesn't exist
      if (state.nodeIDs[type] === undefined) {
        state.nodeIDs[type] = 0;
      }
      // Increment counter and generate unique ID
      state.nodeIDs[type] += 1;
      const newId = `${type}-${state.nodeIDs[type]}`;
      
      // Store the ID of this newly created node
      state.lastNodeId = newId;
      
      // Create new node with generated ID and add to nodes array
      state.nodes.push({
        ...node,
        id: newId,
        data: { ...node.data, id: newId }
      });
    },

    // Handles node changes (position, deletion, etc.)
    onNodesChange: (state, action) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },

    // Handles edge changes (deletion, selection, etc.)
    onEdgesChange: (state, action) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },

    // Creates a new edge connection between nodes
    onConnect: (state, action) => {
      const connection = action.payload;
      const newEdge = {
        ...connection,
        type: 'smoothstep',      
        animated: true,          
        markerEnd: {            
          type: MarkerType.Arrow,
          height: '20px',
          width: '20px',
          color: '#000'
        }
      };
      state.edges = addEdge(newEdge, state.edges);
    },

    // Updates a specific field in a node's data
    updateNodeField: (state, action) => {
      const { nodeId, fieldName, fieldValue } = action.payload;
      const node = state.nodes.find(node => node.id === nodeId);
      if (node) {
        node.data = { ...node.data, [fieldName]: fieldValue };
      }
    }
  }
});

export const {
  addNodeWithId,
  onNodesChange,
  onEdgesChange,
  onConnect,
  updateNodeField
} = flowSlice.actions;

export default flowSlice.reducer;

export const selectNodes = (state) => state.flow.nodes;
export const selectEdges = (state) => state.flow.edges;
export const selectLastNodeId = (state) => state.flow.lastNodeId;