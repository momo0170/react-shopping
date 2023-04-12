import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const location = useLocation();
  console.log(location);
  return <div>detail</div>;
}
