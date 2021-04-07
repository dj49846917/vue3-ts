import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import auction from './auction';

export function setupProdMockServer() {
  createProdMockServer([...auction]);
}