import React from 'react';

/**
 * Component to be rendered if specific versions of IE detected, look at root index.js
 */
export default function IEfallback() {
  return (
    <div 
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      data-testid='ie-fallback'
    >
      <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        Browser not supported. Please use modern browser.
      </span>
    </div>
  );
}
