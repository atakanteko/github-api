import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

function ApplicationLayout() {
  return (
    <Layout className="app-layout">
      <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        Header
      </Layout.Header>
      <Layout.Content style={{ padding: '10px 50px' }}>
        <div className="app-layout-content">
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default ApplicationLayout;
