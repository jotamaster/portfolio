import type { ComponentPropsWithoutRef } from "react";

import { CONTAINER_CLASS } from "@/lib/constants";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn(CONTAINER_CLASS, className)} {...props} />;
}
