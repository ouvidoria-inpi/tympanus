const imagemin = require("imagemin-keep-folder");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const chalk = require("chalk");
const log = console.log;

(async () => {
  const files = await imagemin(["docs/**/*.{jpg,png}", "src/**/*.{jpg,png}"], {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.95, 1],
        speed: 1,
      }),
    ],
  });
  log(chalk.green("Imagens comprimidas com sucesso!"));
})();
