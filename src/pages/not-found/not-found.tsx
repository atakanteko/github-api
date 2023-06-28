import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { Typography } from 'antd';

import NotFoundSvg from '../../assets/images/not-found.svg';

const { Title } = Typography;

function NotFound() {
  return (
    <section className="app-not-found">
      <ReactSVG src={NotFoundSvg} />
      <Title level={3}>The page you were looking for doesn’t exist.</Title>
      <Link to="/" className="not-found-btn">
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;
