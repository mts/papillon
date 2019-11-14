import React from 'react'
import ReactDOM from 'react-dom'
import { Avatar, CircleBadge, CircleBadgeDashedConnection, CircleBadgeIcon, CircleBadgeImage } from 'papillon-avatars'
// import { Avatar, CircleBadge, CircleBadgeDashedConnection, CircleBadgeIcon, CircleBadgeImage } from '../../build/papillon-avatars'

const srcAvatar = 'https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'

ReactDOM.render(
  <div>
    <h3 className="pl-4">Default</h3>
    <div className="p-4">
      <Avatar alt="basic" src={srcAvatar} width={72} height={72} />
    </div>

    <h3 className="pl-4">Small</h3>
    <div className="p-4">
      <Avatar className="avatar-small" alt="small" src={srcAvatar} width={32} height={32} />
    </div>

    <h3 className="pl-4">ParentChild</h3>
    <div className="p-4">
      <div className="avatar-parent-child float-left">
        <Avatar alt="parent" src={srcAvatar} width={48} height={48} />
        <Avatar className="avatar-child" alt="child" src={srcAvatar} width={20} height={20} />
      </div>
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
