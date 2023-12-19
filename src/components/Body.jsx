import React from 'react'

import "./body.css";

function Body({ children }) {
  return (
    <div className="body-container">{children}</div>
  )
}

export default Body;