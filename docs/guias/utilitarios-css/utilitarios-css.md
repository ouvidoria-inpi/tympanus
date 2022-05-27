Utilize os utilitários sempre que possível para não precisar reescrever CSS em seu código.

## Grid

A Grid é a mesma grid Bootstrap, portanto sua forma de uso é a mesma. Os tamanhos de breakpoints, containers e gutters possuem valores diferenciados.

Conversão de breakpoints Design System GOV.BR para Bootstrap:

| Token Breakpoint       | Classe Bootstrap |
| ---------------------- | ---------------- |
| `--grid-breakpoint-xs` | `.xs`            |
| `--grid-breakpoint-sm` | `.sm`            |
| `--grid-breakpoint-md` | `.md`            |
| `--grid-breakpoint-lg` | `.lg`            |
| `--grid-breakpoint-xl` | `.xl`            |

Leia a documentação oficial de uso da Grid Bootstrap no endereço [https://getbootstrap.com/docs/4.5/layout/grid/](https://getbootstrap.com/docs/4.5/layout/grid/).

Exemplo de uso:

```html
<div class="container-lg">
    <div class="row">
        <!-- Coluna com largura pré-definida -->
        <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">...</div>
        <!-- Coluna com espaço restante -->
        <div class="col">...</div>
    </div>
</div>
```

### Para quem trabalha com Sass

Use os mixins nativos do Bootstrap quando precisar especificar código por breakpoint. Mais detalhes em <https://github.com/twbs/bootstrap/blob/main/scss/mixins/_breakpoints.scss>.

```scss
.seletor {
    propriedade: valor;
}
@include media-breakpoint-up(md) {
    .seletor {
        propriedade: valor;
    }
}
```

Veja mais informações sobre a Grid Design System GOV.BR em [Fundamentos Visuais --> Sistema de Grid](ds/fundamentos-visuais/grid).

---

## Espaçamentos

Os espaçamentos foram criados com base no utilitário **Spacing** do Bootstrap, portanto sua forma de uso é a mesma. Os valores foram adaptados e/ou acrescentados.

| Estão disponíveis 5 variações de tamanhos: | A direção é aplicada conforme a listagem abaixo: |
| ------------------------------------------ | ------------------------------------------------ |
| **0**: remove o espaçamento                | **b**: bottom                                    |
| **1**: aplica 8px de espaçamento           | **t**: top                                       |
| **2**: aplica 12px de espaçamento          | **l**: left                                      |
| **3**: aplica 16px de espaçamento          | **r**: right                                     |
| **4**: aplica 24px de espaçamento          | **x**: horizontal                                |
| **5**: aplica 40px de espaçamento          | **y**: vertical                                  |

Estão disponíveis espaçamentos com base nos tokens de espaçamento do Design System GOV.BR também, veja a tabela abaixo:

| Variação  | Token aplicado          | Valor aplicado |
| --------- | ----------------------- | -------------- |
| **half**  | `--spacing-scale-half`  | 4px            |
| **base**  | `--spacing-scale-base`  | 8px            |
| **baseh** | `--spacing-scale-baseh` | 12px           |
| **2x**    | `--spacing-scale-2x`    | 16px           |
| **2xh**   | `--spacing-scale-2xh`   | 20px           |
| **3x**    | `--spacing-scale-3x`    | 24px           |
| **3xh**   | `--spacing-scale-3xh`   | 28px           |
| **4x**    | `--spacing-scale-4x`    | 32px           |
| **4xh**   | `--spacing-scale-4xh`   | 36px           |
| **5x**    | `--spacing-scale-5x`    | 40px           |
| **5xh**   | `--spacing-scale-5xh`   | 44px           |
| **6x**    | `--spacing-scale-6x`    | 48px           |
| **7x**    | `--spacing-scale-7x`    | 56px           |
| **8x**    | `--spacing-scale-8x`    | 64px           |
| **9x**    | `--spacing-scale-9x`    | 72px           |
| **10x**   | `--spacing-scale-10x`   | 80px           |

O espaçamento pode ser aplicado em _margin_ (`m-*`) ou _padding_ (`p-*`), onde \* (asterísco) representa o valor do espaçamento.

Sangrias são aplicadas aplicando margens negativas, se `m-1` aplica 8px de margem então `m-n1` aplica -8px de margem. Esta lógica pode ser aplicada em todos os valores disponíveis.

É possivel informar o _breakpoint_ de aplicação do espaçamento conforme o exemplo a seguir:

```html
<div class="row mx-md-n5">
    <div class="col px-md-5"><div class="p-3">Custom column padding</div></div>
    <div class="col px-md-5"><div class="p-3">Custom column padding</div></div>
</div>
```

Leia a documentação oficial de uso do utilitário **Spacing** no endereço [https://getbootstrap.com/docs/4.5/utilities/spacing/](https://getbootstrap.com/docs/4.5/utilities/spacing/).

---

## Cores

Estão disponíveis variações de cores para background, texto e bordas.

-   Para modificar a cor de fundo use `bg-*`
-   Para modificar a cor de texto use `text-*`
-   Para modificar a cor da borda use `border-*`

Onde \* (asterísco) é a cor desejada.

Exemplo de uso:

```html
<div class="bg-primary-default">
    <p class="text-secondary-01">Texto...</p>
</div>
```

> Atenção! O utilitário de cor de borda só deve ser aplicado em elementos que possuam borda.

Veja as cores disponíveis em [Fundamentos Visuais --> Cores](ds/fundamentos-visuais/cores).

---

## Textos

Todos começam com o prefixo `text-*`, onde \* (asterísco) deve ser substituído pelo valor desejado.

| Alinhamento | Transformação | Pesos       | Tamanhos |
| ----------- | ------------- | ----------- | -------- |
| center      | lowercase     | thin        | down-01  |
| justify     | uppercase     | extra-light | down-02  |
| left        | capitalize    | light       | down-03  |
| right       |               | regular     | up-01    |
|             |               | medium      | up-02    |
|             |               | semi-bold   | up-03    |
|             |               | bold        | up-04    |
|             |               | extra-bold  | up-05    |
|             |               | black       | up-06    |
|             |               |             | up-07    |

Mais detalhes sobre tipografia em [Fundamentos Visuais --> Tipografia](ds/fundamentos-visuais/tipografia).
