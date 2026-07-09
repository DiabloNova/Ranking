import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="group relative w-full">
        {/* Specular Highlight Spans */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/40 to-transparent" />

        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-full border-t-2 border-l-2 border-white/40 border-r border-b border-white/10 bg-gradient-to-b from-white/15 to-white/5 px-6 py-2 text-sm text-white ring-offset-background backdrop-blur-2xl transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]",
            className
          )}
          ref={ref}
          {...props}
        />

        {/* 3D Inner Glow on Hover */}
        <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(255,255,255,0.05)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
      </div>
    )
  }
)
GlassInput.displayName = "GlassInput"

export { GlassInput }
