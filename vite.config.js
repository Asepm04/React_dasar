import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build:{
  //   rollupOptions:{
  //     input:{
  //       index:"index.html",
  //       helloword:"helloword.html",
  //       contact :"contact.html",
  //       counter  : "counter.html"
  //     }
  //   }
  // }

  // server :
  // {
  //   proxy :
  //   {
  //     '/api' :
  //     {
  //       target : 'https://fakestoreapi.com',changeOrigin:true,rewrite:(path) => path.replace(/^\/api/,''),
  //     }
  //   }
  // }
})
