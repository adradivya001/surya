import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  disabled = false,
  type = "button",
  onClick,
  href,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E94B1C] disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer transform-gpu hover:-translate-y-0.5 active:translate-y-0 active:scale-97";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-full gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-full gap-2",
    lg: "px-7 py-3.5 text-base rounded-full gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#E94B1C] hover:bg-[#A83218] text-white shadow-sm hover:shadow-md focus:ring-[#E94B1C]",
    terracotta:
      "bg-[#E94B1C] hover:bg-[#A83218] text-white shadow-sm hover:shadow-md focus:ring-[#E94B1C]",
    navy:
      "bg-[#C63D1B] hover:bg-[#A83218] text-white shadow-sm hover:shadow-md focus:ring-[#C63D1B]",
    accent:
      "bg-[#F26A21] hover:bg-[#C63D1B] text-white shadow-sm hover:shadow-md focus:ring-[#F26A21]",
    emergency:
      "bg-[#C63D1B] hover:bg-[#A83218] text-white shadow-lg hover:shadow-xl focus:ring-[#C63D1B]",
    secondary:
      "bg-white border border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] hover:border-[#E94B1C] shadow-xs focus:ring-[#E94B1C]",
    outline:
      "border border-[#E9D8CE] bg-transparent text-[#C63D1B] hover:bg-[#FFF0E6] hover:border-[#E94B1C] focus:ring-[#E94B1C]",
    ghost:
      "text-[#C63D1B] hover:bg-[#FFF0E6] hover:text-[#A83218] focus:ring-[#E94B1C]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
export default Button;
