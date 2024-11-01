# Lista de Tarefas

Um aplicativo móvel de lista de tarefas desenvolvido com React Native e Expo. O app permite que os usuários adicionem, concluam e removam tarefas de forma simples e intuitiva.

## Funcionalidades

-   Adicionar uma nova tarefa à lista.
-   Marcar uma tarefa como concluída.
-   Remover uma tarefa da lista.
-   Exibir a lista de tarefas, mostrando claramente quais estão pendentes.

## Tecnologias Utilizadas

-   [React Native](https://reactnative.dev/docs/getting-started) Uma biblioteca poderosa para construir aplicativos móveis nativos usando JavaScript e React. Permite que você crie interfaces de usuário ricas e responsivas para dispositivos Android e iOS com um único código-fonte.
-   [Expo](https://docs.expo.dev/) Uma ferramenta e plataforma que simplifica o desenvolvimento de aplicativos React Native. Com Expo, você pode iniciar rapidamente novos projetos, testar seu aplicativo em dispositivos físicos usando um QR Code e acessar uma série de APIs úteis sem complicações.
-   [Styled Components](https://styled-components.com/) Uma biblioteca para estilização de componentes que utiliza a abordagem de CSS-in-JS. Permite que você escreva CSS em arquivos JavaScript, tornando a estilização mais modular e dinâmica, além de promover um melhor isolamento de estilos..
-   [ESLint e Prettier](https://prettier.io/docs/en/) Ferramentas essenciais para garantir a qualidade e a consistência do código. O ESLint ajuda a identificar e corrigir problemas de código, enquanto o Prettier formata automaticamente o código para seguir convenções de estilo, resultando em um código mais limpo e legível.
-   [Expo Google Fonts](https://docs.expo.dev/develop/user-interface/fonts/) Um pacote que facilita a inclusão de fontes do Google Fonts em aplicativos Expo. Neste projeto, a fonte Roboto foi utilizada, proporcionando uma tipografia moderna e legível, ideal para interfaces de usuário.

## Screenshots

<div style="display: flex; gap: 10px;">
    <img src="https://drive.google.com/uc?id=1cy2YTYnkq-gkCjbkbXdeQax-CX5VX9m-" alt="Tela do App" width="200"/>
    <img src="https://drive.google.com/uc?id=1cwXTpbEl3CJCla6C1M3WooENMsOK5u34" alt="Tela do App" width="200"/>
    <img src="https://drive.google.com/uc?id=1cmIAumRsF4tlkKB4Z1sv549deIYxxmKu" alt="Tela do App" width="200"/>
</div>

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

    ```bash
    git clone https://github.com/leopsam/to-do-list.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd to-do-list
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor:
    ```bash
    npm run start
    ```
5. Escolha uma das opções:
    ```bash
     › Scan the QR code above with Expo Go (Android) or the Camera app (iOS)
     › Using Expo Go
     › Press s │ switch to development build
     › Press a │ open Android
     › Press w │ open web
     › Press j │ open debugger
     › Press r │ reload app
     › Press m │ toggle menu
     › Press o │ open project code in your editor
    ```

## Estrutura do Projeto

```bash
├── src
│   ├── app
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── components
│   │   ├── Empty
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Header
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Loading
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Task
│   │   │   ├── index.jsx
│   │   │   └── styles.js
├── App.jsx

```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
