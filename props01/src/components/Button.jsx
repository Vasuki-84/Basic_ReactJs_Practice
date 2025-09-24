import React from 'react'

function Button({label, clickfunction}) {
  return (
    <button onClick={clickfunction}>{label}</button>
  )
}

export default Button