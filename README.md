# Calculadora de Média do Aluno

Este projeto consiste em um sistema para calcular a média das notas de um aluno. O sistema foi desenvolvido utilizando **Node.js** para o backend e **HTML, CSS, e JavaScript** para o frontend. 

## Tecnologias Usadas

- **Node.js** (com o framework **Express**) para o backend.
- **HTML** para a estrutura da página web.
- **CSS** para o design da interface.
- **JavaScript** para manipulação do DOM e envio de dados ao backend via AJAX.

## Funcionalidade

O sistema permite ao usuário inserir várias notas, separadas por vírgula, em um formulário. O servidor Node.js recebe essas notas, calcula a média e retorna o resultado para ser exibido na página.

## Como Rodar o Projeto

### 1. Clone o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone https://github.com/IcaroSenaDev/media-aluno-web.git
cd media-aluno-web

```
### 2. Instale as Dependências

Antes de rodar o projeto, é necessário instalar as dependências do Node.js. No terminal, execute o seguinte comando:
```
npm install
```
### 3. Rodando o Servidor

Para iniciar o servidor, execute:
```
node server.js
```
## Abra o navegador e acesse http://localhost:3000. Você verá a interface da calculadora de média.

### 5. Usando a Calculadora

- **Insira as notas no formato nota1, nota2, nota3 no campo de texto.**
- **Clique no botão "Calcular Média".**
- **O sistema calculará a média e exibirá o resultado logo abaixo do botão.**
