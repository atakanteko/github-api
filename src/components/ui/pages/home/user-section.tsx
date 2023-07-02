import { useState } from 'react';

import { Card, Divider } from 'antd';

import UserAvatar from './user-section/user-avatar';
import UserInfo from './user-section/user-info';
import UserSocial from './user-section/user-social';
import UserLocationImg from '../../../../assets/images/user-social-location.svg';
import UserOrganizationImg from '../../../../assets/images/user-social-organization.svg';
import UserTwitterImg from '../../../../assets/images/user-social-twitter.svg';

type UserSectionType = {
  avatarURL: string;
  userName: string;
  company: string;
  location: string;
  twitterAddress: string;
};

function UserSection({
  avatarURL,
  userName,
  company,
  location,
  twitterAddress,
}: UserSectionType) {
  return (
    <section className="home-user-section">
      <Card>
        <UserAvatar userAvatarAddress={avatarURL} />
        <Divider />
        <UserInfo userName={userName} />
        <Divider />
        <UserSocial
          socialImgAddress={UserOrganizationImg}
          socialInfo={company}
        />
        <UserSocial socialImgAddress={UserLocationImg} socialInfo={location} />
        <UserSocial
          socialImgAddress={UserTwitterImg}
          socialInfo={twitterAddress}
        />
      </Card>
    </section>
  );
}

export default UserSection;
