[version]: # (1.1.1)

![Exemplo de componente switch.](imagens/diretriz.png)
*Exemplo do componente _switch_.*

Utilize _switches_ para ajudar usuários a atualizar preferências, configurações e outros tipos de informação que envolvam uma escolha entre duas seleções e os resultados são eficazes e visíveis imediatamente não havendo necessidade de o usuário clicar em um botão de envio.

---

## Anatomia

1. _Label_ (_opcional_);
2. Contêiner;
3. Chave de alternância;
4. Rótulo (_opcional_);
5. Ícone (_opcional_).

![Anatomia do componente switch.](imagens/anatomia.png)
*Anatomia do componente _switch_.*

---

## Detalhamento dos Itens

### 1. _Label_ (_opcional_)

_Labels_ são itens opcionais. Muitas vezes _switches_ podem funcionar adequadamente sem _labels_, porém, se houver necessidade de deixar o entendimento mais claro, não hesite em utilizar _labels_ que devem descrever concisamente o que o componente faz quando a alternância estiver ativada.

O _label_ pode estar localizado à esquerda, à direita ou acima do _switch_ e a distância entre o _label_ e o _switch_ pode ser determinado pelo _layout_ da tela. Uma vez definido como serão aplicados os _labels_ em seu produto, mantenha sempre a consistência.

![Possíveis posicionamentos do label em relação ao switch.](imagens/label.png)
*_Labels_ podem estar localizados em diversas posições em relação ao _switch_ para melhor se adequar ao _layout_ da página.*

### 2. Contêiner

Contêiner é o espaço que contem a chave de alternância e limita as duas posições aceitáveis para a escolha do usuário.

### 3. Chave de alternância

Chave de alternância é simplesmente o sinalizador que alterna as posições ligado/desligado. Embora o usuário possa interagir clicando em qualquer parte do _switch_, é por meio da chave que o usuário tem o _feedback_ da ação realizada.

### 4. Rótulo (_opcional_)

Rótulo são itens opcionais que ajudam a esclarecer as duas possibilidades de escolha do usuário. É recomendável usar rótulos quando for necessário dar maior visibilidade das opções disponíveis.

Rótulos favorecem a usabilidade, pois auxiliam no entendimento da posição em que a chave se encontra.

![Exemplo de uso de rótulos no switch.](imagens/rotulo.png)
*Use rótulos curtos e concisos.*

#### Boas práticas

- Mantenha os rótulos curtos e diretos.

- Os rótulos devem descrever o que o _switch_ fará quando a chave estiver ligada ou desligada. Eles não devem ser neutros ou ambíguos.

- Evite mais de três termos para definir rótulos.

- Use rótulos sempre na mesma posição em relação ao _switch_.

- Evite utilizar rótulo apenas para um estado possível.

![Exemplos de uso correto e incorreto de rótulos no switch.](imagens/rotulo-1.png)
*Use rótulos curtos e concisos.*

![Exemplos de uso correto e incorreto de rótulos no switch.](imagens/rotulo-2.png)
*Não alterne a posição dos rótulos.*

![Exemplos de uso correto e incorreto de rótulos no switch.](imagens/rotulo-3.png)
*Use os rótulos sempre em pares.*

**Atenção:** quando utilizar rótulos prefira alinhar o componente reservando espaço pelo rótulo de maior extensão. desta forma, evita-se o deslocamento do componente quando for alterada a chave de alternância.

![Exemplos de uso correto dealinhamento dos rótulos.](imagens/rotulo-alinhamento.png)
*Exemplos de boas práticas no alinhamento dos rótulos.*

### 5. Ícone (_opcional_)

Ícones podem ser utilizados opcionalmente para reforçar a opção escolhida pelo usuário. Neste caso, a usabilidade é potencializada, pois além da cor e da posição, o ícone auxilia semanticamente a posição que a chave de alternância se encontra.

![Exemplo de uso de ícone na chave de alternância.](imagens/icone.png)
*Ícones podem auxiliar a leitura das posições ligado/desligado.*

---

## Comportamento

### 1- Densidades

O componente _switch_ possui três densidades. Quanto menor for a densidade, maior a área de interação.

![Exemplos de possíveis densidades para o componente switch.](imagens/densidades.png)
*Exemplos das posíveis densidades do componente _switch_.*

### 2- Área interativa

O componente _switch_ pode ser interativo em toda a área compreendida pelo elemento contêiner e pelo _label_ correspondente.

![exemplo de áreas interativas do componente switch.](imagens/interatividade.png)
*A interatividade do componente _switch_ ocorre tanto na área compreendida pelo contêiner como pelo _label_ correspondente.*

**Atenção:** nos casos em que o label e o contêiner não estejam próximos apenas o contêiner deverá ser interativo.

![Exemplo de situação em que apenas o contêiner deve ser interativo.](imagens/interatividade-2.png)
*Neste exemplo apenas o contêiner é interativo.*

### 3- Estados

#### Desabilitado

Um _switch_ pode ficar desabilitado quando uma interação for feita pelo usuário anteriormente e que reflita neste _switch_.

![Exemplo de switch com estado desabilitado.](imagens/desabilitado.png)
*_Switches_ desabilitados.*

A seguir apresentamos uma tabela com outros possíveis estados para o componente _switches_.

![Outros casos possíveis de serem encontrados em switches.](imagens/estados.png)
*Estados possíveis dos _switches_.*

**Atenção:** consulte o documento de estados para se informar sobre a aplicação dos estados mencionados no componente _switch_.

