import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 text-sm font-black transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-b from-white/40 to-white/10",
          "shadow-liquid dark:shadow-liquid-dark",
          "text-white",
          "hover:scale-[1.05] hover:shadow-liquid-hover dark:hover:shadow-liquid-dark-hover",
          "active:scale-[0.96]",
          "border-t-2 border-l-2 border-white/70 border-r border-b border-white/20",
          "backdrop-blur-3xl",
        ],
        vibrant: [
          "bg-gradient-to-b from-blue-400/60 to-blue-600/30",
          "shadow-liquid dark:shadow-liquid-dark",
          "text-white",
          "hover:scale-[1.05] hover:shadow-blue-500/40 hover:shadow-2xl",
          "active:scale-[0.96]",
          "border-t-2 border-l-2 border-white/60 border-r border-b border-white/10",
          "backdrop-blur-3xl",
        ],
        ghost: [
          "bg-white/5 border border-white/10",
          "hover:bg-white/15 hover:border-white/20",
          "text-white/80 hover:text-white",
          "backdrop-blur-xl",
        ]
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "size-12 p-0",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  render?: React.ReactElement | ((props: any, state: any) => React.ReactElement)
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, render, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        render={render}
        className={cn(glassButtonVariants({ variant, size, className }), "group")}
        {...props}
      >
        {/* Glossy Reflection Highlight */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-80" />

        {/* 3D Inner Shadow for depth */}
        <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
          {props.children}
        </span>

        {/* Bottom subtle glow */}
        <span className="pointer-events-none absolute -bottom-2 left-1/2 h-6 w-3/4 -translate-x-1/2 bg-white/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </ButtonPrimitive>
    )
  }
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }
