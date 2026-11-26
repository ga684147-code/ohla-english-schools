# Homologação dos ajustes da OHLA

A revisão partiu do commit `844cdf6` da PR #1, na branch `ohla-client-adjustments`. O build dessa revisão já passava. Os testes de interação identificaram ajustes adicionais em navegação, hierarquia, links e largura dos layouts.

| Item | Resultado |
| --- | --- |
| 1. Dropdowns | Texto e seta acionam o mesmo botão nas cinco categorias. O primeiro clique no desktop mantém aberto o painel exibido pelo hover. Foram testados clique, teclado, toque, Escape, fechamento após navegar, selects do contato, busca de país e seletor de mês. |
| 2. Acreditações | Quatro cards compactos e dois largos. No celular os compactos ficam em duas colunas e os largos ocupam uma linha cada. Os seis textos, o logo e o link da CEA vêm da versão existente. |
| 3. Mapa da Home | Os três marcadores da ilustração abrem Miami Brickell, Orlando Celebration e Tampa. Cada área de toque tem pelo menos 44 × 44 px e recebe foco pelo teclado. |
| 4. Advisor | Corrigida a ocorrência restante no calendário. A busca por “Consultant” no conteúdo e nos componentes do site retornou zero ocorrências. |
| 5. Rodapé | GAP Year está no agrupamento Higher Education. University Pathway continua acessível. Os seis ícones sociais usam os mesmos perfis da página de contato. |
| 6–8. Online Pathway | Conferidas as 10 horas semanais. A tabela mantém as sessões de 2026 até a OHLA fornecer o calendário específico de 2027. As linhas animam uma vez quando entram na tela e respeitam a preferência por movimento reduzido. |
| 9 e 11. Espaçamento e contato | Foram reduzidos os espaços no CTA da Home, nos banners compartilhados das páginas internas e entre o calendário e o rodapé. O botão Talk to our team recebeu largura responsiva. Foram corrigidas duas rolagens horizontais, na Home a 360 px e no banner Study Online a 768 px. |
| 10. Card OHLA Life | Removido da seção “Why choose OHLA?” em Youth Camps → Overview após confirmação do nome. A seção apresenta cinco cards. |
| 12. Header | Confirmado o posicionamento fixo durante a rolagem e o menu recolhido após navegar no celular. |
| 13. CRM | Pendente do HTML oficial. O formulário atual valida os campos e prepara um e-mail. A página oferece também o link para o formulário oficial da OHLA. |
| 14. Apply Now | Os CTAs abrem a seção do formulário de contato e o endereço antigo `/apply/` também encaminha ao formulário. |
| 15. Blog | Busca e cartões testados. A atualização editorial e a publicação de artigos completos dependem do material da OHLA. |
| 16. Links e funcionalidades | A auditoria verificou links, fragmentos e arquivos locais em toda a exportação. Os atalhos para o teste de nível utilizam o teste já presente na versão mobile. O WhatsApp da Home usa o endereço publicado pela OHLA em sua página de contato. |
| 17. Homologação | Projeto privado de homologação separado do protótipo principal. A PR segue aberta para aprovação. |

## Verificação reproduzível

Com as dependências instaladas, Python 3 e Chromium do Playwright disponíveis, execute na raiz da branch:

```sh
npm run build
python3 scripts/check-export-links.py
npm run test:e2e
```

O Playwright inicia o servidor do teste sobre a exportação de produção. A suíte cobre o menu e o mapa em 360, 390, 768, 1024, 1200 e 1440 px. Percorre as 50 rotas públicas em 360, 768 e 1440 px e verifica os rodapés e a largura do documento. Cobre também os filtros, seletores de programa, formulário, vídeo local, painel de comentários e preferências de movimento. O ambiente touch é emulado em Chromium.

A auditoria encontrou 6.596 ocorrências de links e 239 arquivos locais referenciados, incluindo recursos compartilhados entre páginas. Todos os destinos internos e fragmentos existem. Entre as 50 rotas, 23 exibem o aviso de página planejada, incluindo 10 endereços de artigos. Esses destinos requerem conteúdo para o lançamento.

Dos 13 endereços HTTPS externos distintos, oito retornaram HTTP 200. X retornou 403, LinkedIn retornou 999 e o ambiente não recebeu resposta dos três endereços de vídeo do YouTube. Esses cinco destinos precisam de confirmação manual. O player MP4 da OHLA foi testado com reprodução e pausa.

## Confirmação adicional de conteúdo

Na quarta sessão de GAP Year, a tabela existente informa que o semestre universitário começa em 11 de janeiro de 2026, embora a etapa anterior termine em 18 de dezembro de 2026. A OHLA precisa confirmar o ano correto antes da edição.

[Pull Request #1](https://github.com/ga684147-code/ohla-english-schools/pull/1) · [Origem do link de WhatsApp](https://www.ohla.com/contactus/)
