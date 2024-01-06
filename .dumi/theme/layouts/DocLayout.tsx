import classNames from 'classnames';
import { Helmet, useOutlet, useSiteData } from 'dumi';
import React, { useEffect, useRef } from 'react';
import Header from '../slots/Header';
import SideMenu from '../slots/SideMenu';
import '../style/common.scss';

const DocLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname, search, hash } = location;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { loading } = useSiteData();
  const lang = 'cn';
  const direction = 'rtl';
  useEffect(() => {
    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      timerRef.current = setTimeout(() => {
        nprogressHiddenStyle.parentNode?.removeChild(nprogressHiddenStyle);
      }, 0);
    }
  }, []);

  // handle hash change or visit page hash from Link component, and jump after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) document.getElementById(decodeURIComponent(id))?.scrollIntoView();
  }, [loading, hash]);

  useEffect(() => {
    if (typeof (window as any).ga !== 'undefined') {
      (window as any).ga('send', 'pageview', pathname + search);
    }
  }, [location]);

  // const content = useMemo(() => {
  //   if (
  //     ['', '/'].some((path) => path === pathname) ||
  //     ['/index'].some((path) => pathname.startsWith(path))
  //   ) {
  //     return (
  //       <IndexLayout title={locale.title} desc={locale.description}>
  //         {outlet}
  //       </IndexLayout>
  //     );
  //   }
  //   if (pathname.startsWith('/docs/resource')) {
  //     return <ResourceLayout>{outlet}</ResourceLayout>;
  //   }
  //   if (pathname.startsWith('/theme-editor')) {
  //     return outlet;
  //   }
  //   return <SidebarLayout>{outlet}</SidebarLayout>;
  // }, [pathname, outlet]);

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html
          lang={lang === 'cn' ? 'zh-CN' : lang}
          data-direction={direction}
          className={classNames(
            { rtl: direction === 'rtl' },
            { 'doc-html': true },
          )}
        />
        <link
          sizes="144x144"
          href="https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"
        />
        {/* <meta property="og:description" content={locale.description} /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
        />
      </Helmet>
      <Header />
      <div className="doc-container">
        <SideMenu />
        <div>{outlet}</div>
      </div>
    </>
  );
};

export default DocLayout;
