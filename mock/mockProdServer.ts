import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import auction from './auction';
import user from './login';

export function setupProdMockServer() {
  createProdMockServer([...auction, ...user]);
}