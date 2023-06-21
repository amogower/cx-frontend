const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// const { dependencies } = require('../../package.json');

const SUBEVENT_HEADER_APP_URL =
  process.env.NEXT_PUBLIC_SUBEVENT_HEADER_APP_URL || 'http://localhost:3001';

const ODDS_GRID_APP_URL =
  process.env.NEXT_PUBLIC_ODDS_GRID_APP_URL || 'http://localhost:3002';

const FOOTER_APP_URL =
  process.env.NEXT_PUBLIC_FOOTER_APP_URL || 'http://localhost:3003';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    'footer': `footer@${FOOTER_APP_URL}/_next/static/${location}/remoteEntry.js`,
    'odds-grid': `odds_grid@${ODDS_GRID_APP_URL}/_next/static/${location}/remoteEntry.js`,
    'subevent-header': `subevent_header@${SUBEVENT_HEADER_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: {
      ssr: true,
    },
  },

  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {},
        shared: {
          '@tanstack/react-query': {
            requiredVersion: false,
            singleton: true,
          },
          '@tanstack/query-core': {
            requiredVersion: false,
            singleton: true,
          },
          // 'react': {
          //   eager: true,
          //   requiredVersion: false,
          //   singleton: true,
          // },
          // 'react-dom': {
          //   eager: true,
          //   requiredVersion: false,
          //   singleton: true,
          // },
          'styled-components': {
            eager: true,
            // requiredVersion: dependencies['styled-components'],
            requiredVersion: '5.3.10',
            singleton: true,
          },
        },
      }),
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
