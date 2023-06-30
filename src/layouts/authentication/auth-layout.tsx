import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

const { Content } = Layout;

function AuthLayout() {
  return (
    <Layout className="auth-layout">
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AuthLayout;
