import { Link, useLocation } from 'dumi';
import React from 'react';
import useLocale from '../hooks/useLocale';
import '../style/header.scss';
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
export default function Navbar() {
  const { search } = useLocation();
  const [locale, lang] = useLocale(locales);
  const isZhCN = lang === 'cn';
  return (
    <div className="nav-bar">
      <Link
        to={utils.getLocalizedPathname('/docs/spec/introduce', isZhCN, search)}
      >
        {locale.design}
      </Link>
      <Link
        to={utils.getLocalizedPathname(
          '/docs/spec/development',
          isZhCN,
          search,
        )}
      >
        {locale.development}
      </Link>
      <Link
        to={utils.getLocalizedPathname('/components/overview', isZhCN, search)}
      >
        {locale.components}
      </Link>
      <Link to={utils.getLocalizedPathname('/docs/resources', isZhCN, search)}>
        {locale.resources}
      </Link>
    </div>
  );
}
