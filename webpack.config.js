const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');



module.exports = (env = {}) => {
  console.log(env);

  const {mode = 'development'} = env;

  const isProd = mode == 'production';
  const isDev = mode == 'development';

  const getStyleLoader = () => {
    return isProd ? 
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
          sourceMap: true,
        }
      } : {
        loader: 'style-loader',
      }
  }

  return { 
    mode: isProd ? 'production' : isDev && 'development',
    devtool: 'inline-source-map',
    entry: {
          index: './src/js/main.js',
    },
    output: {
      filename: 'js/main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new SVGSpritemapPlugin('src/images/svgsprite/**/*.svg', {
          output: {
              filename: 'images/svgsprite.svg',
              svg: {
                  // Disable `width` and `height` attributes on the root SVG element
                  // as these will skew the sprites when using the <view> via fragment identifiers
                  sizes: false
              }
          },
          sprite: {
              prefix: false,
              generate: {
                  // Generate <use> tags within the spritemap as the <view> tag will use this
                  use: true,

                  // Generate <view> tags within the svg to use in css via fragment identifier url
                  // and add -fragment suffix for the identifier to prevent naming colissions with the symbol identifier
                  view: '-fragment',

                  // Generate <symbol> tags within the SVG to use in HTML via <use> tag
                  symbol: true
              },
          },
          styles: {
              // Specifiy that we want to use URLs with fragment identifiers in a styles file as well
              format: 'fragment',

              // Path to the styles file, note that this method uses the `output.publicPath` webpack option
              // to generate the path/URL to the spritemap itself so you might have to look into that
              filename: path.join(__dirname, 'src/sass/_sprites.scss')
          }
      }),
      new MiniCssExtractPlugin(
        {
          filename: isDev ? 'css/main.css' : 'css/main.css',
        }
      ),
      new ManifestPlugin(),
      new CleanWebpackPlugin({ 
        cleanStaleWebpackAssets: false 
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: false,
        hash: true
      }), // Generates default index.html
    ],
    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    module: {
      rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                      ],
                      plugins: ['@babel/plugin-transform-runtime', "@babel/plugin-proposal-class-properties"]
                    }
                  }
                },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  getStyleLoader(),
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: 'resolve-url-loader',
                  },
                  {
                      loader: 'postcss-loader',
                      options: {
                          sourceMap: true
                      }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images',
                    },
                  },
                ],
              },
              {
                  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                  use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                      },
                    },
                  ],
              },
      ],
    },

  };  
};