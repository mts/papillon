import React from 'react'
import ReactDOM from 'react-dom'
import { Avatar, CircleBadge, CircleBadgeDashedConnection, CircleBadgeIcon, CircleBadgeImage } from 'papillon-avatars'
// import { Avatar, CircleBadge, CircleBadgeDashedConnection, CircleBadgeIcon, CircleBadgeImage } from '../../build/papillon-avatars'

const srcAvatar = 'https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'
const href = 'https://github.com/mts/papillon/tree/master/packages/papillon-avatars/Avatar'
const srcCircleBadge = 'https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'

ReactDOM.render(
  <div>
    <div className="d-flex flex-justify-around">
      <div className="col-6">
        <h3 className="pl-4">Avatar</h3>
        <div className="p-4">
          <Avatar alt="basic" src={srcAvatar} width={72} height={72} />
        </div>

        <h3 className="pl-4">AvatarSmall</h3>
        <div className="p-4">
          <Avatar className="avatar-small" alt="small" src={srcAvatar} width={32} height={32} />
        </div>

        <h3 className="pl-4">AvatarParentChild</h3>
        <div className="p-4">
          <div className="avatar-parent-child d-inline-flex">
            <Avatar alt="parent" src={srcAvatar} width={48} height={48} />
            <Avatar className="avatar-child" alt="child" src={srcAvatar} width={20} height={20} />
          </div>
        </div>

        <h3 className="pl-4">AvatarStackMore</h3>
        <div className="p-4">
          <div className="AvatarStack AvatarStack--three-plus">
            <div
              className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
              aria-label="octocat, octocat, octocat, octocat, and octocat"
            >
              <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
              <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
              <div className="avatar avatar-more" />
              <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
              <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
              <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
            </div>
          </div>
        </div>

        <h3 className="pl-4">AvatarStackThreePlus</h3>
        <div className="p-4">
          <div className="AvatarStack AvatarStack--three-plus">
            <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
              <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
              <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
              <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
            </div>
          </div>
        </div>

        <h3 className="pl-4">AvatarStackTwo</h3>
        <div className="p-4">
          <div className="AvatarStack AvatarStack--two">
            <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
              <a href={href} className="avatar">
                <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
              </a>
              <a href={href} className="avatar">
                <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        <h3 className="pl-4">AvatarStackRight</h3>
        <div className="p-4">
          <div className="AvatarStack AvatarStack--three-plus AvatarStack--right">
            <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
              <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
              <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
              <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <h3 className="pl-4">CircleBadgeIcon small</h3>
        <div className="p-4">
          <CircleBadge size="small" className="bg-yellow" title="Zap this!" href="#small">
            <CircleBadgeIcon className="text-white" icon="zap" />
          </CircleBadge>
        </div>

        <h3 className="pl-4">CircleBadgeIcon medium</h3>
        <div className="p-4">
          <CircleBadge size="medium" className="bg-gray-dark" title="Zap this!" href="#medium">
            <CircleBadgeIcon className="text-white" icon="zap" />
          </CircleBadge>
        </div>

        <h3 className="pl-4">CircleBadgeIcon large</h3>
        <div className="p-4">
          <CircleBadge size="large" className="bg-gray-dark" title="Zap this!" href="#large">
            <CircleBadgeIcon className="text-white" icon="zap" />
          </CircleBadge>
        </div>

        <h3 className="pl-4">CircleBadgeImage small</h3>
        <div className="p-4">
          <CircleBadge size="small" className="d-inline-flex mr-2" title="Travis CI" href="#small">
            <CircleBadgeImage src={srcCircleBadge} alt="" />
          </CircleBadge>
        </div>

        <h3 className="pl-4">CircleBadgeImage medium</h3>
        <div className="p-4">
          <CircleBadge size="medium" className="d-inline-flex mr-2" title="Travis CI" href="#medium">
            <CircleBadgeImage src={srcCircleBadge} alt="" />
          </CircleBadge>
        </div>

        <h3 className="pl-4">CircleBadgeImage large</h3>
        <div className="p-4">
          <CircleBadge size="large" className="d-inline-flex mr-2" title="Travis CI" href="#large">
            <CircleBadgeImage src={srcCircleBadge} alt="" />
          </CircleBadge>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
