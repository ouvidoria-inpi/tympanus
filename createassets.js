const shell = require('shelljs')
const { exit } = require('process')
const fs = require('fs')
const pjson = require('./package.json')
const DirArchiver = require('dir-archiver')
const wget = require('node-wget')
const semVer = pjson.version

console.log(`Versão do DSGOV: ${semVer}`)

if (!fs.existsSync('./cdn/dsgov-cdn')) {
  console.log('--------------------------------------------------------')
  console.log('Clonando repositório do CDN')
  console.log('--------------------------------------------------------')
  fs.mkdirSync('cdn', { recursive: true })
  shell.cd('cdn')
  shell.exec('git clone git@git.serpro:dsgov/dsgov-cdn.git')
}

console.log('--------------------------------------------------------')
console.log(`Versão do DSGOV: ${semVer}`)
console.log('--------------------------------------------------------')

if (fs.existsSync('./cdn/dsgov-cdn')) {
  console.log('--------------------------------------------------------')
  console.log('Criando arquivos de versão no CDN')
  console.log('--------------------------------------------------------')
  shell.cd('cdn/dsgov-cdn')
  shell.exec('bash publish.sh')
  shell.cd('../../')
  console.log('--------------------------------------------------------')
  console.log('CDN publicado')
  console.log('--------------------------------------------------------')
}

buildAssetsSource()
buildAssetsNexus()

function buildAssetsSource() {
  if (fs.existsSync('dist')) {
    var archivelatest = new DirArchiver(
      'dist',
      'assets/source-code/dsgov-latest.zip',
      []
    )
    archivelatest.createZip()
    var archiveVersion = new DirArchiver(
      'dist',
      'assets/source-code/dsgov-' + pjson.version + '.zip',
      []
    )
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
  const urlNexus = `http://nexus.aic.serpro/repository/npm-private/@govbr/dsgov/-/dsgov-${semVer}.tgz`
  if (fs.existsSync('dist')) {
    wget(
      { url: urlNexus, dest: `assets/npm-package/dsgov-${semVer}.tgz` },
      function (error, response, body) {
        if (error) {
          console.log('--------------------------------------------------------')
          console.log('ERRO DE DOWNLOAD DO NEXUS')
          console.log(urlNexus)
          console.log('--------------------------------------------------------')
          exit(1)
        }
        console.log('--------------------------------------------------------')
        console.log(`Download do pacote NPM ${semVer} feito com sucesso`)
        console.log('--------------------------------------------------------')
        fs.copyFile(
          'assets/npm-package/dsgov-' + semVer + '.tgz',
          'assets/npm-package/dsgov-latest.tgz',
          (err) => {
            if (err) throw err
            console.log('--------------------------------------------------------')
            console.log('dsgov-latest.tgz gerado com sucesso')
            console.log('--------------------------------------------------------')
          }
        )
      }
    )
  } else {
    console.log('--------------------------------------------------------')
    console.log('Pasta DIST não existe. Não foi possível criar assets.')
    console.log('--------------------------------------------------------')
  }
}
