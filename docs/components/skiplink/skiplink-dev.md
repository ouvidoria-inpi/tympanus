[version]: # (1.0.1)

## Como usar

### Tipo Simples

```html
<div class="br-skiplink">
  <a class="br-item" href="#main-content" accesskey="1">
    Ir para o conteúdo (1/4)
    <span class="br-tag text ml-1">1</span>
  </a>
  <a class="br-item" href="#header-navigation" accesskey="2">
    Ir para o menu (2/4)
    <span class="br-tag text ml-1">2</span>
  </a>
  <a class="br-item" href="#main-searchbox" accesskey="3">
    Ir para a busca (3/4)
    <span class="br-tag text ml-1">3</span>
  </a>
  <a class="br-item" href="#footer" accesskey="4">
    Ir para o rodapé (4/4)
    <span class="br-tag text ml-1">4</span>
  </a>
</div>
```

### Tipo Composto

```html
<div class="br-skiplink full">
  <a class="br-item" href="#main-content" accesskey="1">
    Ir para o conteúdo
    <span class="br-tag text ml-1">1</span>
  </a>
  ...
</div>
```

### Propriedades obrigatórias

| Atributo | Valor padrão | Descrição               |
| -------- | ------------ | ----------------------- |
| class    | br-skiplink  | Container do componente |

Para cada Item:

| Atributo  | Valor padrão | Descrição        |
| --------- | ------------ | ---------------- |
| href      |              | Id do atalho     |
| accesskey |              | Número do atalho |

### Propriedades Adicionais

| Atributo | Valor padrão | Descrição              |
| -------- | ------------ | ---------------------- |
| class    | full         | Aplica versão composta |

### Atalho de teclado

Este componente faz uso de teclas de atalho. Cada browsers possui sua forma de uso para elas. Veja mais informações em [Como usar teclas de atalho](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/accesskey).

## Dependências

- [Tag](/ds/components/tag)
