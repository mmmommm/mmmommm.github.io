module.exports = {
  reactStrictMode: true,
}

const withFonts= require('next-fonts');
module.exports = withFonts({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|woff)$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  }
});
