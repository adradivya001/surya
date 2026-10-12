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
    "inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-4.5 py-2.5 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm focus:ring-[#C65332]",
    terracotta:
      "bg-[#C65332] hover:bg-[#A84328] text-white shadow-sm focus:ring-[#C65332]",
    navy:
      "bg-[#252B33] hover:bg-[#1C2229] text-white shadow-sm focus:ring-[#252B33]",
    accent:
      "bg-[#D98A62] hover:bg-[#B96645] text-white shadow-sm focus:ring-[#D98A62]",
    emergency:
      "bg-[#C65332] hover:bg-[#A84328] text-white shadow-emergency focus:ring-[#C65332]",
    secondary:
      "bg-white border border-[#D98A62] text-[#252B33] hover:bg-[#FCECE2] hover:text-[#C65332] shadow-xs focus:ring-[#C65332]",
    outline:
      "border border-[#D98A62] bg-transparent text-[#252B33] hover:bg-[#FCECE2] hover:text-[#C65332] focus:ring-[#C65332]",
    ghost:
      "text-[#252B33] hover:bg-[#FCECE2] hover:text-[#C65332] focus:ring-[#C65332]",
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
