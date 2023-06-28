import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider, theme } from 'antd';

import Router from './routes/routes';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
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
