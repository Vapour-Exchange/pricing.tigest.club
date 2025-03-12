
import React from 'react';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FeatureTooltipProps {
  description: string;
}

export const FeatureTooltip: React.FC<FeatureTooltipProps> = ({ description }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center ml-1 cursor-help">
            <Info className="h-4 w-4 text-gray-400" />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
