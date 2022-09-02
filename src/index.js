import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ConfigProvider } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import App from './App'
import Layout from 'antd/es/layout/layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
const mdTheme = createTheme()
root.render(
  <React.StrictMode>
    <ConfigProvider locale={locale}>
      <ThemeProvider theme={mdTheme}>
        <Layout style={{ minHeight: '100vh' }}>
          <App />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
