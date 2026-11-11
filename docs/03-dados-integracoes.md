# Dados e integrações

## Dados
O conteúdo institucional analisado está definido no código, inclusive listas de pilares e temas da mentoria. Não há implementação identificada de persistência de leads, tabela de contatos ou autenticação interna neste repositório.

## Integrações externas observadas
- `app/contato/page.tsx`: links para conversa no WhatsApp. São links externos, **não** uma integração de disparo automático.
- Links internos para `/mentoria`, `/sobre`, `/contato` e página inicial.
- Links para `/login` encontrados em componentes; verificar se deve redirecionar para a plataforma `co-hub`.

## Gestão de dados
Não inserir dados clínicos, pacientes ou credenciais de terceiros em arquivos do site. Para medir conversões, implementar solução específica com consentimento e revisar privacidade antes de adicionar analytics e formulários.
