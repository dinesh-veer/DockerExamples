import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Commented below code as we are not handling cors issue on client side 
  //but it will be taken care in backend/server side 
  // server: {
  //   proxy: {
  //     '/api':{
  //       target: 'http://localhost:4000',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
