// components/ui/use-toast.js
"use client";

// Adapted from sonner library
import { toast as sonnerToast } from "sonner";

export const useToast = () => {
  const toast = (props) => {
    const { title, description, variant = "default", ...rest } = props;

    return sonnerToast[variant || "default"](title, {
      description,
      ...rest,
    });
  };

  return { toast };
};
