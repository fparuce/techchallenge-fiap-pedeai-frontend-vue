# 🍔 Pede.Aí - Frontend

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vuedotjs)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

<div align="center">
  <img src="public/pedeai-logo.png" alt="PedeAi Logo" width="500">
</div>

## 📌 Visão Geral

Aplicação frontend para rede de fastfood desenvolvida com Vue.js 3 e TypeScript. Oferece interface moderna para clientes fazerem pedidos e painel administrativo para gerenciamento.

## ✨ Funcionalidades

### 🧑‍💻 Cliente
- [ ] Catálogo de produtos organizado por categorias
- [ ] Carrinho de compras interativo
- [ ] Fluxo de pedido intuitivo
- [ ] Histórico de pedidos

### 🛠️ Administrativo
- [ ] Autenticação de administradores
- [ ] CRUD de produtos
- [ ] Dashboard de pedidos
- [ ] Relatórios de vendas

## 🚀 Começando

### Pré-requisitos
- Node.js 16+
- npm 8+ ou yarn 1.22+
- API backend configurada (veja [backend repository](https://github.com/rhazevedodev/techchallenge-fiap-pedeai))

### Instalação
```bash
# Clone o repositório
git clone https://github.com/fparuce/techchallenge-fiap-pedeai-frontend-vue.git

# Instale as dependências
npm install
```
### Executando a Aplicação
```bash
# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Servidor de preview da build
npm run preview
```

### 🛠️ Tecnologias Utilizadas
Frontend
- Vue.js 3 - Framework principal
- TypeScript - Tipagem estática
- Vue Router - Navegação SPA
- Axios - Comunicação com API

Ferramentas
- Vite - Build tool
- ESLint + Prettier - Padronização de código
- Vitest - Testes unitários

### 📂 Estrutura do Projeto
```
fastfood-frontend/
├── src/
│   ├── assets/           # Arquivos estáticos
│   ├── components/       # Componentes reutilizáveis
│   ├── composables/      # Composables do Vue
│   ├── router/           # Configuração de rotas
│   ├── styles/           # Estilos globais
│   ├── types/            # Tipos TypeScript
│   ├── views/            # Páginas/views
│   ├── App.vue           # Componente raiz
│   └── main.ts           # Ponto de entrada
├── public/               # Arquivos públicos
├── tests/                # Testes
├── .env.example          # Modelo de variáveis de ambiente
└── vite.config.ts        # Configuração do Vite
```

### 🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### 📄 Licença
Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

Feito com ❤️ por [Felipe Costacurta Paruce](https://github.com/fparuce)  
[![GitHub](https://img.shields.io/github/followers/fparuce?style=social)](https://github.com/fparuce)

---
