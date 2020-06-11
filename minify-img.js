const imagemin = require('imagemin-keep-folder')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

;(async () => {
  for (let index = 0; index < 600; index++) {
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
  }
})()
