/* eslint-disable no-console */
const { exit } = require('process')
const DirArchiver = require('dir-archiver')
const fs = require('fs')
const pjson = require('./package.json')
const semVer = pjson.version
const shell = require('shelljs')
const wget = require('wget-improved')

console.log(`Versão do Design System: ${semVer}`)

buildAssetsSource()
buildAssetsNexus()

function buildAssetsSource() {
  if (fs.existsSync('dist')) {
    shell.exec(
      `echo "version:${pjson.version}"> dist/dsversion${pjson.version}.txt`
    )

    const archivelatest = new DirArchiver(
      'dist',
      'assets/source-code/dsgov-latest.zip',
      []
    )

    const archiveVersion = new DirArchiver(
      'dist',
      `assets/source-code/dsgov-${pjson.version}.zip`,
      []
    )

    archivelatest.createZip()
    archiveVersion.createZip()

    console.log('--------------------------------------------------------')
    console.log('Pasta source-code atualizada')
    console.log('--------------------------------------------------------')
  } else {
    console.log('--------------------------------------------------------')
    console.log(
      'Publicação de npm e criação do npm na pasta assets não foram criados por não encontrar pasta dist'
    )
    console.log('--------------------------------------------------------')
  }
}

function buildAssetsNexus() {
  if (fs.existsSync('dist')) {
    const urlNexus = `https://nexus.aic.serpro.gov.br/repository/npm-private/@govbr/dsgov/-/dsgov-${semVer}.tgz`
    const output = `assets/npm-package/dsgov-${semVer}.tgz`
    const download = wget.download(urlNexus, output, {})

    download.on('error', (err) => {
      console.log('--------------------------------------------------------')
      console.log('ERRO DE DOWNLOAD DO NEXUS:', err)
      console.log(urlNexus)
      console.log('--------------------------------------------------------')
      exit(1)
    })

    download.on('end', (o) => {
      console.log('--------------------------------------------------------')
      console.log(`Download do pacote NPM ${semVer} feito com sucesso`, o)
      console.log('--------------------------------------------------------')

      fs.copyFile(
        `assets/npm-package/dsgov-${semVer}.tgz`,
        'assets/npm-package/dsgov-latest.tgz',
        (err) => {
          if (err) throw err
          console.log(
            '--------------------------------------------------------'
          )
          console.log('dsgov-latest.tgz gerado com sucesso')
          console.log(
            '--------------------------------------------------------'
          )
        }
      )
    })
  } else {
    console.log('--------------------------------------------------------')
    console.log('Pasta DIST não existe. Não foi possível criar assets.')
    console.log('--------------------------------------------------------')
  }
}
