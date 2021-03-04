import React from 'react'
import { Icon } from '../Icon'

export function Notification({ title, detail, done }) {
  return (
    <div className="notification">
      <div className="content">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
      <div className="toggle">
        <a href="#toggle">
          {done ? <Icon name="check" /> : <Icon name="circle" style="far" />}
        </a>
      </div>
    </div>
  )
}
