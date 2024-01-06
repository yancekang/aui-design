/**
 * title: 我是标题
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import React from "react"
import {Button} from "aui-design"
export default function button() {
  return (
    <>
      <Button data-id="123">Default Button</Button>

      <Button type="primary">Primary Button</Button>
    </>
  )
}