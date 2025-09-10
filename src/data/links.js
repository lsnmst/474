export const textos = [
    { title: "474 Jacaré/Copacabana", link: "https://sobinfluencia.com/produtos/474-jacare-copacabana/" },
    { title: "Linhas", link: "/textos/linhas" },
    { title: "Nunca é noite no mapa", link: "/textos/nunca-e-moite-no-mapa" },
    { title: "Como acessar dados no data lake da Prefeitura do Rio de Janeiro", link: "https://docs.dados.rio/tutoriais/como-acessar-dados/#criando-uma-conta" },
];

export const mapas = [
    {
        title: "Quais linhas operaram veículos sem ar condicionado em 17 de fevereiro de 2025, durante a onda de calor Nível de Calor 4 (NC4)",
        link: "/mapas/mapa1",
        decodeRefs: ["/decode/rio-60-graus"]
    },
    {
        title: "Lendo o censo, quem mora nas áreas atravessadas pela rota do 474? Uma leitura por cor/raça",
        link: "/mapas/mapa2",
        decodeRefs: ["/decode/uma-questao-de-cor"]
    },
    {
        title: " Em quais direções a cidade se deslocou em um domingo de eleições municipais e tarifa zero",
        link: "/mapas/mapa3",
        decodeRefs: ["/decode/superlotacao"]
    },
    {
        title: "Georreferenciamento das transações em dinheiro nas 10 linhas de ônibus onde o dinheiro foi mais utilizado como forma de pagamento no mês de agosto de 2025",
        link: "/mapas/mapa4",
        decodeRefs: ["/decode/nova-forma-de-esclusao"]
    },
    {
        title: "Estatísticas de roubos de celulares nas áreas atravessadas pela rota do 474",
        link: "/mapas/mapa5",
        decodeRefs: ["/decode/nova-forma-de-esclusao"]
    },
    {
        title: "Mapa da circulação de ônibus entre as 6h e as 6h30 do dia 10 de junho de 2025, durante a operação policial no complexo de Israel",
        link: "/mapas/mapa6",
        decodeRefs: ["/decode/em-alerta-avenida-brasil"]
    },

];

export const dadosLinks = [
    {
        title: "Tabela de posições de GPS de todos os validadores da Jaé instalados, incluindo estado do equipamento, serviço, sentido e veículo associado e temperatura do veículo.",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=monitoramento&t=gps_validador&page=table",
        decodeRefs: ["/decode/rio-60-graus", "/decode/pes-molhados"]
    },
    {
        title: "Tabela com os dados tratados de registros de GPS do SPPO, incluindo velocidade estimada, estado de movimento, parada em terminal ou garagem e interseção com o traçado da linha informada",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_veiculos&t=gps_sppo&page=table",
        decodeRefs: ["/decode/uma-questao-de-cor", "/decode/em-alerta-avenida-brasil"]
    },
    {
        title: "Tabela de contagem do número de passageiros por hora. Agrega valores da tabela de transações por: data, hora, modo, consorcio, operadora, servico, sentido e tipo_transacao",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_hora&page=table",
        decodeRefs: ["/decode/indo-alimentar-os-bairros-ricos", "/decode/superlotacao"]
    },
    {
        title: "GTFS - Viagens para cada rota",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=trips&page=table",
        decodeRefs: ["/decode/rio-60-graus"]
    },
    {
        title: "Ocorrências disparadas pelo COR desde 2015",
        link: "https://console.cloud.google.com/bigquery?p=datario&d=adm_cor_comando&t=ocorrencias&page=table",
        decodeRefs: ["/decode/pes-molhados"]
    },
    {
        title: "GTFS - Shapes em formatos geográficos para cada rota",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=shapes_geom&page=table",
        decodeRefs: ["/decode/rio-60-graus"]
    },
    {
        title:
            "Tabela com informações da Jaé sobre as transações realizadas no sistema de transporte municipal",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=transacao&page=table",
        decodeRefs: ["/decode/nova-forma-de-esclusao"]

    },
    {
        title:
            "Censo Demográfico 2010: Agregados por Setores Censitários - Resultados do Universo",
        link: "https://ftp.ibge.gov.br/Censos/Censo_Demografico_2010/Resultados_do_Universo/Agregados_por_Setores_Censitarios/",
        decodeRefs: ["/decode/uma-questao-de-cor"]
    },
    {
        title: "Tabela de contagem do número de passageiros por hora. Agrega valores das tabelas transacao e transacao_riocard por: data, hora, modo, consorcio, operadora, servico, sentido, tipo_transacao e tile_id",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_tile_hora&page=table",
        decodeRefs: ["/decode/indo-alimentar-os-bairros-ricos"]
    },
    {
        title: "Incidentes envolvendo violência armada",
        link: "https://api.fogocruzado.org.br/search",
        decodeRefs: ["/decode/em-alerta-avenida-brasil"]
    },
    {
        title: "Chamados feitos ao 1746 desde março de 2011",
        link: "https://console.cloud.google.com/bigquery?p=datario&d=adm_central_atendimento_1746&t=chamado&page=table",
        decodeRefs: ["/decode/portal-1736"]
    },
    {
        title: "Bairros da Cidade do Rio de Janeiro",
        link: "https://console.cloud.google.com/bigquery?p=datario&d=dados_mestres&t=bairro&page=table",
        decodeRefs: ["/decode/portal-1736"]
    },
    {
        title: "Série histórica mensal por área de Circunscrição Integrada de Segurança Pública (CISP)",
        link: "https://dadosabertos.rj.gov.br/dataset/isp-estatisticas-de-seguranca-publica/resource/3e553e0b-ff90-48ad-9584-90df6baeea6c",
        decodeRefs: ["/decode/nova-forma-de-esclusao"]
    },
    {
        title: "Bases de dados para analisar de forma sistemática o sistema de transportes",
        link: "/textos/critical-data",
        decodeRefs: []
    },


];

export const decode = [
    { title: "Rio 60 graus", link: "/decode/rio-60-graus" },
    {
        title: "Indo 'alimentar' os bairros ricos da zona sul",
        link: "/decode/indo-alimentar-os-bairros-ricos",
    },
    { title: "Superlotação (e um experimento com tarifa zero)", link: "/decode/superlotacao" },
    // { title: "Dando calote voltando da praia", link: "/decode/decode4" },
    { title: "Uma questão de cor", link: "/decode/uma-questao-de-cor" },
    { title: "Uma nova forma de exclusão a caminho?", link: "/decode/nova-forma-de-esclusao" },
    {
        title: "Sempre em alerta ao que está acontecendo na Brasil",
        link: "/decode/em-alerta-avenida-brasil",
    },
    { title: "Com os pés molhados", link: "/decode/pes-molhados" },
    { title: "As ambições do 1736", link: "/decode/portal-1736" },
];
