# Botão

Estão disponíveis 4 tipos de botões para uso no DS-Gov:

- Primário
- Secundário
- Terciário
- Cancelar

Toda **ação principal** na tela deve ser usada com o **botão primário**. Nunca use mais de 1 botão primário, pois confunde o usuário em sua tomada de decisão.

Para **ações subjetivas** ou de **menor importância** devem ser usados os **botões secundários**. Este botão pode ser usado quantas vezes forem necessárias na tela.

Há situações em que um botão deverá se comportar como um **simples link**, nesses casos use o **botão terciário**.

Cor no botão sinaliza uma chamada à ação, por isso o botão **Cancelar** possui a mesma cor de um texto padrão na tela. Além disso, é preciso passar a impressão de que o botão não fará alterações no sistema e será sua fuga da ação.

[https://uxmovement.com/buttons/why-cancel-buttons-should-never-have-a-color/](https://uxmovement.com/buttons/why-cancel-buttons-should-never-have-a-color/)

[https://tableless.com.br/botoes-em-ui-design/](https://tableless.com.br/botoes-em-ui-design/)

## Como usar o botão

O botão do DS-Gov pode ser usado em tags de `<button>` ou `<a>`. São necessárias 2 classes para uso:
- `br-btn`: necessário para a formatação padrão do componente;
- `is-[tipo]`: necessário para formatar de forma específica o botão. Os tipos disponíveis são `primary`, `secondary`, `tertiary` ou `cancel`.

## Exemplos de uso

```html
<button class="br-btn is-primary">Entrar</button>
<button class="br-btn is-secondary">Cadastrar</button>
<button class="br-btn is-tertiary">Adicionar</button>
<button class="br-btn is-cancel">Cancelar</button>
```

## Regras especiais dos botões

Em _smartphones_ o botão é expandido para toda a área da tela. Caso existam vários botões eles ficarão um abaixo do outro. A distância entre os botões é de 16px.

Para os demais dispositivos os botões possuem o tamanho mínimo de 144px. Nos casos de mais de 1 botão por linha é aplicado um distanciamento automático de 24px.

Existem 3 estados aplicáveis aos botões independente do tipo usado:

- `focus`: o botão está com o foco ativado (Navegação por tab);
- `hover`: o botão está com o cursor ativado (Navegação por mouse);
- `disabled`: o botão está desativado.

Os 3 estados também podem ser aplicados por classe. O uso via classe deve ser usado com o prefixo `is-` Exemplo:

```html
<button class="br-btn is-secondary is-hover">Cadastrar</button>
```

> **Atenção**! O estado **disabled** na tag `<button>` deve ser aplicado usando a propriedade `disabled` e não usando classe `is-disabled`. 

Caso os botões estejam declarados dentro de um `field` do formulário do DS-Gov o ordenamento pode variar. Veja a documentação de formulários para mais detalhes.
