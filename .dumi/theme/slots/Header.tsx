import React, { useCallback } from "react";
import '../style/header.scss'
import useLocale from '../hooks/useLocale';
import Navbar from './Navbar';
import { Link, useLocation } from "dumi";
import * as utils from '../utils';
import Button from '../../../components/button/button'
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
export default function Header() {
  const [locale] = useLocale(locales);
  const { pathname, search } = useLocation();

  const onLangChange = useCallback(() => {
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.slice(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search).pathname,
      );
  }, [location]);

  return (
    <div className="doc-header">
      <div className="logo">
        <img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg" alt="" />
      </div>
      <Navbar></Navbar>
      <Button onClick={onLangChange}>12</Button>
    </div>
  )
}