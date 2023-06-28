import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';

import App from './App';
import { store } from './store/store';
import './styles/less/app.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Provider>
);
