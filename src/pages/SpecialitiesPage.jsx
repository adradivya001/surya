import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Directly redirects any top-level /specialities or /departments route
 * to the dedicated department detail page (/specialities/cardiology).
 * This eliminates the separate cards browsing screen entirely.
 */
export function SpecialitiesPage() {
  return <Navigate to="/specialities/cardiology" replace />;
}

export default SpecialitiesPage;

