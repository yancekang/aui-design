import React from "react";
import { createSearchParams, useOutlet, useSearchParams, useServerInsertedHTML } from 'dumi';

export default function GlobalLayout() {
  const outlet = useOutlet();

  return (
    <div>{outlet}</div>
  )
}