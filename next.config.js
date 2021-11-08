module.exports = {
  reactStrictMode: true,
}

const withFonts= require('next-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});
