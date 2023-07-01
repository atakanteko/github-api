import { Card, Typography } from 'antd';

import Follower from './follow-info-section/follower';
import FollowersModel from '../../../../model/followers-model.json';

function FollowerInfoSection() {
  return (
    <section className="home-follower-section">
      <Card size="small" className="follower-card">
        <Typography.Title level={4}>
          Followers ({FollowersModel.length})
        </Typography.Title>
        <div className="followers">
          {FollowersModel.map((follower) => {
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
