import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "~/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex transform items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors ring-0 outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-violet-800 text-primary-foreground hover:bg-violet-700",
        destructive:
          "bg-rose-600 text-destructive-foreground hover:bg-rose-500",
        outline:
          "border border-neutral-900 bg-neutral-950 hover:bg-neutral-900 hover:text-accent-foreground",
        secondary:
          "bg-neutral-900 text-secondary-foreground hover:bg-neutral-800",
        ghost: "hover:bg-neutral-900 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
