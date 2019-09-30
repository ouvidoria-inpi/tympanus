# Upload

## ANATOMIA

Upload aparece em forma de Cards e podem ter formatos distintos de acordo com a resolução da tela, mas devem sempre ficar alinhados com os elementos do formulário, seguindo a grid. O tamanho é responsivo.

Do lado esquerdo do card aparecerá uma imagem ilustrativa, que foi criada a partir dos ícones do fontawesome. Essa imagem servirá de apoio ao entendimento do texto que aparece do lado direito do card.

Abaixo do título do card, aparecerá sermpre uma mensagem informativa de como devem ser as características dos arquivos a serem anexados.

Abaixo da mensagem informativa deve haver um botão terciário para inclusão dos arquivos.

### CORES

No upload o card deve ser branch #FFFFFF e o "hover" desse card deve seguir o mesmo comportamento dos demais: assumir o contorno de cor azul #2B74E9

![Upload Anatomia](../../assets/images/components_img/upload/upload-anatomia.png)

## ORIENTAÇÕES DE USO

### CARDS

Os cards tem altura sempre adaptada a quantidade de texto. A largura é adaptavel e a altura mínima 248px (antes dos arquivos serem selecionados).

O upload pode ou não vir acompanhado de um título.

![Upload com Titulo](../../assets/images/components_img/upload/upload-com-titulo.png)

![Upload sem Titulo](../../assets/images/components_img/upload/upload-sem-titulo.png)

## ORIENTAÇÕES DE USO

### COMPORTAMENTO DENTRO DO COLAPSE

O card do upload pode aparecer contido num elemento de colapse.

O mesmo servirá de título para o upload.

![Upload Colapse](../../assets/images/components_img/upload/upload-colapse.png)

### COMPORTAMENTO DO HOVER

Ao passar o mouse em cima do card aparecerá um contorno da cor azul #2B74E9.

**Essa versão ocorrerá apenas na versão web.**

![Upload Hover](../../assets/images/components_img/upload/upload-hover.png)

![Upload Apos Selecao](../../assets/images/components_img/upload/upload-apos-selecao.png)

### CARDS COM ALTURA E LARGURA VARIÁVEIS

Os cards do upload podem aumentar a altura em função da quantidade dos arquivos incluídos e podem variar a a largura conforme disposição dos elementos do formulário.

### COMPORTAMENTO

Após inclusão dos arquivos aparecerá um ícone "X" para excluir o arquivo, caso o usuário tenha selecionado errado.

O botão terciário para inclusão de arquivos permanecerá visível no card mesmo após a seleção de vários arquivos.
