import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, type, ...props},ref ) =>{
        return(
            <input 
          type ={type}
          className={cn ("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus:focus-visible:outline-none focus:focus-visible ring-1 focus-variable",
             className
        )}
        ref={ref}
        {...props}
            />
       

        )
    }
)

   Input.displayName = "Input"
   export {Input}