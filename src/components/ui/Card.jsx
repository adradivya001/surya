import React from "react";

export function Card({
  children,
  variant = "default",
  className = "",
  as: Component = "div",
  ...props
}) {
  const baseStyles = "rounded-card transition-all duration-200 overflow-hidden";

  const variantStyles = {
    default: "bg-white border border-[#E9D8CE] shadow-xs",
    interactive:
      "bg-white border border-[#E9D8CE] shadow-xs hover:border-[#E94B1C] hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
    highlight:
      "bg-white border-2 border-[#E94B1C] shadow-xs",
    subtle:
      "bg-[#FFF0E6] border border-[#E9D8CE] shadow-none",
    emergency:
      "bg-white border border-[#C63D1B]/40 shadow-xs ring-1 ring-[#C63D1B]/20",
    navy:
      "bg-white border border-[#E9D8CE] shadow-xs",
  };

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`p-5 sm:p-6 pb-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, as: Component = "h3", className = "" }) {
  return (
    <Component className={`text-lg sm:text-xl font-bold tracking-tight text-[#292D32] ${className}`}>
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-sm text-[#62666D] mt-1.5 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function CardBody({ children, className = "" }) {
  return (
    <div className={`p-5 sm:p-6 pt-3 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-5 sm:p-6 pt-0 border-t border-[#E9D7C7]/80 mt-2 flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Body = CardBody;
Card.Footer = CardFooter;
