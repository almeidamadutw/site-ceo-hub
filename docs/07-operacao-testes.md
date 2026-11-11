# Operação e testes

## Requisitos
Node.js e gerenciador npm compatíveis com a versão de Next.js registrada em `package.json`.

## Ambiente de desenvolvimento
```bash
npm install
npm run dev
```

## Conferência antes de publicar
```bash
npm run lint
npm run build
```
Conferir manualmente:
- páginas `/`, `/mentoria`, `/sobre`, `/contato`;
- cabeçalho, menu mobile, rodapé, contraste e responsividade;
- links para WhatsApp e eventual portal de mentorados;
- imagens, textos, metadados, sitemap e robots.

## Publicação
O repositório contém código Next.js apto a deploy compatível. A existência de um ambiente de produção e seu estado atual devem ser verificados no provedor de hospedagem. Não incluir credenciais na documentação.
