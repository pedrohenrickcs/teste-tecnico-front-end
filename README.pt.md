# Teste técnico Frontend

[[English](README.md) | [Portuguese](README.pt.md)]

Este é um projeto Next.js 14 configurado com TypeScript, Tailwind CSS, Axios e Jest.

## Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina.

> node: v20.12.2

## Instalação

Clone este repositório:
```bash
git clone https://github.com/pedrohenrickcs/teste-tecnico-front-end.git
```
### Navegue até o diretório do projeto:

```bash
cd teste-tecnico-front-end
```

### Instale as dependências:
```bash
npm install
#ou
yarn install
```

### Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em http://localhost:3000.


> Obs: Deixei o meu token disponível, mas caso tenham problemas para testar, basta substituir no arquivo .env do projeto a variável GITHUB_TOKEN, com o novo token criado.


## Scripts Disponíveis
### No diretório do projeto, você pode executar os seguintes scripts:

```bash
> dev: Inicia o servidor de desenvolvimento.
> build: Compila o projeto para produção.
> start: Inicia o servidor de produção.
> lint: Verifica os problemas relacionados ao lint
> test: Executa os testes unitários.
> test:watch: Executa os testes unitários assistido.
```

## Estrutura do Projeto
### A estrutura de pastas do projeto é a seguinte:
```bash
├── public               # Para armazenamento de arquvios estáticos
├── src                  # Raíz do projeto
├── app/                 # Páginas
├── components/          # Componentes reutilizáveis
  ├── common             # Utilitários comuns reutilizáveis
  ├── layout             # Componentes para estrutura de interface
├── context/             # Para gerenciar e compartilhar estados globais
├── enums/               # Armazena conjunto de valores
├── hooks/               # Encapsula lógica reutilizável
├── services/            # Centraliza as APIs
├── types/               # Armazena definições de tipos TypeScript
├── .gitignore           # Arquivos a serem ignorados pelo Git
├── jest.config.js       # Configurações do Jest
├── next.config.js       # Configurações do Next.js
├── package.json         # Arquivo de manifesto do projeto
└── tsconfig.json        # Configurações do TypeScript
└── tailwind.config      # Configurações do Tailwind
```
## Tecnologias Utilizadas

```bash
Next.js 14
TypeScript
Tailwind CSS
Axios
Jest
```

## Deploy com Vercel

Para testar basta acessar a URL: [teste-tecnico-front-end](https://teste-tecnico-front-end-omega.vercel.app/)

---
⌨️ com ❤️ por [Pedro Henrick](https://www.linkedin.com/in/pedro-henrickcs) 😊