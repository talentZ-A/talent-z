import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Only run this on the client side in production
    if (!isServer && !dev) {
      // Add the mini-css-extract-plugin
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        })
      );

      // Find and modify the CSS rule
      const cssRules = config.module.rules.find(
        (rule) => typeof rule.oneOf === 'object'
      )?.oneOf?.filter(
        (rule) => Array.isArray(rule.use) && 
        rule.use.some(use => use.loader?.includes('css-loader'))
      ) ?? [];

      cssRules.forEach(rule => {
        if (Array.isArray(rule.use)) {
          rule.use = [
            MiniCssExtractPlugin.loader,
            ...rule.use.filter(loader => 
              typeof loader === 'object' && 
              !loader.loader?.includes('style-loader')
            ),
          ];
        }
      });
    }
    
    return config;
  },
};

export default nextConfig; 