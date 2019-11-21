## Cores Alinhadas aos Princípios

### Experiência Única

Nesse sistema, a cor primária #1351B4 e suas variantes (no caso do DSGOV as lighten e darken) foram selecionadas como as cores principais para representar a identidade do Governo Federal.

### Eficiência e Clareza

A cor ajuda a indicar quais elementos são interativos, como eles se relacionam com outros elementos. No DS, o azul #2670E8 foi escolhido como cor de destaque para informar ao usuário que uma ação será executada. O uso da cor é também essencial para dar feedback e comunicar quais informações são importantes e essenciais para o uso dos serviços, sendo assim foi criada uma paleta de cor de avisos, são cores com mais destaque que são utilizadas em botões de ações específicas e em mensagens de alerta.

### Reutilização e Colaboração

Interfaces digitais do governo devem utilizar as cores existentes sempre que possível, mas caso haja necessidade é possível acrescentar um novo tom à paleta de cores do DS. Porém faz-se necessário, que a cor seja testada do ponto de vista de acessibilidade e passe por uma prévia aprovação da equipe de design do DS.

### Acessibilidade

O sistema de serviços deve cumprir as diferentes necessidades de acessibilidade, por causa disso as cores utilizadas no DS foram testadas para que obterem um mínimo contraste e garantissem a legibilidade nas interfaces digitais. Para o texto optou-se pelo uso do cinza #555555 que possui contraste inferior ao preto, mas suficiente para uma boa leitura na tela. O tom neutro, deixa a composição mais leve, tornando a leitura mais agradável.

Outra característica da neutralidade explorada no DS é a aplicação de tons mais claros do cinza em componentes desabilitados. Essa prática já é bastante difundida no meio digital e por isso foi aplicada no DS, afim de comunicar ao usuário que aquele componente não está disponível para o clique.., ou que há uma outra ação que ele precisa realizar para então habilitar o componente.

---

## Testes com ferramentas

Para testar a acessibilidade das cores foram utilizadas as seguintes ferramentas online <https://contrastchecker.com/> e
<https://webaim.org/resources/contrastchecker/>.

### Cores primárias

<div class="br-table">
<div class="table">
  <table>
    <thead>
      <tr>
        <th>Token</th>
        <th>Contraste ideal</th>
        <th>Texto normal</th>
        <th>Texto grande</th>
        <th>Objetos</th>
        <th>Taxa de contraste</th>
      </tr>
    </thead>
    <tbody>
          <tr>
            <td><span class="text-nowrap">primary-pastel-1</span></td>
            <td><span class="text-nowrap">gray-7</span></td>
            <td>
              <div class="d-flex">
              <div class="bg-primary-pastel-1 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: 0 0 0 1px #fff; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
              <div class="bg-primary-pastel-1 text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; box-shadow: 0 0 0 1px #fff; height: 60px; width: 60px;">
                <span>AAA</span>
              </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-primary-pastel-1 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: 0 0 0 1px #fff; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-primary-pastel-1 text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; box-shadow: 0 0 0 1px #fff; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-primary-pastel-1 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: 0 0 0 1px #fff; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>10.19</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">primary-pastel-2</span></td>
            <td><span class="text-nowrap">gray-7</span></td>
            <td>
              <div class="d-flex">
              <div class="bg-primary-pastel-2 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
              <div class="bg-primary-pastel-2 text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
              </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-primary-pastel-2 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-primary-pastel-2 text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-primary-pastel-2 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>8.41</strong>:1</td>
          </tr>
      <tr>
        <td><span class="text-nowrap">primary-lighten-25</span></td>
        <td>white</td>
        <td></td>
        <td>
          <div class="bg-primary-lighten-25 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
            <span>AA</span>
            <span>18pt</span>
          </div>
        </td>
        <td>
          <div class="bg-primary-lighten-25 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
            <i class="fas fa-edit fa-lg"></i>
          </div>
        </td>
        <td><strong>3.1</strong>:1</td>
      </tr>
      <tr>
        <td><span class="text-nowrap">primary-lighten-15</span></td>
        <td>white</td>
        <td>
          <div class="bg-primary-lighten-15 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
            <span>AA</span>
          </div>
        </td>
        <td>
          <div class="d-flex">
            <div class="bg-primary-lighten-15 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
              <span>AA</span>
              <span>18pt</span>
            </div>
            <div class="bg-primary-lighten-15 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
              <span>AAA</span>
              <span>18pt</span>
            </div>
          </div>
        </td>
        <td>
          <div class="bg-primary-lighten-15 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
            <i class="fas fa-edit fa-lg"></i>
          </div>
        </td>
        <td><strong>4.59</strong>:1</td>
      </tr>
      <tr>
        <td>primary</td>
        <td>white</td>
        <td>
          <div class="d-flex">
              <div class="bg-primary text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
              <div class="bg-primary text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
              </div>
          </div>
        </td>
        <td>
          <div class="d-flex">
              <div class="bg-primary text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
                <span>18pt</span>
              </div>
              <div class="bg-primary text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
                <span>18pt</span>
              </div>
          </div>
        </td>
        <td>
          <div class="bg-primary text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
            <i class="fas fa-edit fa-lg"></i>
          </div>
        </td>
        <td><strong>7.33</strong>:1</td>
      </tr>
      <tr>
        <td><span class="text-nowrap">primary-darken-15</span></td>
        <td>white</td>
        <td>
          <div class="d-flex">
              <div class="bg-primary-darken-15 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
              <div class="bg-primary-darken-15 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
              </div>
          </div>
        </td>
        <td>
          <div class="d-flex">
              <div class="bg-primary-darken-15 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
                <span>18pt</span>
              </div>
              <div class="bg-primary-darken-15 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
                <span>18pt</span>
              </div>
          </div>
        </td>
        <td>
          <div class="bg-primary-darken-15 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
            <i class="fas fa-edit fa-lg"></i>
          </div>
        </td>
        <td><strong>12.34</strong>:1</td>
      </tr>
      <tr>
        <td><span class="text-nowrap">primary-darken-25</span></td>
        <td>white</td>
        <td>
          <div class="d-flex">
              <div class="bg-primary-darken-25 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
              <div class="bg-primary-darken-25 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
              </div>
          </div>
        </td>
        <td>
          <div class="d-flex">
              <div class="bg-primary-darken-25 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
                <span>18pt</span>
              </div>
              <div class="bg-primary-darken-25 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
                <span>18pt</span>
              </div>
          </div>
        </td>
        <td>
          <div class="bg-primary-darken-25 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
            <i class="fas fa-edit fa-lg"></i>
          </div>
        </td>
        <td><strong>16.65</strong>:1</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

