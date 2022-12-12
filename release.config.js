const sharedConfig = require('@govbr-ds/release-config')

module.exports = {
  branches: [...sharedConfig.branches],
  plugins: [
    sharedConfig.plugins.commitAnalyzer,
    sharedConfig.plugins.releaseNotes,
    sharedConfig.plugins.changelog,
    sharedConfig.plugins.gitlab,
    [
      '@semantic-release/exec',
      {
        publishCmd:
          'sed -i "s/archive\\/v.*\\/govbr-ds-dev-core-v.*\\.zip/archive\\/v${nextRelease.version}\\/govbr-ds-dev-core-v${nextRelease.version}\\.zip/g" config.json; sed -i "s/\\/-\\/raw\\/v.*\\//\\/-\\/raw\\/v${nextRelease.version}\\//g" config.json',
      },
    ],
    // '@semantic-release/npm',
    sharedConfig.plugins.git,
    [
      'semantic-release-discord',
      {
        notifyOnFail: false,
        onSuccessTemplate: {
          content: `A versão v$npm_package_version do GOVBR-DS ($package_name) já está disponível no NPMJS! :partying_face:

          Para conhecer melhor as novidades:
          :book: [Página de releases]($repo_url/-/releases "Releases")
          :computer: [Repositório no Gitlab]($repo_url)

          Deseja contribuir com o Design System? Consulte a nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ "Wiki GOVBR-DS") para mais detalhes.`,
          embeds: [
            {
              color: 16736031,
              description: '$release_notes',
              title: 'RELEASE NOTES',
              url: '$repo_url/-/releases/v$npm_package_version',
            },
          ],
          threadName: 'GOVBR-DS ($package_name) v$npm_package_version',
          username: '<GOVBR-DS></GOVBR-DS> - Core v$npm_package_version',
        },
      },
    ],
  ],
}
