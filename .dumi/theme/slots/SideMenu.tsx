import { useFullSidebarData, useSidebarData, Link } from 'dumi';
import React from "react";
import * as utils from '../utils';

export default function SideMenu() {
  const sidebar = useSidebarData();
  const fullData = useFullSidebarData();
  
  return (
    <div className="doc-sidebar">
      {sidebar && sidebar.map((sidebarItem: any, index: any) => {
        return <ul key={index}>
          {(() => {
              if (sidebarItem.children) {
                return <React.Fragment key={index}>
                {sidebarItem.title ? <span>{sidebarItem.title}</span>: null}
                {sidebarItem.children.map((sideNav:any, key:number) => {
                 return <li key={key}>
                  <Link to={utils.getLocalizedPathname(sideNav.link, false)}>{sideNav.title} <b>{sideNav.frontmatter.subtitle}</b></Link>
                 </li>
               })}
                </React.Fragment>
             }
          })()}
        </ul>
      })}
    </div>
  )
}