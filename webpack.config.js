const path = require('path');

// Webpack Stuff
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    assets: path.resolve(__dirname, 'src', 'assets'),
    fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
    images: path.resolve(__dirname, 'src', 'assets', 'images'),
				dist: path.resolve(__dirname, 'dist'),
				distjs: path.resolve(__dirname, 'dist','js'),
};

/**
 * Configuração do file-loader.
 * A configuração dos módulos do tipo imagem e fonte é a mesma.
 * TODO Verificar se é possível aglutinar em uma só regra.
 */
const fileLoader = {
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',

        // Mantém a estrutura de diretórios (mas excluindo-se o 'src')
        outputPath(filename, absoluteFilePath, absoluteRootPath) {
            const relativePath = path.relative(absoluteRootPath, absoluteFilePath);

            const outPath = relativePath.split('/');

            // Remove a primeira parte do path, ou seja, 'src'
            outPath.shift();

            return outPath.join('/');
        }
    }
};

module.exports = function(env, argv) {
    const config = {
        entry: {
            'dsgov-base': path.resolve(paths.src+"/scss", 'dsgov-base.scss'),
            // 'dsgov-components': [	
            //     // path.resolve(paths.src, 'dsgov-components.js'),
            //     // path.resolve(paths.src, 'dsgov-components.scss')
            // ],
        },
								watch: argv.mode === 'production' ? false : true,
        output: {
            filename: argv.mode === 'production' ? './js/[name].min.js' : './js/[name].js',
            path: paths.dist
        },

        module: {
            rules: [{
																					test: /\.scss$/,
																					use: ["style-loader", "css-loader", "sass-loader"]
																			},{
																				test: /\.s[ac]ss$/i,
																				
																				
                    use: [
                        // MiniCssExtractPlugin.loader,
                        // {
                        //     loader: 'css-loader',
                        //     options: {
																								// 								url: false,
                        //         sourceMap: true
                        //     }
																								// },
																								
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
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
                    // Usamos este include para remover ambiguidade entre
                    // svg's (imagem vs fonte)
                    include: [paths.fonts],
                    loader: fileLoader,
                },
                {
                    test: /\.(png|svg|jpg|jpg)$/,
                    // Usamos este include para remover ambiguidade entre
                    // svg's (imagem vs fonte)
                    include: [paths.images],
                    loader: fileLoader,
                }
            ]
        },

        plugins: [
												// new CleanWebpackPlugin(),
												new ConcatPlugin({
													uglify: false,
													sourceMap: true,
													name: 'dsgov-components',
													outputPath: 'js/components/',
													fileName: '[name].js',
													filesToConcat: ['./src/js/components/**'],
													attributes: {
																	async: true
													}
												}),
												
            new CopyWebpackPlugin([
                // Copia os fontes SASS no intuito de permitir reconfiguração e recompilação
                // de regras pelo usuário deste pacote
                { context: 'src', from: '**/*.scss'},
																
                // Copia os arquivos de documentação dos componentes
                // { context: 'src', from: '**/*.md' },
                // { context: 'src', from: '**/*.pdf' },
																// { context: 'src', from: '**/*.html' },
																// { context: 'src', from: '**/*.js' },

                // OBS.: Não é necessário copiar assets como imagens e fontes que são
                // utilizados por imports ou pela função url(), pois eles são resolvidos como
                // módulos webpack pelo loader 'css-loader'
            ]),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: argv.mode === 'production' ? '[name].min.css' : '[name].css',
                chunkFilename: argv.mode === 'production' ? '[id].min.css' : '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
        ],
        devtool: 'source-map',
    };

    return config;
}
