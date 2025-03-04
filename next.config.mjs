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

      // Modify the CSS rule to use MiniCssExtractPlugin.loader
      const cssRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test('.css')
      );
      
      if (cssRule) {
        cssRule.use = [
          MiniCssExtractPlugin.loader,
          ...cssRule.use.filter((loader) => 
            typeof loader === 'object' && !loader.loader?.includes('style-loader')
          ),
        ];
      }
    }
    
    return config;
  },
};

export default nextConfig; 