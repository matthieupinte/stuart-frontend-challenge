import React from 'react'

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

const Field = ({ type, value, status, onChange }) => {
  const Badge = badges[`${type}_${status}`]

  return (
    <div className="field">
      <Badge />
      <TextInput
        value={value}
        placeholder="Pick up address"
        onChange={v => onChange(type, v)}
      />
    </div>
  )
}

export default ({ disabled, pickup, dropoff, onFieldChange, onCreate }) => (
  <div className="job-box">
    <Field
      type="pickup"
      value={pickup.address}
      status={pickup.status}
      onChange={onFieldChange}
    />
    <Field
      type="dropoff"
      value={dropoff.address}
      status={dropoff.status}
      onChange={onFieldChange}
    />
    <div className="field">
      <Button
        disabled={disabled}
        onClick={onCreate}>
        Create Job
      </Button>
    </div>
  </div>
)
