import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.jsx'
import { CourseProvider } from './context/CourseContext.jsx'
// import { CourseIdProvider } from './context/CourseIdContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseProvider>
      {/* <CourseIdProvider> */}
        <App />
      {/* </CourseIdProvider> */}
    </CourseProvider>
  </StrictMode>,
)
