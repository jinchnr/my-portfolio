import React from 'react'
import { getData } from '../../lib/utils/general'

import './index.scss'

const ProfilePanel = () => {
  const personalData =  getData('personalProfile')
  console.log(personalData, 888);
  return (
    <div className="profile-panel">
      
    </div>
  )
}

export default ProfilePanel