import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import Router from './routes/routes';
import { customToken } from './theme/config';

function App() {
  return (
    <ConfigProvider theme={customToken}>
      <Router />
    </ConfigProvider>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
