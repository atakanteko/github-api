import { Typography } from 'antd';

type UserSocialType = {
  socialImgAddress: string;
  socialInfo: string | undefined;
};
function UserSocial({ socialImgAddress, socialInfo }: UserSocialType) {
  return (
    <div className="user-social">
      <img src={socialImgAddress} alt="user-social" />
      <Typography.Text>{socialInfo}</Typography.Text>
    </div>
  );
}

export default UserSocial;
