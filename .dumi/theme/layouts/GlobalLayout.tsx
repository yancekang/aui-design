import { useOutlet } from 'dumi';
import React from 'react';

export default function GlobalLayout() {
  const outlet = useOutlet();

  return <div>{outlet}</div>;
}
