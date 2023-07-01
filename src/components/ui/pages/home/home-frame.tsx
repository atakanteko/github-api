import { Grid } from 'antd';

import ContentSection from './content-section';
import FollowerInfoSection from './follow-info-section';
import UserSection from './user-section';

function HomeFrame() {
  const screens = Grid.useBreakpoint();
  return (
    <section className={`home-frame ${screens.md ? null : 'vertical'}`}>
      <UserSection />
      <ContentSection />
      <FollowerInfoSection />
    </section>
  );
}

export default HomeFrame;
