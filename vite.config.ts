import { resolve } from 'path'
import { UserConfigExport, ConfigEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, "src") //设置别名
      }
    },
    base: './',
    server: {
      host: 'localhost',
      port: 8080,
      open: true,
    },
  };
};

