"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { BlurFade } from "@/components/animations/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CopyEmailProps {
  email: string;
  className?: string;
}

export function CopyEmail({ email, className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            // Only apply hover effects when not in copied state
            className={copied ? "text-muted-foreground cursor-default" : className}
            aria-label={copied ? "Email copied" : "Copy email address"}
          >
            <BlurFade animationKey={copied ? "check" : "mail"}>
              {copied ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <Mail className="h-5 w-5" />
              )}
            </BlurFade>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy Email</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

