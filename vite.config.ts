import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000,
    // host: '0.0.0.0', // ใช้ '0.0.0.0' เพื่อให้เปิดใช้งานการเข้าถึงจาก Network
  },
})
