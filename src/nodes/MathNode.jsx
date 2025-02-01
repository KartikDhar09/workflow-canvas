import React from 'react';
import { Handle, Position } from 'reactflow';
import { Calculator } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const MathOperationNode = ({ data }) => {
  return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-cyan-100 transition-all duration-200 hover:shadow-xl hover:border-cyan-300">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-cyan-50 to-cyan-100">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-cyan-600" />
          <div className="font-semibold text-gray-800">Math Operation</div>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Operation Type
          </label>
          <div className="relative">
            <div className="w-full p-2  rounded-md border border-cyan-200 ">
            <Calculator className="h-4 w-4 text-cyan-500 inline" />
            <span> Addition (+)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connection points container */}
      <div className="absolute inset-0">
        {/* input connection point 1 */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="target"
                position={Position.Left}
                id="input1"
                className="!absolute !left-0 !top-1/3 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-cyan-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="bg-cyan-500 text-white font-medium"
              sideOffset={5}
            >
              First Number Input
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* input connection point 2 */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="target"
                position={Position.Left}
                id="input2"
                className="!absolute !left-0 !top-2/3 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-cyan-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="bg-cyan-500 text-white font-medium"
              sideOffset={5}
            >
              Second Number Input
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* output connection point */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="source"
                position={Position.Right}
                id="output"
                className="!absolute !right-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-cyan-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-cyan-500 text-white font-medium"
              sideOffset={5}
            >
               Output
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};