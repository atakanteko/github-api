import { Typography } from 'antd';

type UserInfoType = {
  userName: string | undefined;
};
function UserInfo({ userName }: UserInfoType) {
  return (
    <div className="user-info">
      <Typography.Title level={3}>
        {userName ?? 'Unknown info'}
      </Typography.Title>
    </div>
  );
}

export default UserInfo;
