import { Grid, Spin } from 'antd';

import ContentSection from './content-section';
import FollowerInfoSection from './follow-info-section';
import UserSection from './user-section';
import { useGetGithubUserInfoQuery } from '../../../../services/user-api';

function HomeFrame() {
  const screens = Grid.useBreakpoint();
  const { data, isLoading, isSuccess, isError, error } =
    useGetGithubUserInfoQuery();

  let content;

  if (isLoading) {
    content = (
      <div
        className="spin-container"
        style={{
          width: '100%',
          height: 'calc(100vh - 90px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spin size="large" />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <>
        <UserSection
          avatarURL={data?.avatar_url}
          company={data?.company}
          userName={data?.login}
          location={data?.location}
          twitterAddress={data?.twitter_username}
        />
        <ContentSection
          followers={data?.followers}
          following={data?.following}
          publicGists={data?.public_gists}
          publicRepo={data?.public_repos}
        />
        <FollowerInfoSection />
      </>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }
  return (
    <section className={`home-frame ${screens.md ? null : 'vertical'}`}>
      {content}
    </section>
  );
}

export default HomeFrame;
