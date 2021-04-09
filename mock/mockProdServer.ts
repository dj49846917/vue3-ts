import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import auction from './auction';
import user from './login';
import common from './common';
import personal from './personal';

export function setupProdMockServer() {
  createProdMockServer([...auction, ...user, ...common, ...personal]);
}