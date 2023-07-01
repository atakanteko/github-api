import { Avatar, Card, Skeleton } from 'antd';

import FollowesImg from '../../../../assets/images/info-card-followers-img.svg';

type InformationCardType = {
  avatar: string;
  title: string;
  description: number;
  loading: boolean;
};

export function AntCard({
  avatar,
  title,
  description,
  loading,
}: InformationCardType) {
  return (
    <Card className="antd-card" size="small" loading={loading}>
      <Card.Meta
        avatar={<Avatar src={avatar} />}
        title={title}
        description={description}
      />
    </Card>
  );
}
