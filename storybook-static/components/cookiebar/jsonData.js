const jsonData = `[
  {
    "lang": "pt-br",
    "allOptOut": true,
    "acceptButton": "Aceitar",
    "optOutButton": "Definir Cookies",
    "optInButton": "Ver Política de Cookies",
    "infoText": "Minim pariatur amet laboris sint consectetur enim do voluptate",
    "mainTitle": "Exercitation et proident",
    "lastUpdate": "01/02/2021",
    "entryText": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur neque culpa nisi alias. Voluptatem dicta nihil magnam, cumque voluptatum animi distinctio molestias recusandae ipsam, sapiente unde error repellendus quibusdam?",
    "selectAll": false,
    "allAlertMessage": "Ao desativar essa opção, sua navegação ficará comprometida",
    "closeLabel": "fechar",
    "lastUpdateLabel": "Última atualização",
    "cookieGroupsLabel": "Classes de cookies",
    "selectAllLabel": "Selecionar tudo",
    "unselectAllLabel": "Desselecionar tudo",
    "selectAllGroupLabel": "Selecionar toda classe",
    "unselectAllGroupLabel": "Desselecionar toda classe",
    "onLabel": "Ligado",
    "offLabel": "Desligado",
    "alwaysActiveLabel": "Sempre ativo",
    "cookieNameLabel": "Cookies",
    "expiresLabel": "Vencimento",
    "domainLabel": "Domínio",
    "enterpriseLabel": "Empresa",
    "purposeLabel": "Finalidade",
    "descriptionLabel": "Descrição",
    "cookieGroups": [
      {
        "groupId": "necessarios",
        "groupName": "Estritamente necessários",
        "groupOptOut": false,
        "groupSelected": false,
        "groupAlertMessage": "Alerta group 0",
        "groupText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!",
        "cookieList": [
          {
            "cookieId": "necessario-1",
            "cookieOptOut": false,
            "cookieSelected": false,
            "alertMessage": "Alerta group 0 - cookie 0",
            "cookieName": "optimizelyEndUserId",
            "expires": "30 minutos",
            "domain": "serpro.gov.br",
            "enterprise": "Serpro",
            "purpose": "Autorização",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum."
          },
          {
            "cookieId": "necessario-2",
            "cookieOptOut": false,
            "cookieSelected": false,
            "alertMessage": "Alerta group 0 - cookie 1",
            "cookieName": "optimizelyEndUserId",
            "expires": "30 minutos",
            "domain": "serpro.gov.br",
            "enterprise": "Serpro",
            "purpose": "Autorização",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum."
          }
        ]
      },
      {
        "groupId": "desempenho",
        "groupName": "Desempenho, funcionamento, marketing e personalização",
        "groupOptOut": true,
        "groupSelected": true,
        "groupAlertMessage": "Alerta group 1",
        "groupText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!",
        "cookieList": [
          {
            "cookieId": "desempenho-2",
            "cookieOptOut": true,
            "cookieSelected": false,
            "alertMessage": "Alerta group 1 - cookie 1",
            "cookieName": "optimizelyEndUserId",
            "expires": "30 minutos",
            "domain": "serpro.gov.br",
            "enterprise": "Serpro",
            "purpose": "Autorização",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum."
          },
          {
            "cookieId": "desempenho-2",
            "cookieOptOut": true,
            "cookieSelected": false,
            "cookieName": "optimizelyEndUserId",
            "expires": "30 minutos",
            "domain": "serpro.gov.br",
            "enterprise": "Serpro",
            "purpose": "Autorização",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum."
          }
        ]
      },
      {
        "groupId": "experiencia",
        "groupName": "Experiência do site",
        "groupOptOut": true,
        "groupSelected": false,
        "groupAlertMessage": "Ao desativar essa opção, sua navegação ficará comprometida",
        "groupText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!",
        "cookieList": [
          {
            "cookieId": "experiencia-1",
            "cookieOptOut": false,
            "cookieSelected": false,
            "alertMessage": "Alerta group 2 - cookie 0",
            "cookieName": "optimizelyEndUserId",
            "expires": "30 minutos",
            "domain": "serpro.gov.br",
            "enterprise": "Serpro",
            "purpose": "Autorização",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum."
          },
          {
            "cookieId": "experiencia-2",
            "cookieOptOut": true,
            "cookieSelected": false,
            "cookieName": "optimizelyEndUserId",
            "expires": "30 minutos",
            "domain": "serpro.gov.br",
            "enterprise": "Serpro",
            "purpose": "Autorização",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum."
          }
        ]
      }
    ],
    "noteTitle": "Aviso sobre cookies",
    "noteList": [
      {
        "question": "O que são cookies?",
        "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?"
      },
      {
        "question": "Durabilidade?",
        "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?"
      },
      {
        "question": "Proveniência?",
        "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?"
      },
      {
        "question": "Finalidade?",
        "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?"
      }
    ],
    "links": [
      {
        "name": "Declaração de Conformidade com os Princípios de Proteção de Dados",
        "url": "#"
      }
    ]
  }
]`

export default jsonData
