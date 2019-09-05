# Cores

A aplicação correta da paleta de cores traz consistência ao Design System e contribui para garantir uma interface unificada facilmente reconhecível pelos seus usuários. É fundamentada que essa paleta esteja alinhada aos **Princípios do Design System** e seja aplicada corretamente na biblioteca de componentes contribuindo para o equilíbrio entre as diversos produtos e sistemas do governo.

## Como usar as cores em Sistemas Web

Carregue as folhas de estilo em seu sistema. Mais informações em [**Introdução --> Como começar**](ds/introducao/como-comecar).

As cores podem ser aplicadas como **cor de texto** ou **cor de fundo**. Use a classe `text-cor` para aplicar a cor ao texto e `bg-cor` para aplicar como cor de fundo, onde **cor é o nome do token** da cor (veja na tabela de cores).

Exemplo de uso:

```html
<p class="bg-primary text-white">
  Exemplo de aplicação de cor.
</p>
```

## Cores Primárias

As cores primárias são exibidas com mais frequência nas telas, aparecem nos componentes e títulos do DS e criam uma identidade única para as interfaces. A cor principal #1351B4 é a mais utilizadas e suas variantes podem ser utilizadas para compor o layout e distinguir elementos dentro da interface.

São utilizadas nos botões, elementos do cabeçalho, títulos e principais componentes.

<div class="br-table">
<div class="table">
  <table>
    <thead>
      <tr>
        <th>Exemplo</th>
        <th>Valores</th>
        <th>Token</span></th>
        <th>Usos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="bg-primary-pastel-1" style="border-radius: 4px; box-shadow: 0 0 0 1px #fff; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#dbe8fb</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(219, 232, 251)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(216, 80%, 92%)</strong></span>
        </td>
        <td><span class="text-nowrap">primary-pastel-1</span></td>
        <td>"Hover" do Background da Linha da Tabela</td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary-pastel-2" style="border-radius: 4px; box-shadow: 0 0 0 1px #fff; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#c5d4eb</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(197, 212, 235)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(216, 49%, 85%)</strong></span>
        </td>
        <td><span class="text-nowrap">primary-pastel-2</span></td>
        <td>Linhas (Separadores) da Tabela</td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary-lighten-25" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#5992ed</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(89, 146, 237)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(217, 80%, 64%)</strong></span>
        </td>
        <td><span class="text-nowrap">primary-lighten-25</span></td>
        <td>"Hover" do Acordeão Negativo</td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary-lighten-15" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#2670e8</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(38, 112, 232)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(217, 81%, 53%)</strong></span>
        </td>
        <td><span class="text-nowrap">primary-lighten-15</td>
        <td>"Hover" dos componentes e ícones</span>, Seleção da linha em tabelas, "Focus" de input e ícones de Cards</td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#1351b4</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(19, 81, 180)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(217, 81%, 39%)</strong></span>
        </td>
        <td><span class="text-nowrap">primary</span></td>
        <td>Botões, Links, Títulos, Ícones</td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary-darken-15" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#0c326f</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(12, 50, 111)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(217, 80%, 24%)</strong></span>
        </td>
        <td><span class="text-nowrap">primary-darken-15</span></td>
        <td>Títulos, Menu e Rodapé do Portal</td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary-darken-25" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#071d41</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(7, 29, 65)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(217, 81%, 14%)</strong></span>
        </td>
        <td><span class="text-nowrap">primary-darken-25</span></td>
        <td>Cabeçalho, Títulos do Portal</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

## Cores secundárias

As cores secundárias são utilizadas em situações específicas como cores de apoio às primárias. No DSGOV foi escolhida a cor verde para ser utilizadas em elementos que merecem um destaque maior no layout (exemplo os botões de "call to action").

Além do verde foi proposta uma paleta em tons de cinza que é aplicada nos textos e em alguns grafismos que compõem as interfaces digitais (linhas separadoras, contornos, componentes desabilitados).

