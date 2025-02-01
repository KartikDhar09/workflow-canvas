import React from "react";
import { Handle, Position } from "reactflow";
import { GitBranch } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ConditionNode = () => {
  return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-purple-100 transition-all duration-200 hover:shadow-xl hover:border-purple-300">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-purple-600" />
          <div className="font-semibold text-gray-800">Condition</div>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Comparison Operator
          </label>
          <div className="relative">
            <div className="w-full p-2 pl-8 rounded-md border ">
              Equal Operator '=' 
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-purple-500 pointer-events-none">
              <GitBranch className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Compare Value
          </label>
          <div className="relative">
            <div className="w-full p-2 pr-8 rounded-md border border-gray-200  outline-none text-gray-500">
            Enter comparison value
            </div>
          </div>
        </div>
      </div>

      {/* Connection points container */}
      <div className="absolute inset-0">
        {/* Input Handler  */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="target"
                position={Position.Left}
                id="input"
                className="!absolute !left-0 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-purple-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="bg-purple-500 text-white font-medium"
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
                id="true"
                className="!absolute !right-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-purple-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent 
              side="right" 
              className="bg-purple-500 text-white font-medium"
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