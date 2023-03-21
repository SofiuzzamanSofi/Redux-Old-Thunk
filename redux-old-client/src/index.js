import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import AuthProvider from './activity/contex/AuthProvider/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import route from './activity/routes/Routes';
import { Provider } from 'react-redux';
import store from './activity/redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <React.StrictMode> */}
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </AuthProvider>
    {/* </React.StrictMode> */}
  </div>
);

reportWebVitals();
