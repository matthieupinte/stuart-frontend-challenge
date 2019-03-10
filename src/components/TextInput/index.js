import { debounce } from 'lodash'

import React, { Component } from 'react'

import './styles.css'

export default class extends Component {
  onChange = debounce((e) => {
    const value = e.target.value
    this.props.onChange(value)
  }, 500)

  render() {
    return (
      <input {...this.props} onChange={(e) => { e.persist(); this.onChange(e) }} type="text" />
    )
  }
}
