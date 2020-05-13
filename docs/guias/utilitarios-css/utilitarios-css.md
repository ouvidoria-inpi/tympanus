## Cores

Estão disponíveis variações de cores para background, texto e bordas.

-   Para modificar a cor de fundo use `.bg-*`
-   Para modificar a cor de texto use `text-*`
-   Para modificar a cor da borda use `border-*`

Onde \* (asterísco) é a cor desejada.

Exemplo de uso:

```html
<div class="bg-primary-default">
    <p class="text-secondary-01">Texto...</p>
</div>
```

Veja as cores disponíveis em [Fundamentos Visuais --> Cores](ds/fundamentos-visuais/cores).

---

## Textos

Use os utilitários de texto para não precisar reescrever CSS.

Todos começam com o prefixo `text-*`, onde \* (asterísco) deve ser substituído pelo valor desejado.

Alinhamento:

-   **center**: centraliza o texto
-   **justify**: justifica o texto
-   **left**: alinha o texto à esquerda
-   **right**: alinha o texto à direita

Transformação:

-   **lowercase**: letras em minúsculo
-   **uppercase**: letras em maiúsculo
-   **capitalize**: primeira letra em maiúsculo

Pesos:

-   **thin**
-   **extra-light**
-   **light**
-   **regular**
-   **medium**
-   **semi-bold**
-   **bold**
-   **extra-bold**
-   **black**

Tamanhos:

-   **down-01**: texto base \* 0.833
-   **down-02**: texto base \* 0.694
-   **down-03**: texto base \* 0.579
-   **up-01**: texto bas \* 1.2
-   **up-02**: texto base \* 1.44
-   **up-03**: texto base \* 1.728
-   **up-04**: texto base \* 2.074
-   **up-05**: texto base \* 2.488
-   **up-06**: texto base \* 2.986
-   **up-07**: texto base \* 3.583

Mais detalhes sobre os tamanhos de fontes em [Fundamentos Visuais --> Tipografia](ds/fundamentos-visuais/tipografia).

---

## Espaçamentos

Os espaçamentos foram criados com base no utilitário **Spacing** do Bootstrap, portanto sua forma de uso é parecida. Os valores foram adaptados e/ou acrescentados.

Estão disponíveis 5 variações de tamanhos. Veja a seguir os valores:

-   **0**: remove o espaçamento
-   **1**: aplica 8px de espaçamento
-   **2**: aplica 12px de espaçamento
-   **3**: aplica 16px de espaçamento
-   **4**: aplica 24px de espaçamento
-   **5**: aplica 40px de espaçamento

Você poderá aplicar os valores em margens (`m-*`) ou padding (`p-*`), onde \* (asterísco) representa o valor do espaçamento.

A direção é aplicada conforme a listagem abaixo:

-   **b**: bottom
-   **t**: top
-   **l**: left
-   **r**: right
-   **x**: horizontal
-   **y**: vertical

Leia a documentação oficial de uso do utilitário **Spacing** no endereço [https://getbootstrap.com/docs/4.3/utilities/spacing/](https://getbootstrap.com/docs/4.3/utilities/spacing/).

Exemplo de uso:

```html
<header id="header" class="page-header pt-1 pb-2 pt-md-3 pb-md-4">
    <!-- Acessibilidade -->
    <div class="accessibility py-half py-lg-3"></div>
    <!-- Logo -->
    <div id="logo" class="logo my-2 my-sm-3 my-lg-4"></div>
</header>
```

## Grid

A Grid é a mesma grid Bootstrap, portanto sua forma de uso é a mesma. Os tamanhos de breakpoints, containers e gutters possuem valores diferenciados.

Leia a documentação oficial de uso da Grid Bootstrap no endereço [https://getbootstrap.com/docs/4.3/layout/grid/](https://getbootstrap.com/docs/4.3/layout/grid/).

Exemplo de uso:

```html
<div class="container">
    <div class="row">
        <!-- Coluna com largura pré-definida -->
        <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">...</div>
        <!-- Coluna com espaço restante -->
        <div class="col">...</div>
    </div>
</div>
```

Veja mais informações em [Fundamentos Visuais --> Sistema de Grid](ds/fundamentos-visuais/grid).
