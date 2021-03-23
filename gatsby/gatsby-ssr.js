import React from 'react';
import Layout from './src/components/Layout';
import OrderProvider from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// wrap the root element in the order provider
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
