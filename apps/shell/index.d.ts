/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'footer/FooterPage' {
  export * from '@footer/pages/index.tsx';
}
declare module 'footer/Footer' {
  export { default } from '@footer/components/Footer';
}

declare module 'odds-grid/OddsGridPage' {
  export * from '@odds-grid/pages/index.tsx';
}
declare module 'odds-grid/OddsGrid' {
  export { default } from '@odds-grid/components/OddsGrid';
}

declare module 'subevent-header/SubeventHeaderPage' {
  export * from '@subevent-header/pages/index.tsx';
}
declare module 'subevent-header/SubeventHeader' {
  export { default } from '@subevent-header/components/SubeventHeader';
}
