import React from 'react'

import './styles.css'

export default (props) => (
  <input
    {...props}
    type="text"
    onChange={(e) => { e.persist(); props.onChange(e.target.value) }}
  />
)