### Cores secundárias

<div class="br-table">
  <div class="table">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Contraste ideal</th>
            <th>Texto normal</th>
            <th>Texto grande</th>
            <th>Objetos</th>
            <th>Taxa de contraste</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>secondary</td>
            <td>white</td>
            <td>
              <div class="bg-secondary text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-secondary text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-secondary text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-secondary text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4.53</strong>:1</td>
          </tr>
          <tr>
            <td>white</td>
            <td><span class="text-nowrap">gray-6</span></td>
            <td>
              <div class="d-flex">
                  <div class="has-border bg-white text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
                  <div class="has-border bg-white text-gray-6 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AAA</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="has-border bg-white text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="has-border bg-white text-gray-6 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="has-border bg-white text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>7.45</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">gray-1</span></td>
            <td><span class="text-nowrap">gray-6</span></td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-1 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
                  <div class="bg-gray-1 text-gray-6 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-1 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AA</span>
                      <span>18pt</span>
                    </div>
                    <div class="bg-gray-1 text-gray-6 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AAA</span>
                      <span>18pt</span>
                    </div>
              </div>
            </td>
            <td>
              <div class="bg-gray-1 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>7.01</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">gray-2</span></td>
            <td><span class="text-nowrap">gray-6</span></td>
            <td>
              <div class="bg-gray-2 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-2 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-gray-2 text-gray-6 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-gray-2 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>6.36</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">gray-3</span></td>
            <td><span class="text-nowrap">gray-6</span></td>
            <td>
              <div class="bg-gray-3 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-3 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-gray-3 text-gray-6 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-gray-3 text-gray-6 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4.64</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">gray-4</span></td>
            <td><span class="text-nowrap">gray-7</span></td>
            <td>
              <div class="bg-gray-4 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-4 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-gray-4 text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-gray-4 text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4.67</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">gray-5</span></td>
            <td>white</td>
            <td></td>
            <td>
              <div class="bg-gray-5 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
                <span>18pt</span>
              </div>
            </td>
            <td>
              <div class="bg-gray-5 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>3.54</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">gray-6</span></td>
            <td>white</td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-6 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
                  <div class="bg-gray-6 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-6 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-gray-6 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-gray-6 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>7.45</strong>:1</td>
          </tr>
          <tr>
            <td><span class="text-nowrap">gray-7</span></td>
            <td>white</td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-7 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
                  <div class="bg-gray-7 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-gray-7 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-gray-7 text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-gray-7 text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>12.63</strong>:1</td>
          </tr>
          <tr>
            <td>black</td>
            <td>white</td>
            <td>
              <div class="d-flex">
                  <div class="bg-black text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
                  <div class="bg-black text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-black text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-black text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-black text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>21</strong>:1</td>
          </tr>
        </tbody>
      </table>
  </div>
