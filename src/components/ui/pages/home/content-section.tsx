import { useState } from 'react';

import { Grid } from 'antd';

import followersImg from '../../../../assets/images/info-card-followers-img.svg';
import followingImg from '../../../../assets/images/info-card-following-img.svg';
import repoImg from '../../../../assets/images/info-card-repo-img.svg';
import starImg from '../../../../assets/images/info-card-star-img.svg';
import userModel from '../../../../model/user-model.json';
import { AntCard } from '../../../ant/data-display/card/ant-card';

function ContentSection() {
  const [user, setUser] = useState(userModel);
  const screens = Grid.useBreakpoint();

  return (
    <section className={`home-content-section ${screens.lg ? null : 'h-card'}`}>
      <AntCard
        avatar={repoImg}
        title="Repository"
        description={user.public_repos}
        loading={false}
      />
      <AntCard
        avatar={starImg}
        title="Gists"
        description={user.public_gists}
        loading={false}
      />
      <AntCard
        avatar={followersImg}
        title="Followers"
        description={user.followers}
        loading={false}
      />
      <AntCard
        avatar={followingImg}
        title="Following"
        description={user.following}
        loading={false}
      />
    </section>
  );
}

export default ContentSection;
