import React from "react";

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  const variantStyles = {
    default: "bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]",
    teal: "bg-[#FFF0E6] text-[#E94B1C] border border-[#FF8A3D]/40",
    navy: "bg-[#E94B1C] text-white border border-[#E94B1C]",
    emergency: "bg-[#FFF0E6] text-[#C63D1B] border border-[#C63D1B]/30",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    outline: "bg-transparent text-[#756860] border border-[#E9D8CE]",
  };

  const dotColor = {
    default: "bg-[#E94B1C]",
    teal: "bg-[#FF8A3D]",
    navy: "bg-white",
    emergency: "bg-[#C63D1B] animate-pulse",
    success: "bg-emerald-500",
    outline: "bg-[#E94B1C]",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.default
      } ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            dotColor[variant] || dotColor.default
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
