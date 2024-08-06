import { ClassValue, clsx as cx } from "clsx";
import { twMerge as tw } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return tw(cx(inputs));
}
