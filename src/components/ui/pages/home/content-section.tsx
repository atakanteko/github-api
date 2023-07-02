import { Grid } from 'antd';

import followersImg from '../../../../assets/images/info-card-followers-img.svg';
import followingImg from '../../../../assets/images/info-card-following-img.svg';
import repoImg from '../../../../assets/images/info-card-repo-img.svg';
import starImg from '../../../../assets/images/info-card-star-img.svg';
import { AntCard } from '../../../ant/data-display/card/ant-card';

type ContentSectionType = {
  publicRepo: number;
  publicGists: number;
  followers: number;
  following: number;
};

function ContentSection({
  publicRepo,
  publicGists,
  followers,
  following,
}: ContentSectionType) {
  const screens = Grid.useBreakpoint();

  return (
    <section className={`home-content-section ${screens.lg ? null : 'h-card'}`}>
      <AntCard
        avatar={repoImg}
        title="Repository"
        description={publicRepo}
        loading={false}
      />
      <AntCard
        avatar={starImg}
        title="Gists"
        description={publicGists}
        loading={false}
      />
      <AntCard
        avatar={followersImg}
        title="Followers"
        description={followers}
        loading={false}
      />
      <AntCard
        avatar={followingImg}
        title="Following"
        description={following}
        loading={false}
      />
    </section>
  );
}

export default ContentSection;
