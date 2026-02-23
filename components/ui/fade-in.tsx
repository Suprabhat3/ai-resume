"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we don't need to observe it anymore if we only want it to animate once.
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-8";
      case "down":
        return "-translate-y-8";
      case "left":
        return "translate-x-8";
      case "right":
        return "-translate-x-8";
      case "none":
        return "";
      default:
        return "translate-y-8";
    }
  };

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${getDirectionClasses()}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