</div>

### Cores de aviso

<div class="br-table">
  <div class="table">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Contraste ideal</th>
            <th>Texto normal</th>
            <th>Texto grande</th>
            <th>Objetos</th>
            <th>Taxa de contraste</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>warning</td>
            <td><span class="text-nowrap">gray-7</span></td>
            <td>
              <div class="d-flex">
              <div class="bg-warning text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AA</span>
              </div>
              <div class="bg-warning text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                <span>AAA</span>
              </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-warning text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="bg-warning text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="bg-warning text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>8.41</strong>:1</td>
          </tr>
          <tr>
            <td>success</td>
            <td>white</td>
            <td>
                  <div class="has-border bg-success text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="has-border bg-success text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
                  <div class="has-border bg-success text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AAA</span>
                    <span>18pt</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="has-border bg-success text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4.58</strong>:1</td>
          </tr>
          <tr>
            <td>danger</td>
            <td>white</td>
            <td>
                  <div class="bg-danger text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-danger text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AA</span>
                      <span>18pt</span>
                    </div>
                    <div class="bg-danger text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AAA</span>
                      <span>18pt</span>
                    </div>
              </div>
            </td>
            <td>
              <div class="bg-danger text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4.81</strong>:1</td>
          </tr>
          <tr>
            <td>info</td>
            <td>white</td>
            <td>
                  <div class="bg-info text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-info text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AA</span>
                      <span>18pt</span>
                    </div>
                    <div class="bg-info text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AAA</span>
                      <span>18pt</span>
                    </div>
              </div>
            </td>
            <td>
              <div class="bg-info text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>6.19</strong>:1</td>
          </tr>
        </tbody>
      </table>
  </div>
</div>

### Cores de apoio

<div class="br-table">
  <div class="table">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Contraste ideal</th>
            <th>Texto normal</th>
            <th>Texto grande</th>
            <th>Objetos</th>
            <th>Taxa de contraste</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>teal</td>
            <td>gray-7</td>
            <td></td>
            <td>
                  <div class="has-border bg-teal text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
            </td>
            <td>
              <div class="has-border bg-teal text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; box-shadow: inset 0 0 0 1px #ccc; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4</strong>:1</td>
          </tr>
          <tr>
            <td>yellow</td>
            <td>gray-7</td>
            <td>
              <div class="d-flex">
                  <div class="bg-yellow text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
                  <div class="bg-yellow text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AAA</span>
                  </div>
              </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-yellow text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AA</span>
                      <span>18pt</span>
                    </div>
                    <div class="bg-yellow text-gray-7 d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AAA</span>
                      <span>18pt</span>
                    </div>
              </div>
            </td>
            <td>
              <div class="bg-yellow text-gray-7 d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>9.49</strong>:1</td>
          </tr>
          <tr>
            <td>orange</td>
            <td>white</td>
            <td></td>
            <td>
                  <div class="has-border bg-orange text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                    <span>18pt</span>
                  </div>
            </td>
            <td>
              <div class="has-border bg-orange text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4.33</strong>:1</td>
          </tr>
          <tr>
            <td>brown</td>
            <td>white</td>
            <td>
                  <div class="bg-brown text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                    <span>AA</span>
                  </div>
            </td>
            <td>
              <div class="d-flex">
                  <div class="bg-brown text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AA</span>
                      <span>18pt</span>
                    </div>
                    <div class="bg-brown text-white d-flex flex-column justify-content-center align-items-center ml-1" style="border-radius: 4px; height: 60px; width: 60px;">
                      <span>AAA</span>
                      <span>18pt</span>
                    </div>
              </div>
            </td>
            <td>
              <div class="bg-brown text-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 4px; height: 60px; width: 60px;">
                <i class="fas fa-edit fa-lg"></i>
              </div>
            </td>
            <td><strong>4.63</strong>:1</td>
          </tr>
        </tbody>
      </table>
  </div>
</div>
