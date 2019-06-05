# Caixa de texto (input)

O input do DS-Gov é compatível com vários tipos de input do HTML 5. Segue a lista:

- text
- password
- date
- datetime-local
- email
- month
- number
- search
- tel
- time
- url
- week

Alguns dos tipos listado acima possui um comportamento diferenciado de acordo com o dispositivo do usuário.

Você poderá usar o input de forma isolada ou dentro de um container. Os exemplos a seguir mostram as 2 formas de uso do input.

## Uso do input de forma isolada

```html
<input class="br-input" type="text" placeholder="Insira um texto">
```

## Uso do input dentro de container (field)

```html
<div class="br-field">
    <label for="">label</label>
    <input type="text" placeholder="Insira um texto">
</div>
```

Repare que ao usar o container a classe `br-input` não é necessária, pois o container irá deixar todos os componentes internos configurados para o DS-Gov.

## Estados do input

O input pode assumir novos estados. A lista de estados disponíveis é a seguinte:

- focus
- valid
- invalid
- disabled

Os estados também podem ser aplicados por classe. Exemplo:

```html
<input class="br-input disabled" type="text" placeholder="Insira um texto">
<input class="br-input" type="text" placeholder="Insira um texto" disabled>
```

No exemplo acima, a aplicação do estilo de input desabilitado está sendo feito de 2 formas.

> O primeiro exemplo apenas aplica o visual de desabilitado. Para esses casos é necessário complementar o input com scripts para desabilitar o componente.
> 
> O segundo exemplo desabilita de fato o input e é a **forma correta de uso**.
