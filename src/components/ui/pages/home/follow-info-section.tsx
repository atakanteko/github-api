import { Card, Typography } from 'antd';

import Follower from './follow-info-section/follower';
import FollowersModel from '../../../../model/followers-model.json';
import { useGetGithubUserFollowersQuery } from '../../../../services/user-api';

function FollowerInfoSection() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetGithubUserFollowersQuery();
  return (
    <section className="home-follower-section">
      <Card size="small" className="follower-card">
        <Typography.Title level={4}>
          Followers ({FollowersModel.length})
        </Typography.Title>
        <div className="followers">
          {data?.map((follower) => {
            const {
              id,
              avatar_url: avatarURL,
              html_url: htmlURL,
              login,
            } = follower;
            return (
              <Follower
                key={id}
                avatarURL={avatarURL}
                htmlURL={htmlURL}
                login={login}
              />
            );
          })}
        </div>
      </Card>
    </section>
  );
}

export default FollowerInfoSection;
