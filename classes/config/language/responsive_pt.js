const text = {
    parent: 'PAI (A)',
    children: 'FILHOS (B, C, D, E)',
    size: 'Tamanho: ',
    containerProperties: 'PROPRIEDADES DO CONTÂINER',
    itemProperties: 'PROPRIEDADES DOS ITENS',
    properties: 'Propriedades',
    child: 'Filho',
    values: 'Valores:',
    flex: 'Flexbox é uma poderosa ferramenta para criar layouts flexíveis e responsivos. Clique no nome de uma propriedade para mais informações.',
    containers: {
        'flex-direction': {
            info: 'Define a direção do eixo principal ao longo do qual os itens flexíveis são dispostos.',
            values: {
                'row': '(padrão) Da esquerda para a direita.',
                'row-reverse': 'Da direita para a esquerda.',
                'column': 'De cima para baixo.',
                'column-reverse': 'De baixo para cima.'
            }
        },
        'flex-wrap': {
            info: 'Controla se os itens devem ou não quebrar para uma nova linha ou coluna.',
            values: {
                'nowrap': '(padrão) Itens permanecem em uma única linha/coluna.',
                'wrap': 'Itens quebram para a próxima linha/coluna quando necessário.',
                'wrap-reverse': 'Itens quebram para a próxima linha/coluna na direção oposta.'
            }
        },
        'justify-content': {
            info: 'Alinha os itens ao longo do eixo principal (horizontal para \'row\').',
            values: {
                'initial': 'Define esta propriedade para seu valor padrão.',
                'flex-start': '(padrão) Alinha os itens ao início do contêiner.',
                'flex-end': 'Alinha os itens ao final do contêiner.',
                'center': 'Centraliza os itens no contêiner.',
                'space-between': 'Distribui espaço uniformemente entre os itens, com o primeiro e o último item nas extremidades.',
                'space-around': 'Distribui espaço uniformemente ao redor dos itens, incluindo espaços antes do primeiro e após o último item.',
                'space-evenly': 'Distribui espaço uniformemente entre os itens, sem espaço adicional nas extremidades.',
                'inherit': 'Herda esta propriedade do seu elemento pai.'
            }
        },
        'align-items': {
            info: 'Alinha os itens ao longo do eixo transversal (vertical para \'row\').',
            values: {
                'stretch': '(padrão) Itens esticam para preencher o contêiner.',
                'flex-start': 'Alinha os itens ao início do eixo transversal.',
                'flex-end': 'Alinha os itens ao final do eixo transversal.',
                'center': 'Centraliza os itens no eixo transversal.',
                'baseline': 'Alinha os itens na linha de base do texto.'
            }
        },
        'align-content': {
            info: 'Controla o espaçamento entre as linhas/colunas em contêineres com múltiplas linhas/colunas. Aplica-se apenas quando há múltiplas linhas ou colunas de itens. Em \'flex-wrap\' o valor não pode ser \'nowrap\'.',
            values: {
                'stretch': '(padrão) Linhas/colunas esticam para preencher o espaço disponível.',
                'flex-start': 'Linhas/colunas agrupadas no início.',
                'flex-end': 'Linhas/colunas agrupadas no final.',
                'center': 'Linhas/colunas centralizadas.',
                'space-between': 'Espaço distribuído entre as linhas/colunas.',
                'space-around': 'Espaço distribuído ao redor das linhas/colunas.',
            }
        }
    },
    items: {
        'order': {
            info: 'Define a ordem de disposição dos itens dentro do contêiner, independentemente da ordem no código HTML.',
            values: {
                '0': '(padrão) Menores valores aparecem primeiro.'
            }
        },
        'flex-grow': {
            info: 'Define a capacidade de um item de crescer para ocupar o espaço disponível no contêiner.',
            values: {
                '0': '(padrão) Não cresce.',
                '1': 'Permite que o item cresça para ocupar espaço adicional.'
            }
        },
        'flex-shrink': {
            info: 'Define a capacidade de um item de encolher caso o contêiner seja menor que a soma das larguras dos itens.',
            values: {
                '1': '(padrão) Pode encolher.',
                '0': 'Impede que o item encolha.'
            }
        },
        'flex-basis': {
            info: 'Define a largura inicial de um item antes do espaço ser distribuído, similar a \'width\', mas com comportamento flexível.',
            values: {
                'auto': '(padrão) Usa o conteúdo ou a largura/altura definida do item).'
            }
        },
        'align-self': {
            info: 'Alinha individualmente um item ao longo do eixo transversal, sobrescrevendo o valor de \'align-items\' definido no contêiner.',
            values: {
                'auto': '(padrão) Usa o valor de \'align-items\' do contêiner.',
                'flex-start': 'Alinha ao início do eixo transversal.',
                'flex-end': 'Alinha ao final do eixo transversal.',
                'center': 'Centraliza no eixo transversal.',
                'baseline': 'Alinha na linha de base do texto.',
                'stretch': 'Estica para preencher o contêiner (se permitido).'
            }
        },
        'flex': {
            info: 'Uma propriedade abreviada que combina \'flex-grow\', \'flex-shrink\' e \'flex-basis\'.',
            values: {
                '1 0 auto': 'define o item para crescer, não encolher, e usar a largura/altura automática.'
            }
        }
    }
};