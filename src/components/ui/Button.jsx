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
    "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E56A2E] disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer transform-gpu hover:-translate-y-0.5 active:translate-y-0 active:scale-97";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-sm hover:shadow-md hover:shadow-[#E56A2E]/25 focus:ring-[#E56A2E]",
    terracotta:
      "bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-sm hover:shadow-md hover:shadow-[#E56A2E]/25 focus:ring-[#E56A2E]",
    navy:
      "bg-[#28171D] hover:bg-[#1E0F14] text-white shadow-sm hover:shadow-md focus:ring-[#28171D]",
    accent:
      "bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-sm hover:shadow-md focus:ring-[#E56A2E]",
    emergency:
      "bg-[#E56A2E] hover:bg-[#C8541D] text-white shadow-lg hover:shadow-xl focus:ring-[#E56A2E]",
    secondary:
      "bg-white border border-[#DED7D7] text-[#29252A] hover:bg-[#FCFAF7] hover:text-[#E56A2E] hover:border-[#E56A2E] shadow-xs focus:ring-[#E56A2E]",
    outline:
      "border border-[#DED7D7] bg-transparent text-[#29252A] hover:bg-[#FCFAF7] hover:text-[#E56A2E] hover:border-[#E56A2E] focus:ring-[#E56A2E]",
    ghost:
      "text-[#29252A] hover:bg-[#E8D8D9]/40 hover:text-[#E56A2E] focus:ring-[#E56A2E]",
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
