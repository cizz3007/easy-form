/** @types {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  webpack: (config) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        name: '[hash:base64:8].[ext]',
        publicPath: '/images/',
        outputPath: './images/'
      }
    });

    // const es = new ESLintPlugin({
    //   extensions: ['js', 'jsx', 'ts', 'tsx'],
    //   fix: true
    // });
    // config.plugins.push(es);

    return config;
  }
};

module.exports = nextConfig;
