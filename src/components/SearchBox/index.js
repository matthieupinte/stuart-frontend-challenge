import React from 'react'

import Button from '../Button'
import TextInput from '../TextInput'
import { ReactComponent as PickUpBadgeBlank } from '../../assets/pickUpBadgeBlank.svg'
import { ReactComponent as DropOffBadgeBlank } from '../../assets/dropOffBadgeBlank.svg'

import './styles.css'

export default () => (
  <div class="search-box">
    <div class="field">
      <PickUpBadgeBlank style={{ verticalAlign: 'center'}} />
      <TextInput placeholder="Pick up address" />
    </div>
    <div class="field">
      <DropOffBadgeBlank />
      <TextInput placeholder="Drop off address" />
    </div>
    <div class="field">
      <Button disabled={true}>Create Job</Button>
    </div>
  </div>
)
