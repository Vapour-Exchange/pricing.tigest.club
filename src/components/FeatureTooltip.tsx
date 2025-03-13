import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface FeatureTooltipProps {
  description: string;
}

export function FeatureTooltip({ description }: FeatureTooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex cursor-help">
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" align="start" className="max-w-xs bg-gray-800 text-white border-gray-700">
          <p className="text-sm">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
