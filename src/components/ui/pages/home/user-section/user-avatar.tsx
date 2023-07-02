import React from 'react';

type UserAvatarType = {
  userAvatarAddress: string | undefined;
};
function UserAvatar({ userAvatarAddress }: UserAvatarType) {
  return (
    <div className="user-img-container">
      <img src={userAvatarAddress} alt="user-img" />
    </div>
  );
}

export default UserAvatar;
