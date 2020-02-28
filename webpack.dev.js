const path = require( 'path' );
const isDEV = process.env.NODE_ENV === 'development'
// console.log( '***AMBIENTE de DEVELOPMENT*** ------' )

// Webpack Stuff
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );

// We need Nodes fs module to read directory contents
const fs = require( 'fs' )

const paths = {
  src: path.resolve( __dirname, 'src' ),
  assets: path.resolve( __dirname, 'src', 'assets' ),
  fonts: path.resolve( __dirname, 'src', 'assets', 'fonts' ),
  images: path.resolve( __dirname, 'src', 'assets', 'images' ),
  dist: path.resolve( __dirname, 'dist' ),
  distjs: path.resolve( __dirname, 'dist', 'js' ),
};

// Our function that generates our html plugins
function generateHtmlPlugins ( templateDir, dirName ) {
  // Read files in template directory
  const templateFiles = fs.readdirSync( path.resolve( __dirname, templateDir ) )
  return templateFiles.map( item => {
    // Split names and extension
    const parts = item.split( '.' )
    const name = parts[ 0 ]
    const extension = parts[ 1 ]
    // Create new HTMLWebpackPlugin with options
    return new HTMLWebpackPlugin( {
      filename: `${ dirName }/${ name }.html`,
      template: path.resolve( __dirname, `${ templateDir }/${ name }.${ extension }` ),
      templateParameters: {
        version: JSON.stringify( require( "./package.json" ).version ).replace( /\"/gi, "" ),
        cdnUrl: '../'
      },
      inject: false,
    } )
  } )
}

// Call our function on our views directory.
const htmlPluginsComponentes = generateHtmlPlugins( './src/pug/views/components', 'pug/components' )
const htmlPluginsTemplates = generateHtmlPlugins( './src/pug/views/templates', 'pug/templates' )

const fileLoader = {
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',

    // Mantém a estrutura de diretórios (mas excluindo-se o 'src')
    outputPath ( filename, absoluteFilePath, absoluteRootPath ) {
      const relativePath = path.relative( absoluteRootPath, absoluteFilePath );

      const outPath = relativePath.split( '/' );

      // Remove a primeira parte do path, ou seja, 'src'
      outPath.shift();

      return outPath.join( '/' );
    }
  }
};

module.exports = {
  mode: "development",
  entry: {
    'dsgov': [
      path.resolve( paths.src + "/scss", 'dsgov.scss' ),
      path.resolve( paths.src + "/js/", 'index.js' )
    ]
  },
  watch: true,
  output: {
    filename: './js/[name].js',
    path: paths.dist
  },
  devServer: {
    contentBase: path.join( __dirname, 'dist' ),
    stats: 'errors-only',
    clientLogLevel: 'error',
    port: 9000,
    open: false,
    hot: true,
    inline: true,
    progress: true,
    profile: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        loader: [
          isDEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                includePaths: [
                  'node_modules'
                ],
                outputStyle: 'expanded'
              }
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        include: [ paths.fonts ],
        loader: fileLoader,
      },
      {
        test: /\.(png|svg|jpg|jpg)$/,
        include: [ paths.images ],
        loader: fileLoader,
      },
      {
        // Include pug-loader to process the pug files
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          query: {
            pretty: true,
            root: path.resolve( __dirname, 'src/views' ),
          }
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [ "@babel/preset-env" ]
        }
      },
    ]
  },
  resolve: {
    extensions: [ ".js", ".scss" ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // Extract our css to a separate css file
    new MiniCssExtractPlugin( {
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    } ),
  ].concat( htmlPluginsComponentes, htmlPluginsTemplates ),
  devtool: 'source-map'
}
