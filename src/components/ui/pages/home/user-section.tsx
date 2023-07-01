import { useState } from 'react';

import { Card, Divider } from 'antd';

import UserAvatar from './user-section/user-avatar';
import UserInfo from './user-section/user-info';
import UserSocial from './user-section/user-social';
import UserLocationImg from '../../../../assets/images/user-social-location.svg';
import UserOrganizationImg from '../../../../assets/images/user-social-organization.svg';
import UserTwitterImg from '../../../../assets/images/user-social-twitter.svg';
import userModel from '../../../../model/user-model.json';

function UserSection() {
  const [user, setUser] = useState(userModel);
  return (
    <section className="home-user-section">
      <Card>
        <UserAvatar userAvatarAddress={user.avatar_url} />
        <Divider />
        <UserInfo userName={user.login} />
        <Divider />
        <UserSocial
          socialImgAddress={UserOrganizationImg}
          socialInfo={user.company}
        />
        <UserSocial
          socialImgAddress={UserLocationImg}
          socialInfo={user.location}
        />
        <UserSocial
          socialImgAddress={UserTwitterImg}
          socialInfo={user.twitter_username}
        />
      </Card>
    </section>
  );
}

export default UserSection;
