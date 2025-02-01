import React from "react";
import { Handle, Position } from "reactflow";
import { Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const APIRequestNode = () => {
  return (
    <div className="relative min-w-[280px] shadow-lg rounded-lg bg-white border-2 border-blue-100 transition-all duration-200 hover:shadow-xl hover:border-blue-300">
      <div className="flex items-center gap-2 p-3 border-b border-gray-100 bg-blue-50">
        <Globe className="w-5 h-5 text-blue-600" />
        <span className="font-semibold text-gray-800">API Request</span>
      </div>
      <div className="p-4 space-y-3">
        <div className='w-full p-2 rounded-md border font-medium bg-green-100/80'>
          <span>Method: </span>
          <span className="text-green-500">'POST'</span>
        </div>
        <div className="w-full p-2 rounded-md border border-gray-200 text-gray-500">
        Enter Url 
        </div>
      </div>

      {/* Connection points wrapper */}
      <div className="absolute inset-0">
        {/* Input connection handle  */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="target"
                position={Position.Left}
                id="input"
                className="!absolute !left-0 !top-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-blue-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="bg-blue-500 text-white font-medium"
              sideOffset={5}
            >
              Input Connection
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Output connection handle  */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Handle
                type="source"
                position={Position.Right}
                id="output"
                className="!absolute !right-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 !w-3 !h-3 !bg-blue-500 !border-2 !border-white !shadow-md hover:!w-4 hover:!h-4 transition-all duration-200"
              />
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-blue-500 text-white font-medium"
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