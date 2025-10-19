"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string;
  height?: string;
  count?: number;
}

export function Skeleton({
  className = "",
  variant = "rectangular",
  width,
  height,
  count = 1,
}: SkeletonProps) {
  const baseStyles = "bg-gray-200 dark:bg-gray-700 animate-pulse";
  
  const variants = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-3xl",
  };

  const style = {
    width: width || "100%",
    height: height || (variant === "text" ? "1rem" : "100%"),
  };

  const skeletonElement = (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={style}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 1,
      }}
    />
  );

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i}>{skeletonElement}</div>
        ))}
      </div>
    );
  }

  return skeletonElement;
}

// Pre-built skeleton components
export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md p-6 space-y-4">
      <Skeleton variant="rectangular" height="200px" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="90%" count={2} />
    </div>
  );
}

export function TeamMemberSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden">
      <Skeleton variant="rectangular" height="256px" />
      <div className="p-4 space-y-2">
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="50%" />
      </div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-3">
          <Skeleton variant="text" width="60%" height="40px" />
          <Skeleton variant="text" width="80%" />
        </div>
      ))}
    </div>
  );
}
