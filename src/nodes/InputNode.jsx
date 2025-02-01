import React from 'react';
import { Handle, Position } from 'reactflow';
import { Clipboard, ClipboardList } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const InputNode = () => {
    return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-orange-100 transition-all duration-200 hover:shadow-xl hover:border-orange-300">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="flex items-center gap-2">
          <Clipboard className="w-5 h-5 text-orange-600" />
          <div className="font-semibold text-gray-800">Input Node</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Input Type
          </label>
          <div className="relative">
            <div className="w-full p-2 rounded-md border">
            <ClipboardList className="w-4 h-4 text-orange-500 inline" />
            <span> Text Input</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connection points container */}
      <div className="absolute inset-0">
        {/* Output Handler */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="source"
                position={Position.Right}
                id="output"
                className="!absolute !right-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-orange-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-orange-500 text-white font-medium"
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
