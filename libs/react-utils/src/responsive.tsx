import { ComponentType } from 'react';
import { Context as ResponsiveContext } from 'react-responsive';

export interface Breakpoints {
  desktop: number;
  desktopLg: number;
  desktopMd: number;
  phoneLg: number;
  phoneSm: number;
  tablet: number;
}

export const breakpoints: Breakpoints = {
  phoneSm: 320,
  phoneLg: 600,
  tablet: 768,
  desktop: 1024,
  desktopMd: 1200,
  desktopLg: 1360,
};

export interface Media {
  l: 1024;
  m: 981;
  s: 737;
  xl: 1281;
  xs: 376;
  xxl: 1361;
}

export const media: Media = {
  l: 1024,
  m: 981,
  s: 737,
  xl: 1281,
  xs: 376,
  xxl: 1361,
};


export const isDesktopQuery = {
  query: `(min-width: ${breakpoints.desktop}px)`,
};

// query created to exclude ipad pro
export const isJustDesktopQuery = {
  query: `(min-width: ${breakpoints.desktop + 1}px)`,
};

export const isTabletQuery = {
  query: `(min-width: ${breakpoints.tablet}px) and (max-width: ${
    breakpoints.desktop - 1
  }px)`,
};

export const isTabletOrDesktopQuery = {
  query: `(min-width: ${breakpoints.tablet}px)`,
};

export const isTabletOrMobileQuery = {
  query: `(max-width: ${breakpoints.desktop - 1}px)`,
};

export const isMobileQuery = {
  query: `(max-width: ${breakpoints.phoneLg - 1}px)`,
};

export interface ResponsiveProps {
  deviceType: 'DESKTOP' | 'MOBILE' | 'TABLET';
}

export function withMediaQueries<T = Record<string, unknown>>(
  Component: ComponentType<ResponsiveProps & T>
): (props: ResponsiveProps & T) => JSX.Element {
  const ResponsiveComponent = (props: ResponsiveProps & T) => {
    // If on client, don't bother passing device width via context
    if (typeof window !== 'undefined') {
      return <Component {...props} />;
    }

    const { deviceType } = props;

    const deviceWidth =
      deviceType === 'MOBILE'
        ? breakpoints.phoneSm
        : deviceType === 'TABLET'
        ? breakpoints.tablet
        : breakpoints.desktop;

    return (
      <ResponsiveContext.Provider value={{ width: deviceWidth }}>
        <Component {...props} />
      </ResponsiveContext.Provider>
    );
  };

  return ResponsiveComponent;
}
