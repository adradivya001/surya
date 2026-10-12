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
    default: "bg-white border border-[#F0D9CB] shadow-sm",
    interactive:
      "bg-white border border-[#F0D9CB] shadow-sm hover:border-[#D98A62] hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
    highlight:
      "bg-white border-2 border-[#C65332] shadow-sm",
    subtle:
      "bg-[#FFF8F2] border border-[#F0D9CB] shadow-none",
    emergency:
      "bg-white border border-[#C65332]/40 shadow-sm ring-1 ring-[#C65332]/20",
    navy:
      "bg-[#252B33] text-white border border-[#3A434E] shadow-sm",
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
    <Component className={`text-lg sm:text-xl font-bold tracking-tight text-[#252B33] ${className}`}>
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-sm text-[#59616B] mt-1.5 leading-relaxed ${className}`}>
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
    <div className={`p-5 sm:p-6 pt-0 border-t border-[#F0D9CB]/60 mt-2 flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Body = CardBody;
Card.Footer = CardFooter;
