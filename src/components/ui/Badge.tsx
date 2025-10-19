"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info" | "gradient";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  pulse?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  icon,
  pulse = false,
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
    success: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
    warning: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
    error: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
    info: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1.5 rounded-full font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {icon && <span>{icon}</span>}
      {children}
    </motion.span>
  );
}
