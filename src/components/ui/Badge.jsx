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
    default: "bg-[#FFF8F2] text-[#252B33] border border-[#F0D9CB]",
    teal: "bg-[#FCECE2] text-[#C65332] border border-[#F0D9CB]",
    navy: "bg-[#252B33] text-white border border-[#3A434E]",
    emergency: "bg-[#FCECE2] text-[#C65332] border border-[#F0D9CB]",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    outline: "bg-transparent text-[#59616B] border border-[#F0D9CB]",
  };

  const dotColor = {
    default: "bg-[#D98A62]",
    teal: "bg-[#C65332]",
    navy: "bg-white",
    emergency: "bg-[#C65332] animate-pulse",
    success: "bg-emerald-500",
    outline: "bg-[#D98A62]",
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
