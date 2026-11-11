# Arquitetura

## Tecnologias identificadas
- Next.js 16 e React 19 com App Router.
- TypeScript; estilos em `app/globals.css` e Tailwind CSS.
- Componentes reutilizáveis em `components/`.
- Recursos públicos em `public/`.

## Estrutura das rotas
```text
app/
├── page.tsx             # início
├── mentoria/page.tsx    # programa e entregáveis
├── sobre/page.tsx       # história e mentora
├── contato/page.tsx     # contato
├── layout.tsx           # layout global
├── sitemap.ts           # sitemap
└── robots.ts            # indexação
components/              # Header, Hero, Footer e seções
public/                  # imagens e identidade
```

O site apresenta conteúdo por componentes de servidor/React e rotas Next.js. Não foi encontrado banco de dados ou backend transacional próprio neste repositório. Não pressupor que a plataforma de ensino compartilhe a mesma implantação.

## Responsabilidade das camadas
- `app/`: conteúdo e roteamento.
- `components/`: apresentação e navegação.
- `public/`: imagens estáticas.
- `docs/`: contrato humano de manutenção e histórico de decisões.
