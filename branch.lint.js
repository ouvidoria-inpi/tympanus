/* eslint-disable no-console */
const { execSync } = require('child_process')
const CHALK = require('chalk')

function executeCommand(command) {
  return execSync(command)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '')
}

const CURRENTBRANCH = executeCommand('git rev-parse --abbrev-ref HEAD')
const VALID_BRANCH_REGEX = '^(feature|fix|rc|bugfix|release|hotfix|build)/[a-z0-9._-]+$'
const PROTECTED_BRANCH_REGEX = '^(develop|master)'

if (CURRENTBRANCH.match(PROTECTED_BRANCH_REGEX)) {
  const branch = CURRENTBRANCH.toUpperCase()
  console.error(CHALK.red.bold('BRANCH PROTEGIDA. NELA NINGUÉM MEXE!'))
  console.error(
    CHALK.yellow.bold(`CRIE OUTRA BRANCH E SUBMETA O CÓDIGO POR MR PARA A BRANCH ${branch}`)
  )
  process.exit(0)
}

if (CURRENTBRANCH.match(VALID_BRANCH_REGEX)) {
  console.log(
    CHALK.green.bold(
      'A NOMENCLATURA DA BRANCH ESTÁ CORRETA. PARABÉNS! JÁ PODE GANHAR UM AUMENTO... DE TRABALHO!!!'
    )
  )
  process.exit(0)
} else {
  console.error(CHALK.red.bold('ESSA BRANCH NÃO SEGUE OS PADRÕES DE NOMENCLATURA DO PROJETO.'))
  console.error(
    CHALK.red.bold(
      'O COMMIT (E O SEU SALÁRIO) FORAM BLOQUEADOS ATÉ QUE VOCÊ CRIE OUTRA BRANCH SEGUINDO OS PADRÕES E REFAÇA O COMMIT.'
    )
  )
  process.exit(1)
}
