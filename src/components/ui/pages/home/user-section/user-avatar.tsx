import React from 'react';

type UserAvatarType = {
  userAvatarAddress: string;
};
function UserAvatar({ userAvatarAddress }: UserAvatarType) {
  return (
    <div className="user-img-container">
      <img src={userAvatarAddress} alt="user-img" />
    </div>
  );
}

export default UserAvatar;