<div class="br-table">
<div class="table">
  <table>
    <thead>
      <tr>
        <th>Exemplo</th>
        <th>Valores</th>
        <th>Token</span></th>
        <th>Usos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="bg-secondary" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#268744</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(38, 135, 68)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(139, 56%, 34%)</strong></span>
        </td>
        <td><span class="text-nowrap">secondary</span></td>
        <td>Botão "Call to Action" e Badges</td>
      </tr>
      <tr>
        <td>
          <div class="bg-white" style="border-radius: 4px; box-shadow: 0 0 0 1px #cccccc; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#ffffff</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(255, 255, 255)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 100%)</strong></span>
        </td>
        <td><span class="text-nowrap">white</span></td>
        <td>Backgrounds e textos</td>
      </tr>
      <tr>
        <td>
          <div class="bg-gray-1" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#f8f8f8</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(248, 248, 248)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 97%)</strong></span>
        </td>
        <td><span class="text-nowrap">gray-1</span></td>
        <td>Backgrounds</td>
      </tr>
      <tr>
        <td>
          <div class="bg-gray-2" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#ededed</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(237, 237, 237)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 93%)</strong></span>
        </td>
        <td><span class="text-nowrap">gray-2</span></td>
        <td>Backgrounds dos inputs desabilitados</td>
      </tr>
      <tr>
        <td>
          <div class="bg-gray-3" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#cccccc</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(204, 204, 204)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 80%)</strong></span>
        </td>
        <td><span class="text-nowrap">gray-3</span></td>
        <td>Linhas e separadores</td>
      </tr>
      <tr>
        <td>
          <div class="bg-gray-4" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#9d9d9d</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(157, 157, 157)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 62%)</strong></span>
        </td>
        <td><span class="text-nowrap">gray-4</span></td>
        <td>Placeholders e ícones desabilitados</td>
      </tr>
      <tr>
        <td>
          <div class="bg-gray-5" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#888888</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(136, 136, 136)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 53%)</strong></span>
        </td>
        <td><span class="text-nowrap">gray-5</span></td>
        <td>Backgrounds dos botões desabilitados e contorno dos inputs</td>
      </tr>
      <tr>
        <td>
          <div class="bg-gray-6" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#555555</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(85, 85, 85)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 33%)</strong></span>
        </td>
        <td><span class="text-nowrap">gray-6</span></td>
        <td>Textos base e Ícones</td>
      </tr>
      <tr>
        <td>
          <div class="bg-gray-7" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#333333</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(51, 51, 51)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 20%)</strong></span>
        </td>
        <td><span class="text-nowrap">gray-7</span></td>
        <td>Textos</td>
      </tr>
      <tr>
        <td>
          <div class="bg-black" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#000000</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(0, 0, 0)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 0%, 0%)</strong></span>
        </td>
        <td><span class="text-nowrap">black</span></td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

## Cores de aviso

As cores de aviso foram escolhidas para serem aplicadas em situações que exigem mais atenção do usuário, como ocorre nas mensagens de Feedback.

<div class="br-table">
<div class="table">
  <table>
    <thead>
      <tr>
        <th>Exemplo</th>
        <th>Valores</th>
        <th>Token</span></th>
        <th>Usos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="bg-warning" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#ffcd07</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(255, 205, 7)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(48, 100%, 51%)</strong></span>
        </td>
        <td><span class="text-nowrap">warning</span></td>
        <td>Mensagens de aviso</td>
      </tr>
      <tr>
        <td>
          <div class="bg-success" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#168821</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(22, 136, 33)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(126, 72%, 31%)</strong></span>
        </td>
        <td><span class="text-nowrap">success</span></td>
        <td>Mensagens de sucesso e validações positivas</td>
      </tr>
      <tr>
        <td>
          <div class="bg-danger" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#e60000</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(230, 0, 0)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(0, 100%, 45%)</strong></span>
        </td>
        <td><span class="text-nowrap">danger</span></td>
        <td>Mensagens de erro e validações negativas</td>
      </tr>
      <tr>
        <td>
          <div class="bg-info" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#155bcb</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(21, 91, 203)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(217, 81%, 44%)</strong></span>
        </td>
        <td><span class="text-nowrap">info</span></td>
        <td>Mensagens informativas</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

## Cores de apoio

As cores de apoio podem ser aplicadas quando houver necessidade de variação de tons em alguns elementos da tela.

<div class="br-table">
<div class="table">
  <table>
    <thead>
      <tr>
        <th>Exemplo</th>
        <th>Valores</th>
        <th>Token</span></th>
        <th>Usos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="bg-teal" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#36a191</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(54, 161, 145)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(171, 50%, 42%)</strong></span>
        </td>
        <td><span class="text-nowrap">teal</span></td>
        <td>-</td>
      </tr>
      <tr>
        <td>
          <div class="bg-yellow" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#f2e317</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(242, 227, 23)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(56, 89%, 52%)</strong></span>
        </td>
        <td><span class="text-nowrap">yellow</span></td>
        <td>-</td>
      </tr>
      <tr>
        <td>
          <div class="bg-orange" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#db4800</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(219, 72, 0)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(20, 100%, 43%)</strong></span>
        </td>
        <td><span class="text-nowrap">orange</span></td>
        <td>-</td>
      </tr>
      <tr>
        <td>
          <div class="bg-brown" style="border-radius: 4px; height: 40px; width: 100px;"></div>
        </td>
        <td>
          <span class="text-nowrap"><strong>#a26739</strong></span> ou 
          <span class="text-nowrap"><strong>rgb(162, 103, 57)</strong></span> ou 
          <span class="text-nowrap"><strong>hsl(26, 48%, 43%)</strong></span>
        </td>
        <td><span class="text-nowrap">brown</span></td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
