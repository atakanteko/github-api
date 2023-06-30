import { Typography, Button } from 'antd';

import LoginImage from '../../assets/images/login-image.svg';

const { Title } = Typography;

function Login() {
  return (
    <section className="login-screen-wrapper">
      <div className="login-image">
        <img src={LoginImage} alt="login img" />
      </div>
      <Title level={2}>Github User</Title>
      <Button type="primary" className="login-button">
        Login
      </Button>
    </section>
  );
}

export default Login;
