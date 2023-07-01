import { Typography } from 'antd';

type UserInfoType = {
  userName: string;
};
function UserInfo({ userName }: UserInfoType) {
  return (
    <div className="user-info">
      <Typography.Title level={3}>{userName}</Typography.Title>
    </div>
  );
}

export default UserInfo;
