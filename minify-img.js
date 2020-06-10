// const imagemin = require("imagemin");
const imagemin = require('imagemin-keep-folder')
const imageminPngquant = require('imagemin-pngquant')
const imageminJpegtran = require('imagemin-jpegtran')

;(async () => {
  const files = await imagemin(['**/*.{jpg,png}'], {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.3, 0.5],
      }),
    ],
  })

  console.info('Imagens comprimidas com sucesso!')
})()
