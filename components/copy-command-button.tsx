"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

interface CopyCommandButtonProps {
  component: any;
  style: string;
}

const packageManagers = [
  { name: "npm", command: "npx" },
  { name: "yarn", command: "npx" },
  { name: "pnpm", command: "pnpm dlx" },
  { name: "bun", command: "bunx --bun" },
];

export function CopyCommandButton({
  component,
  style,
}: CopyCommandButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyCommand = (packageManager: string) => {
    const commandUrl = `${window.location.origin}/r/styles/${style}/${component.name}.json`;
    const command = `${packageManager} shadcn-ui@latest add ${commandUrl}`;
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" title="Copy install command">
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {packageManagers.map((pm) => (
          <DropdownMenuItem
            key={pm.name}
            onSelect={() => copyCommand(pm.command)}
          >
            {pm.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
