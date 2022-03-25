const inputData = [
  'Afeganistão',
  'África do Sul',
  'Albânia',
  'Alemanha',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antártida',
  'Antígua e Barbuda',
  'Antilhas Holandesas',
  'Arábia Saudita',
  'Argélia',
  'Argentina',
  'Armênia',
  'Aruba',
  'Austrália',
  'Áustria',
  'Azerbaijão',
  'Bahamas',
  'Bahrein',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Bélgica',
  'Belize',
  'Benin',
  'Bermudas',
  'Bolívia',
  'Bósnia-Herzegóvina',
  'Botsuana',
  'Brasil',
  'Brunei',
  'Bulgária',
  'Burkina Fasso',
  'Burundi',
  'Butão',
  'Cabo Verde',
  'Camarões',
  'Camboja',
  'Canadá',
  'Cazaquistão',
  'Chade',
  'Chile',
  'China',
  'Chipre',
  'Cingapura',
  'Colômbia',
  'Congo',
  'Coréia do Norte',
  'Coréia do Sul',
  'Costa do Marfim',
  'Costa Rica',
  'Croácia (Hrvatska)',
  'Cuba',
  'Dinamarca',
  'Djibuti',
  'Dominica',
  'Egito',
  'El Salvador',
  'Emirados Árabes Unidos',
  'Equador',
  'Eritréia',
  'Eslováquia',
  'Eslovênia',
  'Espanha',
  'Estados Unidos',
  'Estônia',
  'Etiópia',
  'Fiji',
  'Filipinas',
  'Finlândia',
  'França',
  'Gabão',
  'Gâmbia',
  'Gana',
  'Geórgia',
  'Gibraltar',
  'Grã-Bretanha (Reino Unido, UK)',
  'Granada',
  'Grécia',
  'Groelândia',
  'Guadalupe',
  'Guam (Território dos Estados Unidos)',
  'Guatemala',
  'Guernsey',
  'Guiana',
  'Guiana Francesa',
  'Guiné',
  'Guiné Equatorial',
  'Guiné-Bissau',
  'Haiti',
  'Holanda',
  'Honduras',
  'Hong Kong',
  'Hungria',
  'Iêmen',
  'Ilha Bouvet (Território da Noruega)',
  'Ilha do Homem',
  'Ilha Natal',
  'Ilha Pitcairn',
  'Ilha Reunião',
  'Ilhas Aland',
  'Ilhas Cayman',
  'Ilhas Cocos',
  'Ilhas Comores',
  'Ilhas Cook',
  'Ilhas Faroes',
  'Ilhas Falkland (Malvinas)',
  'Ilhas Geórgia do Sul e Sandwich do Sul',
  'Ilhas Heard e McDonald (Território da Austrália)',
  'Ilhas Marianas do Norte',
  'Ilhas Marshall',
  'Ilhas Menores dos Estados Unidos',
  'Ilhas Norfolk',
  'Ilhas Seychelles',
  'Ilhas Solomão',
  'Ilhas Svalbard e Jan Mayen',
  'Ilhas Tokelau',
  'Ilhas Turks e Caicos',
  'Ilhas Virgens (Estados Unidos)',
  'Ilhas Virgens (Inglaterra)',
  'Ilhas Wallis e Futuna',
  'índia',
  'Indonésia',
  'Irã',
  'Iraque',
  'Irlanda',
  'Islândia',
  'Israel',
  'Itália',
  'Jamaica',
  'Japão',
  'Jersey',
  'Jordânia',
  'Kênia',
  'Kiribati',
  'Kuait',
  'Laos',
  'Látvia',
  'Lesoto',
  'Líbano',
  'Libéria',
  'Líbia',
  'Liechtenstein',
  'Lituânia',
  'Luxemburgo',
  'Macau',
  'Macedônia (República Yugoslava)',
  'Madagascar',
  'Malásia',
  'Malaui',
  'Maldivas',
  'Mali',
  'Malta',
  'Marrocos',
  'Martinica',
  'Maurício',
  'Mauritânia',
  'Mayotte',
  'México',
  'Micronésia',
  'Moçambique',
  'Moldova',
  'Mônaco',
  'Mongólia',
  'Montenegro',
  'Montserrat',
  'Myanma',
  'Namíbia',
  'Nauru',
  'Nepal',
  'Nicarágua',
  'Níger',
  'Nigéria',
  'Niue',
  'Noruega',
  'Nova Caledônia',
  'Nova Zelândia',
  'Omã',
  'Palau',
  'Panamá',
  'Papua-Nova Guiné',
  'Paquistão',
  'Paraguai',
  'Peru',
  'Polinésia Francesa',
  'Polônia',
  'Porto Rico',
  'Portugal',
  'Qatar',
  'Quirguistão',
  'República Centro-Africana',
  'República Democrática do Congo',
  'República Dominicana',
  'República Tcheca',
  'Romênia',
  'Ruanda',
  'Rússia (antiga URSS) - Federação Russa',
  'Saara Ocidental',
  'Saint Vincente e Granadinas',
  'Samoa Americana',
  'Samoa Ocidental',
  'San Marino',
  'Santa Helena',
  'Santa Lúcia',
  'São Bartolomeu',
  'São Cristóvão e Névis',
  'São Martim',
  'São Tomé e Príncipe',
  'Senegal',
  'Serra Leoa',
  'Sérvia',
  'Síria',
  'Somália',
  'Sri Lanka',
  'St. Pierre and Miquelon',
  'Suazilândia',
  'Sudão',
  'Suécia',
  'Suíça',
  'Suriname',
  'Tadjiquistão',
  'Tailândia',
  'Taiwan',
  'Tanzânia',
  'Território Britânico do Oceano índico',
  'Territórios do Sul da França',
  'Territórios Palestinos Ocupados',
  'Timor Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunísia',
  'Turcomenistão',
  'Turquia',
  'Tuvalu',
  'Ucrânia',
  'Uganda',
  'Uruguai',
  'Uzbequistão',
  'Vanuatu',
  'Vaticano',
  'Venezuela',
  'Vietnã',
  'Zâmbia',
  'Zimbábue',
]

export default inputData
