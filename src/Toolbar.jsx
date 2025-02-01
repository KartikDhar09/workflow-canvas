import React from 'react';

import { 
  Calculator, 
  Clipboard, 
  Cpu, 
  Download, 
  GitBranch, 
  Shield, 
  Type, 
  Globe, 
  Image 
} from 'lucide-react';

import { DraggableNode } from './DraggableNode.jsx';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

import { motion } from "framer-motion";


export const PipelineToolbar = () => {
    // available node types with their properties
    const nodes = [
        { type: 'customInput', label: 'Input', icon: Clipboard },
        { type: 'llm', label: 'LLM', icon: Cpu },
        { type: 'customOutput', label: 'Output', icon: Download },
        { type: 'text', label: 'Text', icon: Type },
        { type: 'math', label: 'Math', icon: Calculator },
        { type: 'img', label: 'Image', icon: Image },
        { type: 'dataval', label: 'Validation', icon: Shield },
        { type: 'api', label: 'API', icon: Globe },
        { type: 'condition', label: 'Condition', icon: GitBranch }
    ];

    return (
        // Wrapper with animation effects using framer-motion
        <motion.div
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}   
            transition={{ duration: 0.3 }}   
            className="w-full"
        >
            <Card className="
                w-full 
                bg-gradient-to-r 
                    from-purple-200 
                    to-indigo-300 
                overflow-hidden 
                shadow-2xl 
                rounded-none
            ">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <div>
                            <h2 className="
                                text-2xl 
                                font-extrabold 
                                text-gray-800 
                                tracking-tight
                            ">
                               Demo Pipeline Nodes
                            </h2>
                            <p className="
                                text-sm 
                                text-gray-500 
                                mt-1 
                                font-medium
                            ">
                                Drag nodes to build your pipeline
                            </p>
                        </div>
                    </CardTitle>
                </CardHeader>
                
                <CardContent>
                    <div className="
                        grid 
                        grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5 
                        gap-x-4 
                        gap-y-2
                    ">
                        {/* Map through nodes array to render each DraggableNode */}
                        {nodes.map(({ type, label, icon: Icon }) => (
                            <DraggableNode 
                                key={type}
                                type={type} 
                                label={label}
                                icon={Icon}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default PipelineToolbar;