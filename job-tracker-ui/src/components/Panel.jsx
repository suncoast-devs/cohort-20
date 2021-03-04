import React from 'react'

export function Panel({ title, headerAction, children }) {
  return (
    <div className="panel">
      <header>
        <h2>{title}</h2>
        {headerAction}
      </header>
      <ul>{children}</ul>
    </div>
  )
}
