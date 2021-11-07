module.exports = {
  reactStrictMode: true,
}

const withFonts= require('next-fonts');
module.exports = withFonts({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|ttf)$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  }
});
