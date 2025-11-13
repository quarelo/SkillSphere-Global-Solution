## 💡 Sobre o Projeto

**SkillSphere** é uma aplicação web desenvolvida como parte da **Global Solution do 2º Semestre/2025 (Front-End Design – Web Development) da FIAP**.

Inspirado no tema **"O Futuro do Trabalho – Conectando pessoas, competências e propósito por meio da tecnologia"**, o projeto simula uma plataforma profissional moderna e colaborativa, similar ao LinkedIn, focada em conectar talentos, incentivar o desenvolvimento de competências e promover a troca de experiências.

### Contexto da Global Solution

Acreditamos que a tecnologia é a chave para construir um futuro do trabalho mais **justo, inclusivo e sustentável**. O SkillSphere busca ser a interface onde essa visão se torna realidade, permitindo que profissionais de TI explorem e apresentem seu conjunto completo de habilidades — técnicas, comportamentais e acadêmicas.

## ✨ Funcionalidades Principais

O SkillSphere foi desenvolvido como uma **Single Page Application (SPA)**, garantindo uma experiência de navegação fluida e rápida:

1.  **Listagem de Profissionais (Grid):** Exibe 60 perfis fictícios em um *layout* de grade responsivo (4 colunas em telas grandes), com informações essenciais (Nome, Foto, Cargo, Localização e Tecnologia Principal).
2.  **Filtros Avançados e Busca Global:** Permite aos usuários encontrar talentos rapidamente através de:
    * **Busca Global:** Pesquisa por Nome, Cargo, Área, Cidade ou Tecnologia.
    * **Filtros Categóricos:** Seleção simultânea e interativa por **Área de Atuação** (Development, Design, Data Science, etc.), **Cidade** e **Tecnologia** (React, Python, Figma, etc.).
    * **Scroll Horizontal Customizado:** Filtros organizados em uma barra de rolagem horizontal estilizada para otimizar o espaço e a usabilidade.
3.  **Modal de Perfil Detalhado:** Ao clicar em qualquer card, uma modal interativa é aberta, exibindo o perfil completo, incluindo:
    * **"About"** (Um resumo profissional).
    * **Informações Pessoais e Acadêmicas.**
    * **Experiências e Habilidades Técnicas.**
    * **Soft Skills e Hobbies.**
    * **Botões de Ação Dinâmicos:** "Recomendar profissional" e "Enviar mensagem" (simulados via links/ações).
4.  **Temas Dinâmicos:** Suporte a modo claro (*light mode*) e modo escuro (*dark mode*).

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **React (Next.js)** | Framework principal para construção da Single Page Application (SPA) e roteamento. |
| **Tailwind CSS** | Framework CSS utility-first para desenvolvimento rápido e design responsivo. |
| **JavaScript (ES6+)** | Lógica de estado complexa para filtros múltiplos e busca global. |
| **JSON** | Simulação e gestão dos dados de 60 perfis de profissionais. |
| **Lucide React** | Biblioteca de ícones simples e elegantes. |

---

## 👥 Integrantes do Projeto

| Nome do Aluno | RM |
| :--- | :--- |
| **Gabriel Thompson** | RM563126 |
| **Nicolas Baradel** | RM563245 |
| **Enzo Quarelo** | RM561503 |

**FIAP - 2º Semestre/2025**

---

## ▶️ Como Rodar o Projeto Localmente

Este projeto foi inicializado com `create-next-app`.

### Pré-requisitos

* Node.js (versão 18.x ou superior)
* npm, yarn ou pnpm

### Passos

1.  Clone este repositório:
    ```bash
    git clone
    cd SkillSphere
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou yarn install
    ```
3.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

Abra seu navegador em [http://localhost:3000](http://localhost:3000) para ver a plataforma em funcionamento.

---

## 📚 Saiba Mais sobre Next.js

Para mais informações sobre o desenvolvimento com Next.js, consulte a documentação oficial:

* [Next.js Documentation](https://nextjs.org/docs)
* [Learn Next.js](https://nextjs.org/learn)