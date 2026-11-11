# Regra obrigatória de documentação viva

A documentação faz parte da entrega do código. Cada PR/commit relevante deve:
1. Identificar o comportamento implementado e distingui-lo de plano/proposta.
2. Atualizar `04-funcionalidades.md` e `05-fluxos.md` quando afetar a experiência.
3. Atualizar `02-arquitetura.md` e `03-dados-integracoes.md` quando afetar dependências, infraestrutura ou dados.
4. Revisar `06-regras-permissoes.md` quando afetar regras ou segurança.
5. Registrar testes, limitações, riscos e configuração em `07-operacao-testes.md`.
6. Atualizar pendências e inserir uma entrada datada em `CHANGELOG.md`.
7. Manter o `README.md` e `docs/README.md` como índices válidos.

**Critério de pronto:** código e documentação coerentes; links funcionam; não publicar segredos, dados de pacientes ou tokens. Documentos substituem PDFs recorrentes, exceto quando solicitados.
