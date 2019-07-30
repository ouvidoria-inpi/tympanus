# Datepicker

## ANATOMIA

São elementos usados pelos usuários para selecionar uma ou mais datas.

![Datepicker Anatomia](../../assets/images/components_img/datepicker/datepicker-anatomia.png)

## ESTADOS

Os campos de data seguem o mesmo comportamento do input quando está sendo acionado. O contorno aumenta a espessura para 2px e o mesmo assume a cor azul #2B74E9, sinalizando ao usuário onde ele se encontra.

![Datepicker Estados](../../assets/images/components_img/datepicker/datepicker-estados.png)

### HOVER

Ao passar o mouse em cima dos meses/anos, aparecerá um background de cantos arredondados nas extremidades e cor #DBE7FC

![Datepicker Hover](../../assets/images/components_img/datepicker/datepicker-hover.png)

## ORIENTAÇÕES DE USO

### RÓTULOS

Devem ser acompanhados de rótulos que descrevam as datas que o usuário deve digitar.

### MÁSCARA

A máscara tem a função de auxiliar o usuário em como preencher as datas solicitadas. *dd* (significa dia) *mm* (mês) e *aaaa* (o ano). A máscara desaparece ao se começar a digitar no campo. E retorna no caso de exclusão da informação.

### ÍCONES

No campo de texto deve aparecer o ícone de calendário, atalho para escolha da data.

## RÓTULO E INFORMAÇÕES ADICIONAIS

Sempre que possível o rótulo do campo de data deve ser o mais sucinto e claro possível.

Entretanto, quando necessário, ele também pode exibir um texto com informações adicionais para auxiliar o preenchimento.

![Datepicker Rotulo Informacoes](../../assets/images/components_img/datepicker/datepicker-rotulo-informacoes.png)

## MENSAGENS DE FEEDBACK CONTEXTUAL

### MENSAGEM DE ERRO

A mensagem de erro (feedback contextual) deve ser o mais sucinto possível, de preferência não ultrapassando uma linha da mesma largura do campo de texto.

Essas validações dos campos de texto deve exibir a mensagem de suporte abaixo do campo, juntamente com o ícone correspondente.

![Datepicker Erro](../../assets/images/components_img/datepicker/datepicker-erro.png)

### MENSAGENS DE ALERTA

Se houver necessidade poderá aparecer um tooltip com mais alguma informação complementar ao preenchimento dos campos.

![Datepicker Alerta](../../assets/images/components_img/datepicker/datepicker-alerta.png)