/* eslint-disable no-console */
const { execSync } = require('child_process')
const CHALK = require('chalk')

const CURRENTBRANCH = executeCommand('git rev-parse --abbrev-ref HEAD')
const VALID_BRANCH_REGEX = '^(feature|fix|rc|bugfix|release|hotfix)/[a-z0-9._-]+$'
const PROTECTED_BRANCH_REGEX = '^(develop|master)'

if (CURRENTBRANCH.match(PROTECTED_BRANCH_REGEX)) {
  console.error(
    CHALK.black.bgYellow.bold(
      'ESSA BRANCH É PROTEGIDA E NÃO SERÁ POSSÍVEL ENVIAR SEUS COMMITS LOCAIS PARA O REMOTO. POR FAVOR CRIE OUTRA BRANCH E SUBMETA UM MERGE REQUEST PARA ESSA BRANCH'
    )
  )
  process.exit(0)
}

if (CURRENTBRANCH.match(VALID_BRANCH_REGEX)) {
  console.log(CHALK.green.bold('BRANCH SEGUE OS PADRÕES DO PROJETO. PARABÉNS!'))
  process.exit(0)
} else {
  console.log(
    CHALK.white.bgRed.bold(
      'ESSA BRANCH NÃO SEGUE OS PADRÕES DE NOMENCLATURA DO PROJETO E O COMMIT FOI BLOQUEADO. POR FAVOR CRIE OUTRA BRANCH SEGUINDO OS PADRÕES E REFAÇA O COMMIT.'
    )
  )
  process.exit(1)
}

function executeCommand(command) {
  return execSync(command)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '')
}
