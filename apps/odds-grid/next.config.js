const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// const { dependencies } = require('../../package.json');

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
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'odds_grid',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {
          './OddsGridPage': './pages/index.tsx',
          './OddsGrid': './components/OddsGrid/index.ts',
        },
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
