# Design System: Implementação

Este projeto é um exemplo de implementação de um `Design System` (DS), desenvolvido em `React` e utilizando a ferramenta `Storybook` para documentação dos componentes.

## Desenvolvimento

**Ferramentas e Metodologias**
1. Para a escolha da stack, considerei importante conseguir construir de forma rápida um MVP da implementação, que seja escalável e que, de fato, entregue o valor que se propõe. 
Além disso, para `Design Systems` é importante que se utilize uma arquitetura baseada em componentes, que sejam independentes e reusáveis. Sendo assim, escolhi desenvolver este projeto utilizando `React`, considerando as características já citadas e também que é uma biblioteca muito difundida no mercado, que oferece estabilidade no desenvolvimento e que eu já estou familiarizado, tornando o processo de desenvolvimento mais rápido e eficaz.

2. Para a documentação dos componentes criados, utilizei a ferramenta [Storybook](https://storybook.js.org/), que ficou bastante conhecida no mercado para a construção de componentes e páginas independentes, com ferramentas de testes e desenvolvimento que suportam diversas Web Stacks como React, Vue, e Angular, o que pode ser vantajoso para um DS, sendo mais adaptável a possíveis demandas de tecnologia do negócio. Mesmo possuindo suporte a `TypeScript`, optei por desenvolver as `stories` de cada componente utilizando `JavaScript`, dado que a implementação não demandava uma maior complexidade.

3. Como este é um projeto que estou começando do zero, optei por seguir a metodologia `Atomic Design` para estruturar os componentes no código, considerando que ela oferece uma grande vantagem em termos de organização e consistência do sistema, facilitando também sua escalabilidade. Sendo assim, os componentes desenvolvidos nesta primeira versão, estão divididos em `Atoms` e `Molecules`.

4. Para o estilo dos componentes, decidi utilizar `SASS`, que possui boa compatibilidade com os componentes em React e funciona com o `Style Dictionary` para gerenciar os `Design Tokens`. `Style Dictionary` é um sistema criado pela Amazon para definir estilos em qualquer plataforma ou linguagem. Sendo assim, foi utilizado um arquivo `JSON` de `Design Tokens`, que o `Style Dictionary` consome e gera as variáveis de estilo globais (em `SASS`) a serem utilizadas no projeto, conforme o design proposto. Essas variáveis estão globais, facilitando o porte para outros projetos, e utilização em componentes que podem não estar necessariamente em um `Design System`, mas que precisam seguir os padrões de design, de uma empresa, por exemplo.

5. O Storybook possui um conjunto de `Addons`, que são basicamente extensões que adicionam novas funcionalidades e não vêm por padrão no core da ferramenta. Utilizei o addon `@storybook/addon-a11y` para realizar testes de acessibilidade nos componentes, sendo assim, para cada componente novo que é adicionado, é possível verificar um relatório de acessibilidade baseado no `WCAG` (Web Content Accessibility Guidelines). O interessante é que ele possui opções de configuração, que permitem adaptá-lo para outros padrões de acessibilidade mais específicos conforme a demanda.

6. Tendo como base o desenvolvimento orientado a testes, utilizei a `React Test Library`, que oferece diversos Helpers para a construção de testes, com `Jest` para a criação dos testes unitários de cada componente. Escolhi o `TDD` considerando que ele é  bastante recomendado para um melhor desenvolvimento de códigos.

**Estrutura de Pastas**
```
├── README.md
├── sd.config.js
├── .storybook/
│   ├── main.js
│   ├── preview.js
├── design-tokens/
│   ├── base.json
├── global_styles/
│   ├── scss/
│      ├── _variables.scss
├── public/
│      ├── global_base.css
│      ├── index.html
├── src/
│   ├── __tests__/
│   ├── components/
│      ├── atoms/
│      ├── molecules/
│   ├── App.js
│   ├── App.scss
├── 
```
1. A pasta `.storybook/` possui os arquivos de configuração do `Storybook`, por exemplo, para a adição de `Addons` e estilos globais para os componentes da ferramenta. No arquivo `preview.js` é onde podemos adicionar esses estilos, e nele eu importei o arquivo `global_styles.css` (que está na pasta `public`), que basicamente serve para redefinir estilos próprios de elementos do `HTML`, para não afetarem os componentes que criei no projeto. Além disso, também o utilizei para importar a fonte externa `Archivo` utilizada no design dos componentes. Esse mesmo arquivo foi importado no `index.html` (também na pasta `public`), para ser utilizado no projeto `Sample` que criei para testar os componentes criados. 

2. Na pasta `design-tokens/`, está o arquivo `base.json`, com os `Tokens` que serão consumidos pelo `Style Dictionary` para a criação das variáveis de estilo globais. Já na pasta `global_styles/scss/` está o arquivo `_variables.css` que contém o output do `Style Dictionary`. Para configurar a localização destas pastas, e os arquivos de input e output, criei o arquivo `sd.config.js`, com as configurações gerais do `Style Dictionary`, e passo ele no build da ferramenta, através do script `build-style-dictionary` no `package.json`.

3. Na pasta `src/__tests__` estão todos os testes unitários que criei para os componentes, e dentro da pasta `src/components` está implementada a estrutura do `Atomic Design`, com os componentes separados nas pastas `atoms/` e `molecules/`.

4. No arquivo `App.js` está a implementação de um projeto `Sample`, para testar os componentes, que utiliza também os tokens de espaçamento para a página aplicados no arquivo `App.scss`.

\
**Versões**
1. Para o `React`, utilizei a versão 18 (mais recente), o que inicialmente não me ofereceu desvantagem, mas por ser uma versão muito nova da biblioteca, talvez em termos consistência e escalabilidade do projeto, seja necessária uma análise da estabilidade dessa nova versão.

2. Já para o `Storybook`, também utilizei a versão mais recente, a 7. Aqui eu preciso ponderar que com a minha experiência com a versão mais nova, notei que existem alguns `Addons` conhecidos (como um que integra o `Figma` ao projeto e exibe os designs para fins de comparação com a implementação) que ainda não possuem suporte desta versão, e por isso também acredito que seja um ponto a considerar para o prosseguimento do projeto.

## Passos Futuros
Nesta seção, irei apresentar algumas sugestões para a continuidade deste projeto, que não foram aplicadas ainda, mas que seriam de grande importância em um cenário de escalabilidade e desenvolvimento para o mercado e grandes empresas.

1. Um próximo passo seria encapsular o projeto em uma biblioteca, utilizando, por exemplo, o Rollup, que é um empacotador de módulos `JavaScript`, permitindo e exportar a primeira versão da aplicação para outros projetos.

2. Existe um [plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) no `Figma` para a criação de um `JSON` de `Design Tokens`, baseados nos designs criados dentro da plataforma. Pode ser criado um processo, integrando o Figma ao projeto através do `Git`, em que o `JSON` gerado no `Figma` é direcionado para o `Style Dictionary` para ser consumido e criado as variáveis de estilo baseadas nos `Design Tokens`. Esse processo pode ser bastante vantajoso durante o desenvolvimento de um DS, visto que à medida que um design é atualizado, suas novas características são atualizadas no projeto para serem utilizadas pelos componentes. Pode inclusive contribuir para gerar menos inconsistências entre o design no `Figma` e a implementação em código.

3. Reorganizar o arquivo de `Design Tokens`, para serem adaptados a uma estrutura que permita que sejam utilizados em diferentes projetos e não apenas nos projetos do `Design System` em si, em empresas esse cenário pode ser bem importante.

4. Estudar ferramentas e métodos de estilo que facilitem, por exemplo, a implementação de variantes dos componentes, e métodos que consigam permitir uma maior "desacoplação" do `CSS` dentro do projeto, pois esse tipo de arquitetura pode facilitar uma migração de todos esses estilos para a implementação de um DS em outra biblioteca ou `framework web`. 

5. É importante também fundamentar mais as práticas de acessibilidade dos componentes, existem bibliotecas como, por exemplo, `Radix`, que já implementam diversas regras de acessibilidade, e seu uso se torna bastante vantajoso em um DS.

6. No desenvolvimento deste projeto, foram criados os testes unitários para os componentes, mas o Storybook possui o addon `@storybook/addon-storyshots` que habilita testes de `snapshots` nos componentes, e é também uma ótima ferramenta para ajudar a validar a implementação dos componentes com os designs propostos. Inclusive, o `Storybook` também oferece suporte para integração com os testes unitários, como também de testes end-to-end com `Cypress`. Essas são ferramentas essenciais para escalar projetos como esse, e garantir um desenvolvimento com consistência e segurança.

7. Por fim, também é importante considerar a implementação de uma `pipeline`, métodos de `CI/CD`, com processos automatizados de integração de ferramentas, como sugerido no ponto 1, utilizando versionamento de código com Git para que uma equipe de desenvolvedores consigam trabalhar em conjunto no projeto.

## Sugestões de conteúdo
Aqui alguns dos conteúdos que consumi sobre Design System:

1. [Design System: o que é e quais os benefícios?](https://medium.com/ipnet-growth-partner/design-system-o-que-e-438773dd811)
2. [Criando uma biblioteca de Design System utilizando React](https://medium.com/iclubs/criando-uma-biblioteca-de-design-system-utilizando-react-214f31219a33) 
3. [Documentando seu front-end com Storybook](https://www.youtube.com/watch?v=VmPbKj3uekE)
4. [Design system - desafios e soluções ao implementar padrões](https://www.youtube.com/watch?v=756YavO_Y38)