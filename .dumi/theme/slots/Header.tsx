import { useLocation } from 'dumi';
import React, { useCallback } from 'react';
import Button from '../../../components/button/button';
import '../style/header.scss';
import * as utils from '../utils';
import Navbar from './Navbar';

export default function Header() {
  const { pathname, search } = useLocation();

  const onLangChange = useCallback(() => {
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.slice(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem(
        'locale',
        utils.isZhCN(pathname) ? 'en-US' : 'zh-CN',
      );
    }
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search)
          .pathname,
      );
  }, [location]);

  return (
    <div className="doc-header">
      <div className="logo">
        <img
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
          alt=""
        />
      </div>
      <Navbar />
      <Button onClick={onLangChange}>12</Button>
    </div>
  );
}
