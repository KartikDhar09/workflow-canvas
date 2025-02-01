import React from 'react';
import { Handle, Position } from 'reactflow';
import { Cpu } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const LLMNode = () => {
  return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-red-100 transition-all duration-200 hover:shadow-xl hover:border-red-300">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-red-50 to-red-100">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-red-600" />
          <div className="font-semibold text-gray-800">LLM Node</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="text-sm text-gray-600">
          Configure your Language Model settings
        </div>
      </div>

      {/* Connection points container */}
      <div className="absolute inset-0">
        {/* input connection point */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="target"
                position={Position.Left}
                id="input"
                className="!absolute !left-0 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-red-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="bg-red-500 text-white font-medium"
              sideOffset={5}
            >
              Input Connection
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
                className="!absolute !right-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-red-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-red-500 text-white font-medium"
              sideOffset={5}
            >
              Output Connection
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};