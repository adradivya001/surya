import React, { useRef, useEffect, useState, Children, cloneElement } from "react";
import "./ScrollStack.css";

export function ScrollStackItem({
  children,
  className = "",
  style = {},
  ...props
}) {
  return (
    <div
      className={`scroll-stack-item ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

export function ScrollStack({
  children,
  className = "",
  itemDistance = 24,
  scaleStep = 0.035,
  topOffset = 96,
  style = {},
}) {
  const containerRef = useRef(null);
  const items = Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container ${className}`}
      style={style}
    >
      {items.map((child, index) => {
        // Sticky offset progressively adds a small layer gap for each card in the stack
        const stickyTop = topOffset + index * itemDistance;
        return (
          <div
            key={index}
            className="scroll-stack-wrapper"
            style={{
              position: "sticky",
              top: `${stickyTop}px`,
              zIndex: index + 1,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export default ScrollStack;
