# CEO Club | Site institucional

Site público de apresentação da mentoria CEO Club. **Não é a plataforma autenticada de mentorados** (mantida separadamente no repositório `co-hub`).

## Documentação viva

Consulte [docs/README.md](docs/README.md) para visão geral, páginas, arquitetura, fluxos, operação, pendências e histórico de alterações. A documentação está versionada com o código e deve ser atualizada a cada mudança relevante.

## Stack e execução

Next.js 16, React 19, TypeScript e Tailwind CSS.

```bash
npm install
npm run dev
npm run lint
npm run build
```

O ambiente de desenvolvimento usa `http://localhost:3000`. O build local não atesta publicação em produção.

## Estrutura

- `app/page.tsx`: página inicial;
- `app/mentoria/page.tsx`: explicação do programa;
- `app/sobre/page.tsx`: apresentação da mentora;
- `app/contato/page.tsx`: canais de contato;
- `components/`: seções e componentes visuais;
- `app/robots.ts` e `app/sitemap.ts`: configurações de indexação;
- `docs/`: documentação funcional e técnica.

**Atenção:** o cabeçalho e a home usam um link para `/login`, mas essa rota não foi localizada neste repositório. Confirmar o destino da plataforma antes de divulgar o acesso. Veja [pendências](docs/08-pendencias.md).

Dados sensíveis e segredos não devem ser enviados para o GitHub.
