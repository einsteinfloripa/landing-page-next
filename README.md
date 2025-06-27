# Site do Einstein Floripa

**Data de Inicio**: 01 Nov 2024

**Versão**: 0.0.1

**Objetivo**: Ter um site onde informações sobre o Einstein Floripa fiquem centralizadas fornecendo informações claras sobre o curso e inscrição, buscando atrair alunos, voluntários e patrocinadores.

**Tecnologias**:

- Next.js
- TailwindCSS
- Storyblock

Deploy V1 Netlify para testes ( 18/06/2025 )
https://site-einsteinfloripa.netlify.app/

[**Link do Design no Figma** ](https://www.figma.com/design/WU7RpztgmjZntvEywl9c43/ReDesign---Site?node-id=72-322&t=aLRjy3ZHFgr8DlmL-1)

![Imagem da Hero](/src/assets/readme-cover.png)

## Requisitos

**Funcionais**:

1. Carregamento Rápido

   - O site deve carregar rapidamente, com o tempo de carregamento ideal abaixo de 3 segundos.
   - O uso de imagens otimizadas e código enxuto deve ser priorizado para garantir que as páginas carreguem com agilidade.

2. Responsividade

   - O site deve ser totalmente responsivo, adaptando-se de maneira eficiente para diferentes tamanhos de tela, incluindo desktop, tablet e smartphone.

3. Usabilidade

   - O design e a navegação devem ser simples e intuitivos, com uma estrutura de fácil compreensão.
   - Botões e CTAs (Call to Actions) devem ser claros e bem posicionados para facilitar a navegação dos usuários.
   - O site deve ser fácil de usar para todos os públicos-alvo (estudantes, voluntários, patrocinadores), com informações claras e acessíveis.

4. Edição de Conteúdo Simples

   - Para facilitar a atualização de conteúdo (como imagens, textos, membros da equipe), o site usará o Storyblok como CMS, permitindo uma edição rápida e prática sem necessidade de intervenção técnica constante.

5. Monitoramento de Usabilidade
   - Integrar a ferramenta Clarify para monitorar a usabilidade do site, coletando dados de interação dos usuários e ajustando conforme necessário para melhorar a experiência.

**Não Funcionais**:

1. Desempenho

   - O site deve ser altamente otimizado para garantir um tempo de carregamento rápidos.
   - A arquitetura do site deve ser leve e eficiente, com imagens e recursos dinâmicos otimizados.
   - A escolha de tecnologias deve favorecer alta performance.

2. Acessibilidade

   - O site deve cumprir as diretrizes WCAG 2.1 para garantir a acessibilidade para todos os usuários, incluindo pessoas com deficiência visual ou auditiva.
   - Isso inclui a utilização de leitores de tela, texto alternativo em imagens, e transcrição de vídeos quando aplicável.

3. Escalabilidade

   - A arquitetura deve permitir a adição fácil de novas funcionalidades ou páginas sem grandes alterações no sistema.

4. Manutenibilidade

   - O site deve ser construído com frameworks modernos e escaláveis e deve ser facilmente mantido.
   - O CMS Storyblok permitirá uma atualização rápida de conteúdo, permitindo que a equipe do Einstein Floripa modifique textos e imagens de forma intuitiva, mesmo não sendo do vale.

5. SEO e Visibilidade

   - O site deve ser otimizado para SEO (Search Engine Optimization), com URLs amigáveis, meta tags e descrições otimizadas para melhorar o ranqueamento nos motores de busca.
   - As imagens devem ser otimizadas para SEO, com tags alt e tamanhos adequados para carregamento rápido.

6. Compatibilidade

   - O site deve ser compatível com os navegadores mais comuns, como Google Chrome, Mozilla Firefox, Safari, e Microsoft Edge.
   - Também deve ser totalmente funcional em diferentes dispositivos (desktop, tablet e smartphone).

7. Monitoramento e Analytics
   - Clarify será usado para monitorar a usabilidade e identificar problemas de navegação ou pontos de abandono no site.
   - Seria interessante implementar um Google Analytics ou ferramenta equivalente (gratuita) para analisar o comportamento dos usuários e coletar dados sobre inscrições, doações, interações e tráfego.

## Escopo do Projeto

O escopo do projeto inclui o desenvolvimento completo do site institucional e informativo para o Einstein Floripa, focado em três públicos principais: estudantes, voluntários e patrocinadores. O projeto abrange os seguintes elementos:

1. Desenvolvimento e Design do Site

   - Interface responsiva
   - Design intuitivo
   - Otimização para performance
   - Acessibilidade

2. Conteúdo do Site

   - Home Page (landing page) com introdução e CTAs para estudantes, voluntários e patrocinadores.
   - Página "Quem Somos" com história, missão, visão e valores.
   - Página "Cursos e Inscrição" com detalhes sobre os cursos oferecidos e link para inscrição.
   - Página "Voluntariado e Participação" com informações sobre como se tornar um voluntário.
   - Página "Patrocínio e Apoiadores" com informações sobre como apoiar o projeto.
   - Página de Depoimentos e Histórias para mostrar histórias de sucesso de alunos e voluntários.
   - Página de Contato com formulário de contato e informações adicionais (e-mail, telefone, redes sociais).
   - Página de Newsletter para coleta de e-mails e engajamento com os apoiadores.

3. Sistema de Gerenciamento de Conteúdo (CMS)

   - Implementação do Storyblok como CMS para permitir que a equipe do Einstein Floripa faça atualizações rápidas e fáceis de conteúdos (imagens, textos, membros da equipe) sem a necessidade de habilidades técnicas avançadas.

4. Monitoramento e Otimização

   - Integração com a ferramenta Clarify.

5. SEO e Visibilidade
   - Otimização para motores de busca (SEO).

## Pré-requisitos

- NPM
- Node 18
- NVM

## Como rodar o projeto?

1. Clone o repositório
   ```bash
   git clone https://github.com/einsteinfloripa/landing-page-next.git
   ```
2. Entre no repositório
   ```bash
   cd landing-page-next
   ```
3. Baixe as dependencias
   ```bash
   npm i
   ```
4. Utilize o node 18 (caso não o possua siga os passos [deste artigo](https://medium.com/@micapareddes/como-instalar-uma-vers%C3%A3o-espec%C3%ADfica-do-node-js-ff4f9d001b06))
   ```bash
   nvm use 18
   ```
5. Rode o projeto
   ```bash
   npm run dev
   ```

## Notas para membros futuros

- Para baixar o NVM e node 18 siga o passo a passo [deste artigo](https://medium.com/@micapareddes/como-instalar-uma-vers%C3%A3o-espec%C3%ADfica-do-node-js-ff4f9d001b06)!