### 4- Agrupamento

O componente _switch_, funciona basicamente como um interruptor de alternância, permitindo aos usuários ligar ou desligar as opções apresentadas. No entanto, quando utilizados de forma agrupada, deverão vir associados a um componente **_checkbox_ principal**, permitindo ao usuário selecionar e desselecionar todas, além de ter o _feedback_ relacionado ao estado intermediário. Para maiores informações consultar "Estado Intermediário" na documentação do componente checkbox.
![Exemplo de switches agrupados em uma lista associado a um checkbox principal](imagens/switches-agrupados.png)
*Exemplo de _switches_ agrupados em uma lista associado a um _checkbox_ principal.*

### 5- Responsividade

Não há nenhum comportamento especial previsto para o componente _switch_ quando aplicado em resoluções menores. Apenas esteja atento quanto à área de interação. Em despositivos _touch screen_ prefira utilizar densidade baixa, pois apresenta uma maior área de interação ao toque.

---

## Melhores Práticas

- _Switches_ devem ter efeito imediato e não devem exigir que o usuário clique em botões de "Salvar" ou "Enviar" para aplicar o novo estado.

- Evite incluir _switches_ em formulários longos onde outros tipos de campos de formulário estão presentes e os usuários precisarão clicar no botão "Enviar" para que outras alterações tenham efeito. Este cenário confunde os usuários porque eles não podem ter certeza se sua escolha de alternância terá efeito imediato.

- Mantenha os rótulos dos _switches_ curtos e diretos.

- Certifique-se de que os _switches_ sejam implementados de forma consistente. A inconsistência força os usuários a gastar mais tempo pensando em como interagir com os componentes.

- O _Switch_ deve ser posicionado na interface de forma firme e consistente durante o movimento da _chave de alternância_ ou alternância de _labels_ e surgimento de bordas de foco, evitando mudar o posicionamento do seu contêiner. Caso contrário, poderá confundir ou atrapalhar o processo de interação do usuário com o componente.

---

## Especificação

### Alinhamento

|Name|Spacing Token|
|--|:--:|
|Label|`--spacing-vertical-center`|
|Label|`--spacing-horizontal-left`|

### Espaçamento

|Name|Property|Token/Value|
|--|--|:--:|
|Label (depende da posição)|margin-right/margin-left/margin-botton|`--spacing-scale-2x`|
|Rótulo (depende da posição)|margin-right/margin-left|`--spacing-scale-base`|
|Contêiner (alta)|padding-all|`--spacing-scale-half`|
|Contêiner (média)|padding-all|`--spacing-scale-half`|
|Contêiner (baixa)|padding-left, padding-right|`--spacing-scale-half`|
|Contêiner (baixa)|padding-top, padding-botton|`--spacing-scale-half`|
|Contêiner |margin-bottom|`--spacing-scale-base`|
|Chave (ligado)|horizontal align|`right`|
|Chave (desligado)|horizontal align|`left`|

### Dimensão

|Name|Property|Token/Value|
|--|--|:--:|
|Contêiner (alta)|width|`40px`|
|Contêiner (alta)|height|`24px`|
|Chave de alternância (alta)|width|`16px`|
|Chave de alternância (alta)|height|`16px`|
|Contêiner (média)|width|`52px`|
|Contêiner (média)|height|`30px`|
|Chave de alternância (média)|width|`22px`|
|Chave de alternância (média)|height|`22px`|
|Contêiner (baixa)|width|`64px`|
|Contêiner (baixa)|height|`36px`|
|Chave de alternância (baixa)|width|`28px`|
|Chave de alternância (baixa)|height|`28px`|

### Cor

|Name|Property|Color Token|
|--|--|:--:|
|Superfície|background|`--pure-0`|
|Label|text|`--gray-80`|
|Rótulo|text|`--gray-80`|
|chave de alternância - on|icon|`--blue-warm-vivid-40`|
|chave de alternância - off|icon|`--gray-20`|
|Ícones|icon|`--pure-0`|

### Tipografia

|Name|Property|Token/Value|
|--|--|:--:|
|Label|size|`--font-size-scale-base`|
|Label|font-weight|`--font-weight-semi-bold`|
|Rótulo|size|`--font-size-scale-base`|
|Rótulo|font-weight|`--font-weight-regular`|

### Iconografia

|Name|Ícone|Size|Class (Font Awesome)|
|--|:--:|:--:|:--:|
|Chave de alternância (alta)|<i class="fas fa-circle"></i>|`--icon-size-sm`|`fa-circle`|
|Chave de alternância (média)|<i class="fas fa-circle"></i>|`--icon-size-lg`|`fa-circle`|
|Chave de alternância (baixa)|<i class="fas fa-circle"></i>|`--icon-size-2x`|`fa-circle`|
|Ícone off (alta)|<i class="fas fa-circle"></i>|`--icon-size-xs`|`fa-times`|
|Ícone off (média)|<i class="fas fa-circle"></i>|`--icon-size-sm`|`fa-times`|
|Ícone off (baixa)|<i class="fas fa-circle"></i>|`--icon-size-base`|`fa-times`|
|Ícone on (alta)|<i class="fas fa-circle"></i>|`--icon-size-xs`|`fa-check`|
|Ícone on (média)|<i class="fas fa-circle"></i>|`--icon-size-sm`|`fa-check`|
|Ícone on (baixa)|<i class="fas fa-circle"></i>|`--icon-size-base`|`fa-check`|
