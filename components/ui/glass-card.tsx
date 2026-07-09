import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "relative overflow-hidden rounded-3xl transition-all duration-500",
  {
    variants: {
      variant: {
        default: [
          "glass-liquid-dark",
          "hover:scale-[1.01] hover:shadow-liquid-dark-hover",
        ],
        interactive: [
          "glass-liquid-dark",
          "cursor-pointer hover:scale-[1.03] hover:shadow-liquid-dark-hover",
          "active:scale-[0.98]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  withGlow?: boolean
  withHolo?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, withGlow = false, withHolo = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
            glassCardVariants({ variant, className }),
            withHolo && "glass-holographic"
        )}
        {...props}
      >
        {/* Specular highlight overlay for extra glossiness */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40" />

        {/* Subtle inner border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border-t-2 border-l-2 border-white/20 border-r border-b border-white/5" />

        {withGlow && (
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 blur-md" />
        )}

        <div className="relative z-10">{children}</div>

        {/* Interactive light reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard, glassCardVariants }
