import React from 'react';
import { Handle, Position } from 'reactflow';
import { Download } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const OutputNode = () => {
  return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-violet-100 transition-all duration-200 hover:shadow-xl hover:border-violet-300">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-violet-50 to-violet-100">
        <div className="flex items-center gap-2">
          <Download className="w-5 h-5 text-violet-600" />
          <div className="font-semibold text-gray-800">Output Node</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Output Configuration
          </label>
          <div className="text-sm text-gray-600">
            Configure your output destination
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
                className="!absolute !left-0 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-violet-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="bg-violet-500 text-white font-medium"
              sideOffset={5}
            >
              Input Connection
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};