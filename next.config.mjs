import withVideos  from 'next-videos';


/** @type {import('next').NextConfig} */
const nextConfig = {
  ...withVideos(),
};

export default nextConfig;

export const webpack = (config) => {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|mp4)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'static',
          publicPath: '/_next/static',
        },
      },
    ],
  });

  return config;
};

