## Dependências

Nenhuma dependência.

## Código básico

``` html
<div class="br-upload">
    <input id="input-file" class="upload-input" type="file" multiple />
    <h1 class="upload-header">...</h1>
    <span class="upload-info">...</span>
    <div class="upload-file-list">...</div>
    <label for="upload-input" class="upload-add br-button is-cancel">...</label>
    <p class="upload-size">
        ... <span class="upload-size-num">...</span> ...
        <span class="upload-size-bytes">...</span>
    </p>
</div>
<button class="br-button is-cancel" type="button">Voltar</button>
<button class="br-button is-primary" type="button">Salvar</button>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

* `br-upload` : container do componente
* `upload-input` : elemento oculto que comporta o envio de arquivos
* `upload-header` : título do card
* `upload-info` : instruções para os tipos de arquivos suportados
* `upload-file-list` : container para a Lista de arquivos adicionados
* `upload-add` : label clicável para adicionar arquivos
* `upload-size` , `upload-size-num` , `upload-size-bytes` : informações sobre quantidade de itens e tamanho da Lista de arquivos adicionados
* `br-button` : Botões de Voltar e Salvar

## `br-upload` 

Container do componente.

Exemplo de uso:

``` html
<div class="br-upload">
    ...
</div>
```

## `upload-input` 

Tag input do tipo "file" que comporta o upload de arquivos. Atribuir a classe "upload-input", defina uma "id" de referência e o atribuito "multiple" para suportar a seleção de mais de um arquivos por vez.

Exemplo de uso:

``` html
<input class="upload-input" id="input-file" type="file" name="myFiles" multiple />
```

## `upload-header` e `upload-info` 

Tags do tipo "h1" e "span" para textos informativos sobre o componente.

Exemplo de uso:

``` html
<h1 class="upload-header">
    Arraste e solte o(s) arquivo(s) do seu computador
</h1>
<span class="upload-info">
    <i class="fas fa-info-circle"></i>
    Os arquivos devem ser no formato PNG, JPG ou PDF e ter no máximo 1GB
</span>
```

## `upload-file-list` 

Tag do tipo "div" que será usada no script para preencher a lista de arquivos selecionados

Exemplo de uso:

``` html
<div class="upload-file-list"></div>
```

## `upload-add` 

Tag do tipo "label" usada como um botão clicável que dispara a função de selecionar arquivos. Devem conter na sua definição de classe 3 referências: "upload-add", "br-button" e "is-cancel". O atributo "for" deve conter a referência ao "id" do elemento input do tipo "file" do componente para que o script funcione adequadamente.

Exemplo de uso:

``` html
<label for="upload-input" class="upload-add br-button is-cancel">
    <i class="fas fa-plus"></i>
    Adicionar um arquivo do seu computador
</label>
```

## `upload-size` , `upload-size-num` e `upload-size-bytes` 

Bloco obrigatório, referenciado no script, contendo as informações para os arquivos selecionados.

Exemplo de uso:

``` html
<p class="upload-size">
    Arquivos selecionados: <span class="upload-size-num">0</span><br />
    Tamanho total: <span class="upload-size-bytes">0</span>
</p>
```

## `br-button` 

Botões de Voltar e Salvar, devem ter as classes do componente "br-button" e adicionalmente "is-cancel" ou "is-primary" respectivamente.

``` html
<button class="br-button is-cancel" type="button">Voltar</button>
<button class="br-button is-primary" type="button">Salvar</button>
```

# Estados

Para resoluções menores que o breakpoint "sm" (atualmente 998px). O componente se reorganiza de forma a alinhar o conteúdo à esquerda e a imagem de fundo centralizada em relaçao ao card.

# Regras especiais

Nenhuma regra especial.

