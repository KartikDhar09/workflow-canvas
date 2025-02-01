import React from 'react';
import { Handle, Position } from 'reactflow';
import { Shield } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const DataValidationNode = () => {
  return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-teal-100 transition-all duration-200 hover:shadow-xl hover:border-teal-300">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-teal-50 to-teal-100">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-teal-600" />
          <div className="font-semibold text-gray-800">Data Validation</div>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Validation Type
          </label>
          <div className="relative">
            <div className="w-full p-2 rounded-md border">
              <span>Type Check </span>
            <Shield className="w-4 h-4 inline text-teal-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Connection points container */}
      <div className="absolute inset-0">
        {/* Input Handler */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="target"
                position={Position.Left}
                id="input"
                className="!absolute !left-0 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-teal-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="bg-teal-500 text-white font-medium"
              sideOffset={5}
            >
              Input Connection
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/*  Output Handler */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="source"
                position={Position.Right}
                id="valid"
                className="!absolute !right-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-teal-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-teal-500 text-white font-medium"
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