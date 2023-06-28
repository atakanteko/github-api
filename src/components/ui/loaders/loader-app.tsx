import { Spin } from 'antd';

function ApplicationLoader(): JSX.Element {
  return (
    <div className="application-loader">
      <Spin size="large" />
    </div>
  );
}

export default ApplicationLoader;
