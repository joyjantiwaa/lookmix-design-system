import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // เพิ่มการนำเข้า BrowserRouter
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* BrowserRouter ทำหน้าที่เป็น Context Provider ให้กับคอมโพเนนต์ <Link> 
      ทำให้ Header, Footer และ TabBar ที่คุณเรียกใช้สามารถทำงานได้โดยไม่ Error
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)