import { defineConfig } from 'dumi';

export default defineConfig({
  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [new RegExp('index/components/')],
  },
  hash: true,
  mfsu: false,
  crossorigin: {},
  outputPath: '_site',
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  alias: {
    // 'aui-design': path.join(__dirname, 'components'),
  },
  metas: [{ name: 'theme-color', content: '#1677ff' }],
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  themeConfig: {
    lastUpdated: true,
  },
});
