const imagemin = require('imagemin-keep-folder')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

;(async () => {
  const files = await imagemin(['**/*.{jpg,png}'], {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.95, 1],
        speed: 1,
      }),
    ],
  })
  console.info('Imagens comprimidas com sucesso!')
})()
