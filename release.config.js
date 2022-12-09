const sharedConfig = require("@govbr-ds/release-config")

module.exports = {
  branches: [...sharedConfig.branches],
  plugins: [
    sharedConfig.plugins.commitAnalyzer,
    sharedConfig.plugins.releaseNotes,
    sharedConfig.plugins.changelog,
    sharedConfig.plugins.gitlab,
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    sharedConfig.plugins.git,
    [
      "semantic-release-discord",
      {
        notifyOnFail: false,
        onSuccessTemplate: {
          content:
            "A versão v$npm_package_version do GOVBR-DS ($package_name) já está disponível no NPMJS! :partying_face:\n\nPara conhecer melhor as novidades:\n\n:book: [Página de releases]($repo_url/-/releases 'Releases')\n\n:computer: [Repositório no Gitlab]($repo_url)\n\nDeseja contribuir com o Design System? Consulte a nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ 'Wiki GOVBR-DS') para mais detalhes.",
          embeds: [
            {
              color: 16736031,
              description: "$release_notes",
              title: "RELEASE NOTES",
              url: "$repo_url/-/releases/$npm_package_version",
            },
          ],
          username: "GOVBR-DS - Core v$npm_package_version",
          thread_name: "GOVBR-DS ($package_name) v$npm_package_version",
        },
      },
    ],
  ],
}
