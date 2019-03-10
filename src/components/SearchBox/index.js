import { isEmpty } from 'lodash'
import { geocode } from '../../api'

import React, { Component } from 'react'

import Button from '../Button'
import TextInput from '../TextInput'
import { ReactComponent as PickUpBadgeBlank } from '../../assets/pickUpBadgeBlank.svg'
import { ReactComponent as PickUpBadgeError } from '../../assets/pickUpBadgeError.svg'
import { ReactComponent as PickUpBadgePresent } from '../../assets/pickUpBadgePresent.svg'
import { ReactComponent as DropOffBadgeBlank } from '../../assets/dropOffBadgeBlank.svg'
import { ReactComponent as DropOffBadgeError } from '../../assets/dropOffBadgeError.svg'
import { ReactComponent as DropOffBadgePresent } from '../../assets/dropOffBadgePresent.svg'

import './styles.css'

const badges = {
  'pickup_blank': PickUpBadgeBlank,
  'pickup_error': PickUpBadgeError,
  'pickup_present': PickUpBadgePresent,
  'dropoff_blank': DropOffBadgeBlank,
  'dropoff_error': DropOffBadgeError,
  'dropoff_present': DropOffBadgePresent,
}

class Field extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'blank',
    }
  }

  onChange(value) {
    const { type, onPresent, onError } = this.props

    if (isEmpty(value)) return this.setState({ status: 'blank' })

    geocode({ address: value })
      .then((res) => this.setState({ status: 'present' }, () => onPresent(type, res)))
      .catch(err => this.setState({ status: 'error' }, () => onError(type)))
  }

  render() {
    const { type } = this.props
    const { status } = this.state
    const Badge = badges[`${type}_${status}`]

    return (
      <div className="field">
        <Badge />
        <TextInput
          placeholder="Pick up address"
          onChange={v => this.onChange(v)}
        />
      </div>
    )
  }
}

export default class extends Component {
  render() {
    const { canCreateJob, onPresent, onError } = this.props

    return (
      <div className="search-box">
        <Field type="pickup" onPresent={onPresent} onError={onError} />
        <Field type="dropoff" onPresent={onPresent} onError={onError} />
        <div className="field">
          <Button disabled={!canCreateJob}>Create Job</Button>
        </div>
      </div>
    )
  }
}
