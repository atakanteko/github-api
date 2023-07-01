import { Link } from 'react-router-dom';

import { Typography } from 'antd';

type FollowerType = {
  avatarURL: string;
  htmlURL: string;
  login: string;
};

function Follower({ avatarURL, htmlURL, login }: FollowerType) {
  return (
    <div className="follower">
      <div className="img-container">
        <Link to={htmlURL} target="_blank">
          <img src={avatarURL} alt={login} />
          <Typography.Text>{login}</Typography.Text>
        </Link>
      </div>
    </div>
  );
}

export default Follower;
