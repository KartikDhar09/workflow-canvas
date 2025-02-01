import React from 'react';
import { Handle, Position } from 'reactflow';
import { Type } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const TextNode = () => {
  return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-amber-100 transition-all duration-200 hover:shadow-xl hover:border-amber-300">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="flex items-center gap-2">
          <Type className="w-5 h-5 text-amber-600" />
          <div className="font-semibold text-gray-800">Text Node</div>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Text Input
          </label>
          <div className="w-full p-2 rounded-md border border-gray-200 text-gray-500">
            Enter text
            </div>
        </div>
      </div>

      {/* Connection points container */}
      <div className="absolute inset-0">
        {/*  input connection point */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="target"
                position={Position.Left}
                id="input"
                className="!absolute !left-0 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-amber-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="bg-amber-500 text-white font-medium"
              sideOffset={5}
            >
              Input Connection
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/*  output connection point */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="source"
                position={Position.Right}
                id="output"
                className="!absolute !right-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-amber-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-amber-500 text-white font-medium"
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