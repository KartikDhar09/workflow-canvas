import React from "react";

export const DraggableNode = ({ type, label, icon: Icon }) => {
  const onDragStart = (event, nodeType) => {
    // Prepare the data to be transferred during drag
    const appData = { nodeType };

    // Set the drag data
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    // Set the drag effect to 'move'
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      className="
                flex items-center justify-center gap-2   
                px-4 py-2                                 
                bg-gradient-to-br from-purple-600 to-indigo-600  
                text-white                               
                rounded-xl                               
                shadow-lg                               
                border border-purple-500/50             
                cursor-grab                           
                transition-all                           
                duration-300                             
                hover:shadow-xl                          
                active:cursor-grabbing                   
                select-none                             
              "
    >
      {Icon && <Icon className="w-5 h-5 text-white/80" />}
      <span className="text-sm font-medium tracking-tight">{label}</span>
    </div>
  );
};
