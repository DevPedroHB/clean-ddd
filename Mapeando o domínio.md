# Funcionalidades do Sistema de Gerenciamento de Estoque

<a href="https://efficient-sloth-d85.notion.site/Atividade-Mapeando-o-dom-nio-38963358ffd74289b824ff73b187165d" target="__blank">Link da conversa</a>

## Entidades de Domínio

- Produto: representa cada item individual no estoque, com um número de identificação único e informações adicionais, como tamanho e cor.
- Estoque: refere-se ao local onde os produtos são armazenados e gerenciados.
- Fornecedor: empresa ou entidade responsável pelo fornecimento dos produtos ao estoque.

## Casos de Uso

### Rastreamento Individual de Produto

- Descrição: permite atribuir um número de identificação único a cada produto, registrar suas movimentações no estoque e adicionar informações extras, como tamanho e cor.

### Definição de Quantidades Mínimas de Estoque

- Descrição: permite definir limites mínimos para cada produto, para receber alertas quando o estoque estiver próximo do fim.

### Alertas de Estoque Baixo

- Descrição: notifica os usuários por e-mail e por meio de uma notificação no sistema de gerenciamento de estoque quando um produto estiver com estoque baixo.

### Visualização do Histórico de Vendas e Estoque

- Descrição: fornece informações sobre as vendas de produtos em determinados períodos, lucro gerado por produto e identifica produtos mais populares em cada período. Além disso, mostra tendências de estoque ao longo do tempo para auxiliar nas decisões de compra.

### Criação e Gerenciamento Automático de Ordens de Compra

- Descrição: permite a geração automática de ordens de compra com base nas quantidades mínimas de estoque definidas e nas tendências de vendas.

### Integração com Fornecedores

- Descrição: possibilita a integração com os fornecedores para receber atualizações automáticas sobre os prazos de entrega de novas remessas.
