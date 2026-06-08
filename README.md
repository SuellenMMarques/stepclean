<div align="center">

<img src="./assets/Logo StepClean.png" alt="StepClean Logo" width="180"/>

# StepClean — Lavanderia Premium de Tênis

**Site institucional multi-page desenvolvido para a StepClean, lavanderia especializada em limpeza, restauração e impermeabilização de tênis, localizada em Taubaté – SP.**

[![HTML](https://img.shields.io/badge/HTML-50.9%25-e34f26?style=flat-square&logo=html5&logoColor=white)](https://github.com/SuellenMMarques/stepclean)
[![CSS](https://img.shields.io/badge/CSS-36.5%25-264de4?style=flat-square&logo=css3&logoColor=white)](https://github.com/SuellenMMarques/stepclean)
[![JavaScript](https://img.shields.io/badge/JavaScript-12.6%25-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://github.com/SuellenMMarques/stepclean)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange?style=flat-square)](./LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-30DFF2?style=flat-square&logo=github)](https://suellenmmarques.github.io/stepclean/index.html)

**🌐 [Acessar o site ao vivo](https://suellenmmarques.github.io/stepclean/index.html)**

</div>

---

## 📋 Sobre o Projeto

O site da **StepClean** foi criado para apresentar os serviços da lavanderia ao público online, transmitindo profissionalismo, identidade de marca e facilitando o contato com os clientes. É um projeto **multi-page** com foco em experiência visual e comunicação direta com o usuário.

O design prioriza uma estética **azul marinho premium**, com tons profundos de azul, detalhes em ciano elétrico e tipografia de impacto — transmitindo confiança e sofisticação alinhadas à identidade da marca.

---

## 🗂️ Páginas

| Página | Arquivo | Descrição |
|--------|---------|-----------|
| Home | `index.html` | Apresentação da marca, seção hero com Canvas animation, storytelling, diferenciais, galeria prévia, depoimentos e CTA |
| Serviços | `services.html` | Cards de serviços com preços, tabela comparativa Básica vs Premium |
| Como Funciona | `how-works.html` | Passo a passo do processo da StepClean |
| Galeria | `gallery.html` | Resultados antes e depois |
| Contato | `contact.html` | Formulário de contato e localização via Google Maps |
| FAQ | `faq.html` | Perguntas frequentes |

---

## ✨ Funcionalidades

- **Hero animado com Canvas 2D** — animação de frames renderizados em `<canvas>`, criando efeito cinematográfico na seção principal
- **Marquee animado** — faixa com serviços em loop contínuo via CSS animation
- **Componentes compartilhados** — header e footer injetados em todas as páginas via `components.js`, evitando repetição de código
- **Integração com WhatsApp** — botão de CTA direto para contato via `api.whatsapp.com`
- **Google Maps incorporado** — localização da loja em iframe na página de contato
- **Tabela comparativa de serviços** — visual claro para decisão do cliente
- **Design responsivo** — adaptado para dispositivos móveis
- **Navegação mobile** — menu hambúrguer customizado
- **Scrollbar personalizada** — estilização da barra de rolagem alinhada ao tema azul marinho
- **Favicon** e metadados configurados

---

## 🎨 Design & Identidade Visual

| Elemento | Valor |
|----------|-------|
| Tema | Azul marinho premium |
| Fundo principal | `#192E59` — azul marinho |
| Fundo secundário | `#0d1a36` — azul mais profundo |
| Azuis da paleta | `#1445D9` · `#1154D9` · `#138AF2` · `#1DB6F2` |
| Cor de destaque (accent) | `#30DFF2` — ciano elétrico |
| Texto muted | `#a4bde6` |
| Tipografia principal | `Nunito` (Google Fonts) |
| Gradiente principal | `135deg` de `#1445D9` para `#1DB6F2` |
| Estilo | Premium, sofisticado, confiável |

---

## 🏗️ Estrutura do Projeto

```
stepclean/
│
├── index.html          # Página principal (Home)
├── services.html       # Página de serviços
├── how-works.html      # Como funciona
├── gallery.html        # Galeria de resultados
├── contact.html        # Contato e localização
├── faq.html            # Perguntas frequentes
│
├── style.css           # Estilos globais
├── script.js           # Lógica JS (animação Canvas, menu, etc.)
├── components.js       # Injeção de header e footer compartilhados
│
└── assets/             # Imagens, ícones e favicon
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica das páginas
- **CSS3** — variáveis, flexbox, grid, animações e keyframes
- **JavaScript** — Canvas 2D API, manipulação de DOM, injeção de componentes
- **Google Fonts** — tipografia Nunito
- **WhatsApp API** — integração de contato direto
- **Google Maps** — embed de localização via iframe

---

## 🌐 Deploy

O site está publicado via **GitHub Pages** e pode ser acessado diretamente pelo link:

👉 **[https://suellenmmarques.github.io/stepclean/index.html](https://suellenmmarques.github.io/stepclean/index.html)**

---

## 👩‍💻 Desenvolvimento

Site desenvolvido por **Suellen Marques** como projeto desafio lançado pelo DevClub.


