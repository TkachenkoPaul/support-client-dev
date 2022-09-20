import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ConfigProvider, Layout } from 'antd'
import locale from 'antd/es/locale/ru_RU'
import 'moment/locale/ru'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persist } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/common/Loading'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persist} liading={<Loading />}>
        <ConfigProvider locale={locale}>
          <Layout style={{ minHeight: '100vh' }}>
            <App />
          </Layout>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
