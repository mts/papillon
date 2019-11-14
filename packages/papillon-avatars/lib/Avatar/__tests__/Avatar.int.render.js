import React from 'react'

const Avatar =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Avatar').Avatar
    : require('../../../build/papillon-avatars').Avatar

const srcAvatar = 'https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'

export const avatar = <Avatar alt="basic" src={srcAvatar} width={72} height={72} />

export const avatarSmall = <Avatar className="avatar-small" alt="small" src={srcAvatar} width={32} height={32} />

export const avatarParentChild = (
  <div className="avatar-parent-child float-left">
    <Avatar alt="parent" src={srcAvatar} width={48} height={48} />
    <Avatar className="avatar-child" alt="child" src={srcAvatar} width={20} height={20} />
  </div>
)

export const avatarStackMore = (
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
)

export const avatarStackThreePlus = (
  <div className="AvatarStack AvatarStack--three-plus">
    <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
    </div>
  </div>
)

const href = 'https://github.com/mts/papillon/tree/master/packages/papillon-avatars/Avatar'

export const avatarStackTwo = (
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
)

export const avatarStackRight = (
  <div className="AvatarStack AvatarStack--three-plus AvatarStack--right">
    <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
    </div>
  </div>
)
