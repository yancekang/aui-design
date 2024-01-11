import { Link, useLocale, useSidebarData } from 'dumi';
import React from 'react';
import * as utils from '../utils';
const locales = {
  cn: {
    design: '设计',
    development: '研发',
    components: '组件',
    resources: '资源',
    blog: '博客',
  },
  en: {
    design: 'Design',
    development: 'Development',
    components: 'Components',
    resources: 'Resources',
    blog: 'Blog',
  },
};
export default function SideMenu() {
  const sidebar = useSidebarData();
  const lang = useLocale();
  const isZhCN = lang.id === 'cn';
  return (
    <div className="doc-sidebar">
      <ul>
        <li>
          <Link
            to={utils.getLocalizedPathname(
              'changelog-cn',
              isZhCN,
            )}
          >
            更新日志
          </Link>
        </li>
      </ul>
      {sidebar &&
        sidebar.map((sidebarItem: any, index: any) => (
          <ul key={index}>
            {(() => {
              if (sidebarItem.children) {
                return (
                  <React.Fragment key={index}>
                    {sidebarItem.title ? (
                      <span>{sidebarItem.title}</span>
                    ) : null}
                    {sidebarItem.children.map((sideNav: any, key: number) => (
                      <li key={key}>
                        <Link
                          to={utils.getLocalizedPathname(
                            sideNav.link,
                            isZhCN,
                          )}
                        >
                          {sideNav.title}{' '}
                          <b>{sideNav.frontmatter.subtitle}</b>
                        </Link>
                      </li>
                    ))}
                  </React.Fragment>
                );
              }
            })()}
          </ul>
        ))}
    </div>
  );
}
