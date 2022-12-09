const sharedConfig = require('@govbr-ds/release-config')

module.exports = {
  branches: [...sharedConfig.branches],
  plugins: [
    sharedConfig.plugins.commitAnalyzer,
    sharedConfig.plugins.releaseNotes,
    sharedConfig.plugins.changelog,
    // sharedConfig.plugins.gitlab,
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    sharedConfig.plugins.git,
    [
      'semantic-release-discord',
      {
        onSuccessTemplate: {
          content:
            'A versão v$NPM_PACKAGE_VERSION do GOVBR-DS ($PACKAGE_NAME) já está disponível no NPMJS! :partying_face:\n\nPara conhecer melhor as novidades:\n\n:book: [Página de releases](https://gitlab.com/govbr-ds/dev/govbr-ds-dev-core/-/releases "Releases")\n\n:computer: [Repositório no Gitlab]($repo_url)\n\nDeseja contribuir com o Design System? Consulte a nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ "Wiki GOVBR-DS") para mais detalhes.',
          embeds: [
            {
              color: 16736031,
              description: '$release_notes',
              title: 'CHANGELOG',
              url: '$repo_url',
            },
          ],
          notifyOnFail: false,
          thread_name: 'GOVBR-DS ($PACKAGE_NAME) v$NPM_PACKAGE_VERSION',
          username: 'GOVBR-DS - Core v$NPM_PACKAGE_VERSION',
        },
      },
    ],
  ],
}
