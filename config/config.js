// https://umijs.org/config/
import os from 'os';
import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      targets: {
        ie: 11,
      },
      locale: {
        enable: true, // default false
        default: 'zh-CN', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
      },
      pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
        },
      },
      ...(!process.env.TEST && os.platform() === 'darwin'
        ? {
          dll: {
            include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
            exclude: ['@babel/runtime'],
          },
          hardSource: true,
        }
        : {}),
    },
  ],
];

// 针对 preview.pro.ant.design 的 GA 统计代码
// 业务上不需要这个
if (process.env.APP_TYPE === 'site') {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
}

export default {
  // add for transfer to umi
  plugins,
  targets: {
    ie: 11,
  },
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // 路由配置
  routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': '#7659ff',
    'info-color': '#7659ff',
    'success-color': '#00d977',
    'processing-color': '#7659ff',
    'error-color': '#ff386a',
    'highlight-color': '#ff386a',
    'warning-color': '#ffcb17',
    'normal-color': '#d9d9d9',
    'primary-1': 'color(~`colorPalette("@{primary-color}", 1)`)',
    'primary-2': 'color(~`colorPalette("@{primary-color}", 2)`)',
    'primary-3': 'color(~`colorPalette("@{primary-color}", 3)`)',
    'primary-4': 'color(~`colorPalette("@{primary-color}", 4)`)',
    'primary-5': 'color(~`colorPalette("@{primary-color}", 5)`)',
    'primary-6': '@primary-color',
    'primary-7': 'color(~`colorPalette("@{primary-color}", 7)`)',
    'primary-8': 'color(~`colorPalette("@{primary-color}", 8)`)',
    'primary-9': 'color(~`colorPalette("@{primary-color}", 9)`)',
    'primary-10': 'color(~`colorPalette("@{primary-color}", 10)`)',
    'body-background': '#3d3780',
    'component-background': '#3d3780',
    'font-family': '"Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    'code-family': '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    'heading-color': 'fade(#FFF, 85%)',
    'text-color': 'fade(#FFF, 65%)',
    'text-color-secondary': 'fade(#FFF, 45%)',
    'heading-color-dark': 'fade(#fff, 100%)',
    'text-color-dark': 'fade(#fff, 85%)',
    'text-color-secondary-dark': 'fade(#fff, 65%)',
    'font-variant-base': 'tabular-nums',
    'font-size-base': '14px',
    'font-size-lg': '@font-size-base + 2px',
    'font-size-sm': '12px',
    'line-height-base': '1.5',
    'border-radius-base': '4px',
    'border-radius-sm': '2px',
    'padding-lg': '24px',
    'padding-md': '16px',
    'padding-sm': '12px',
    'padding-xs': '8px',
    'control-padding-horizontal': '@padding-sm',
    'control-padding-horizontal-sm': '@padding-xs',
    'item-active-bg': '@primary-1',
    'item-hover-bg': '@primary-1',
    'iconfont-css-prefix': 'anticon',
    'link-color': '@primary-color',
    'link-hover-color': 'color(~`colorPalette("@{link-color}", 5)`)',
    'link-active-color': 'color(~`colorPalette("@{link-color}", 7)`)',
    'link-decoration': 'none',
    'link-hover-decoration': 'none',
    'ease-base-out': 'cubic-bezier(0.7, 0.3, 0.1, 1)',
    'ease-base-in': 'cubic-bezier(0.9, 0, 0.3, 0.7)',
    'ease-out': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    'ease-in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    'ease-in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    'ease-out-back': 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    'ease-in-back': 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    'ease-in-out-back': 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
    'ease-out-circ': 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    'ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    'ease-in-out-circ': 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    'ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
    'border-color-base': '#342e73',
    'border-color-split': '#342e73',
    'border-width-base': '1px',
    'border-style-base': 'solid',
    'outline-blur-size': '0',
    'outline-width': '2px',
    'outline-color': '@primary-color',
    'background-color-light': 'hsv(0, 0, 98%)',
    'background-color-base': 'hsv(0, 0, 96%)',
    'disabled-color': 'fade(#FFF, 25%)',
    'disabled-bg': '@background-color-base',
    'disabled-color-dark': 'fade(#fff, 35%)',
    'shadow-color': 'rgba(0, 0, 0, .15)',
    'box-shadow-base': '@shadow-1-down',
    'shadow-1-up': '0 -2px 8px @shadow-color',
    'shadow-1-down': '0 2px 8px @shadow-color',
    'shadow-1-left': '-2px 0 8px @shadow-color',
    'shadow-1-right': '2px 0 8px @shadow-color',
    'shadow-2': '0 4px 12px @shadow-color',
    'btn-font-weight': '400',
    'btn-border-radius-base': '@border-radius-base',
    'btn-border-radius-sm': '@border-radius-base',
    'btn-primary-color': '#fff',
    'btn-primary-bg': '@primary-color',
    'btn-default-color': '@text-color',
    'btn-default-bg': '#fff',
    'btn-default-border': '@border-color-base',
    'btn-danger-color': '@error-color',
    'btn-danger-bg': '@background-color-base',
    'btn-danger-border': '@border-color-base',
    'btn-disable-color': '@disabled-color',
    'btn-disable-bg': '@disabled-bg',
    'btn-disable-border': '@border-color-base',
    'btn-padding-base': '0 @padding-md - 1px',
    'btn-font-size-lg': '@font-size-lg',
    'btn-font-size-sm': '@font-size-base',
    'btn-padding-lg': '@btn-padding-base',
    'btn-padding-sm': '0 @padding-xs - 1px',
    'btn-height-base': '32px',
    'btn-height-lg': '40px',
    'btn-height-sm': '24px',
    'btn-circle-size': '@btn-height-base',
    'btn-circle-size-lg': '@btn-height-lg',
    'btn-circle-size-sm': '@btn-height-sm',
    'btn-group-border': '@primary-5',
    'checkbox-size': '16px',
    'checkbox-color': '@primary-color',
    'checkbox-check-color': '#fff',
    'checkbox-border-width': '@border-width-base',
    'radio-size': '16px',
    'radio-dot-color': '@primary-color',
    'radio-button-bg': '@btn-default-bg',
    'radio-button-color': '@btn-default-color',
    'radio-button-hover-color': '@primary-5',
    'radio-button-active-color': '@primary-7',
    'screen-xs': '480px',
    'screen-xs-min': '@screen-xs',
    'screen-sm': '576px',
    'screen-sm-min': '@screen-sm',
    'screen-md': '768px',
    'screen-md-min': '@screen-md',
    'screen-lg': '992px',
    'screen-lg-min': '@screen-lg',
    'screen-xl': '1200px',
    'screen-xl-min': '@screen-xl',
    'screen-xxl': '1600px',
    'screen-xxl-min': '@screen-xxl',
    'screen-xs-max': '(@screen-sm-min - 1px)',
    'screen-sm-max': '(@screen-md-min - 1px)',
    'screen-md-max': '(@screen-lg-min - 1px)',
    'screen-lg-max': '(@screen-xl-min - 1px)',
    'screen-xl-max': '(@screen-xxl-min - 1px)',
    'grid-columns': '24',
    'grid-gutter-width': '0',
    'layout-body-background': '#2f296b',
    'layout-header-background': '#3d3780',
    'layout-footer-background': '@layout-body-background',
    'layout-header-height': '64px',
    'layout-header-padding': '0 50px',
    'layout-footer-padding': '24px 50px',
    'layout-sider-background': '@layout-header-background',
    'layout-trigger-height': '48px',
    'layout-trigger-background': '#002140',
    'layout-trigger-color': '#fff',
    'layout-zero-trigger-width': '36px',
    'layout-zero-trigger-height': '42px',
    'layout-sider-background-light': '#3d3780',
    'layout-trigger-background-light': '#3d3780',
    'layout-trigger-color-light': '@text-color',
    'zindex-affix': '10',
    'zindex-back-top': '10',
    'zindex-modal-mask': '1000',
    'zindex-modal': '1000',
    'zindex-notification': '1010',
    'zindex-message': '1010',
    'zindex-popover': '1030',
    'zindex-picker': '1050',
    'zindex-dropdown': '1050',
    'zindex-tooltip': '1060',
    'animation-duration-slow': '.3s',
    'animation-duration-base': '.2s',
    'animation-duration-fast': '.1s',
    'label-required-color': '@highlight-color',
    'label-color': '@heading-color',
    'form-item-margin-bottom': '24px',
    'form-item-trailing-colon': 'true',
    'form-vertical-label-padding': '0 0 8px',
    'form-vertical-label-margin': '0',
    'input-height-base': '32px',
    'input-height-lg': '40px',
    'input-height-sm': '24px',
    'input-padding-horizontal': '@control-padding-horizontal - 1px',
    'input-padding-horizontal-base': '@input-padding-horizontal',
    'input-padding-horizontal-sm': '@control-padding-horizontal-sm - 1px',
    'input-padding-horizontal-lg': '@input-padding-horizontal',
    'input-padding-vertical-base': '4px',
    'input-padding-vertical-sm': '1px',
    'input-padding-vertical-lg': '6px',
    'input-placeholder-color': 'hsv(0, 0, 75%)',
    'input-color': '@text-color',
    'input-border-color': '@border-color-base',
    'input-bg': '#37317a',
    'input-addon-bg': '@background-color-light',
    'input-hover-border-color': '@primary-color',
    'input-disabled-bg': '@disabled-bg',
    'input-outline-offset': '0 0',
    'tooltip-max-width': '250px',
    'tooltip-color': '#fff',
    'tooltip-bg': 'rgba(0, 0, 0, .75)',
    'tooltip-arrow-width': '5px',
    'tooltip-distance': '@tooltip-arrow-width - 1px + 4px',
    'tooltip-arrow-color': '@tooltip-bg',
    'popover-bg': '#fff',
    'popover-color': '@text-color',
    'popover-min-width': '177px',
    'popover-arrow-width': '6px',
    'popover-arrow-color': '@popover-bg',
    'popover-arrow-outer-color': '@popover-bg',
    'popover-distance': '@popover-arrow-width + 4px',
    'modal-header-bg': '@component-background',
    'modal-mask-bg': 'rgba(0, 0, 0, 0.65)',
    'progress-default-color': '@processing-color',
    'progress-remaining-color': '@background-color-base',
    'progress-text-color': '@text-color',
    'menu-inline-toplevel-item-height': '40px',
    'menu-item-height': '40px',
    'menu-collapsed-width': '80px',
    'menu-bg': '@component-background',
    'menu-popup-bg': '@component-background',
    'menu-item-color': '@text-color',
    'menu-highlight-color': '@primary-color',
    'menu-item-active-bg': '@item-active-bg',
    'menu-item-active-border-width': '3px',
    'menu-item-group-title-color': '@text-color-secondary',
    'menu-dark-color': '@text-color-secondary-dark',
    'menu-dark-bg': '@layout-header-background',
    'menu-dark-arrow-color': '#fff',
    'menu-dark-submenu-bg': '#000c17',
    'menu-dark-highlight-color': '#fff',
    'menu-dark-item-active-bg': '@primary-color',
    'spin-dot-size-sm': '14px',
    'spin-dot-size': '20px',
    'spin-dot-size-lg': '32px',
    'table-header-bg': '@background-color-light',
    'table-header-color': '@heading-color',
    'table-header-sort-bg': '@background-color-base',
    'table-body-sort-bg': 'rgba(0, 0, 0, .01)',
    'table-row-hover-bg': '@primary-1',
    'table-selected-row-bg': '#fafafa',
    'table-expanded-row-bg': '#fbfbfb',
    'table-padding-vertical': '16px',
    'table-padding-horizontal': '16px',
    'tag-default-bg': '@background-color-light',
    'tag-default-color': '@text-color',
    'tag-font-size': '@font-size-sm',
    'time-picker-panel-column-width': '56px',
    'time-picker-panel-width': '@time-picker-panel-column-width * 3',
    'time-picker-selected-bg': '@background-color-base',
    'carousel-dot-width': '16px',
    'carousel-dot-height': '3px',
    'carousel-dot-active-width': '24px',
    'badge-height': '20px',
    'badge-dot-size': '6px',
    'badge-font-size': '@font-size-sm',
    'badge-font-weight': 'normal',
    'badge-status-size': '6px',
    'rate-star-color': '#ffcb17',
    'rate-star-bg': '@border-color-split',
    'card-head-color': '@heading-color',
    'card-head-background': 'transparent',
    'card-head-padding': '16px',
    'card-inner-head-padding': '12px',
    'card-padding-base': '24px',
    'card-padding-wider': '32px',
    'card-actions-background': '@background-color-light',
    'card-shadow': '0 2px 8px rgba(0, 0, 0, .09)',
    'comment-padding-base': '16px 0',
    'comment-nest-indent': '44px',
    'comment-author-name-color': '@text-color-secondary',
    'comment-author-time-color': '#ccc',
    'comment-action-color': '@text-color-secondary',
    'comment-action-hover-color': '#595959',
    'tabs-card-head-background': '@background-color-light',
    'tabs-card-height': '40px',
    'tabs-card-active-color': '@primary-color',
    'tabs-title-font-size': '@font-size-base',
    'tabs-title-font-size-lg': '@font-size-lg',
    'tabs-title-font-size-sm': '@font-size-base',
    'tabs-ink-bar-color': '@primary-color',
    'tabs-bar-margin': '0 0 16px 0',
    'tabs-horizontal-margin': '0 32px 0 0',
    'tabs-horizontal-padding': '12px 16px',
    'tabs-vertical-padding': '8px 24px',
    'tabs-vertical-margin': '0 0 16px 0',
    'tabs-scrolling-size': '32px',
    'tabs-highlight-color': '@primary-color',
    'tabs-hover-color': '@primary-5',
    'tabs-active-color': '@primary-7',
    'back-top-color': '#fff',
    'back-top-bg': '@text-color-secondary',
    'back-top-hover-bg': '@text-color',
    'avatar-size-base': '32px',
    'avatar-size-lg': '40px',
    'avatar-size-sm': '24px',
    'avatar-font-size-base': '18px',
    'avatar-font-size-lg': '24px',
    'avatar-font-size-sm': '14px',
    'avatar-bg': '#ccc',
    'avatar-color': '#fff',
    'avatar-border-radius': '@border-radius-base',
    'switch-height': '22px',
    'switch-sm-height': '16px',
    'switch-sm-checked-margin-left': '-(@switch-sm-height - 3px)',
    'switch-disabled-opacity': '0.4',
    'switch-color': '@primary-color',
    'pagination-item-size': '32px',
    'pagination-item-size-sm': '24px',
    'pagination-font-family': 'Arial',
    'pagination-font-weight-active': '500',
    'breadcrumb-base-color': '@text-color-secondary',
    'breadcrumb-last-item-color': '@text-color',
    'breadcrumb-font-size': '@font-size-base',
    'breadcrumb-icon-font-size': '@font-size-base',
    'breadcrumb-link-color': '@text-color-secondary',
    'breadcrumb-link-color-hover': '@primary-5',
    'breadcrumb-separator-color': '@text-color-secondary',
    'breadcrumb-separator-margin': '0 @padding-xs',
    'slider-margin': '14px 6px 10px',
    'slider-rail-background-color': '@background-color-base',
    'slider-rail-background-color-hover': '#e1e1e1',
    'slider-track-background-color': '@primary-3',
    'slider-track-background-color-hover': '@primary-4',
    'slider-handle-color': '@primary-3',
    'slider-handle-color-hover': '@primary-4',
    'slider-handle-color-focus': 'tint(@primary-color, 20%)',
    'slider-handle-color-focus-shadow': 'tint(@primary-color, 50%)',
    'slider-handle-color-tooltip-open': '@primary-color',
    'slider-dot-border-color': '@border-color-split',
    'slider-dot-border-color-active': 'tint(@primary-color, 50%)',
    'slider-disabled-color': '@disabled-color',
    'slider-disabled-background-color': '@component-background',
    'tree-title-height': '24px',
    'tree-child-padding': '18px',
    'tree-directory-selected-color': '#fff',
    'tree-directory-selected-bg': '@primary-color',
    'collapse-header-padding': '12px 0 12px 40px',
    'collapse-header-bg': '@background-color-light',
    'collapse-content-padding': '@padding-md',
    'collapse-content-bg': '@component-background',
    'skeleton-color': '#f2f2f2',
    'transfer-disabled-bg': '@disabled-bg',
    'message-notice-content-padding': '10px 16px',
    'wave-animation-width': '6px',
    'alert-success-border-color': '~`colorPalette("@{success-color}", 3)`',
    'alert-success-bg-color': '~`colorPalette("@{success-color}", 1)`',
    'alert-success-icon-color': '@success-color',
    'alert-info-border-color': '~`colorPalette("@{info-color}", 3)`',
    'alert-info-bg-color': '~`colorPalette("@{info-color}", 1)`',
    'alert-info-icon-color': '@info-color',
    'alert-warning-border-color': '~`colorPalette("@{warning-color}", 3)`',
    'alert-warning-bg-color': '~`colorPalette("@{warning-color}", 1)`',
    'alert-warning-icon-color': '@warning-color',
    'alert-error-border-color': '~`colorPalette("@{error-color}", 3)`',
    'alert-error-bg-color': '~`colorPalette("@{error-color}", 1)`',
    'alert-error-icon-color': '@error-color',
    'list-empty-text-padding': '@padding-md',
    'list-item-padding': '@padding-sm 0',
    'list-item-content-margin': '0 0 @padding-md 0',
    'list-item-meta-margin-bottom': '@padding-md',
    'list-item-meta-avatar-margin-right': '@padding-md',
    'list-item-meta-title-margin-bottom': '@padding-sm',
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = antdProPath
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },

  chainWebpack: webpackPlugin,
};
