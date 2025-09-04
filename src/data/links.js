export const textos = [
    { title: "474 Jacaré/Copacabana", link: "https://sobinfluencia.com/produtos/474-jacare-copacabana/" },
    { title: "Linhas", link: "/textos/linhas" },
    { title: "Nunca é noite no mapa", link: "/textos/nunca-e-moite-no-mapa" },
];

export const mapas = [
    {
        title: "Quais linhas operaram veículos sem ar condicionado em 17 de fevereiro de 2025, durante a onda de calor Nível de Calor 4 (NC4)",
        link: "/mapas/mapa1",
        decodeRefs: ["/decode/decode1"]
    },
    {
        title: "Lendo o censo, quem mora nas áreas atravessadas pela rota do 474? Uma leitura por cor/raça",
        link: "/mapas/mapa2",
        decodeRefs: ["/decode/decode5"]
    },
    {
        title: " Em quais direções a cidade se deslocou em um domingo de eleições municipais e tarifa zero",
        link: "/mapas/mapa3",
        decodeRefs: ["/decode/decode3"]
    },
    {
        title: "Georreferenciamento das transações em dinheiro nas 10 linhas de ônibus onde o dinheiro foi mais utilizado como forma de pagamento no mês de agosto de 2025",
        link: "/mapas/mapa4",
        decodeRefs: ["/decode/decode6"]
    },
    {
        title: "Estatísticas de roubos de celulares nas áreas atravessadas pela rota do 474",
        link: "/mapas/mapa5",
        decodeRefs: ["/decode/decode6"]
    },
    {
        title: "Mapa da circulação de ônibus entre as 6h e as 6h30 do dia 10 de junho de 2025, durante a operação policial no complexo de Israel",
        link: "/mapas/mapa6",
        decodeRefs: ["/decode/decode7"]
    },

];

export const dadosLinks = [
    {
        title: "Tabela de posições de GPS de todos os validadores da Jaé instalados, incluindo estado do equipamento, serviço, sentido e veículo associado e temperatura do veículo.",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=monitoramento&t=gps_validador&page=table",
        decodeRefs: ["/decode/decode1", "/decode/decode8"]
    },
    {
        title: "Tabela com os dados tratados de registros de GPS do SPPO, incluindo velocidade estimada, estado de movimento, parada em terminal ou garagem e interseção com o traçado da linha informada",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_veiculos&t=gps_sppo&page=table",
        decodeRefs: ["/decode/decode5", "/decode/decode7"]
    },
    {
        title: "Tabela de contagem do número de passageiros por hora. Agrega valores da tabela de transações por: data, hora, modo, consorcio, operadora, servico, sentido e tipo_transacao",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_hora&page=table",
        decodeRefs: ["/decode/decode2", "/decode/decode3"]
    },
    {
        title: "GTFS - Viagens para cada rota",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=trips&page=table",
        decodeRefs: ["/decode/decode1"]
    },
    {
        title: "Ocorrências disparadas pelo COR desde 2015",
        link: "https://console.cloud.google.com/bigquery?p=datario&d=adm_cor_comando&t=ocorrencias&page=table",
        decodeRefs: ["/decode/decode8"]
    },
    {
        title: "GTFS - Shapes em formatos geográficos para cada rota",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=shapes_geom&page=table",
        decodeRefs: ["/decode/decode1"]
    },
    {
        title:
            "Tabela com informações da Jaé sobre as transações realizadas no sistema de transporte municipal",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=transacao&page=table",
        decodeRefs: ["/decode/decode6"]

    },
    {
        title:
            "Censo Demográfico 2010: Agregados por Setores Censitários - Resultados do Universo",
        link: "https://ftp.ibge.gov.br/Censos/Censo_Demografico_2010/Resultados_do_Universo/Agregados_por_Setores_Censitarios/",
        decodeRefs: ["/decode/decode5"]
    },
    {
        title: "Tabela de contagem do número de passageiros por hora. Agrega valores das tabelas transacao e transacao_riocard por: data, hora, modo, consorcio, operadora, servico, sentido, tipo_transacao e tile_id",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_tile_hora&page=table",
        decodeRefs: ["/decode/decode2"]
    },
    {
        title: "Incidentes envolvendo violência armada",
        link: "https://api.fogocruzado.org.br/search",
        decodeRefs: ["/decode/decode7"]
    },
    {
        title: "Chamados feitos ao 1746 desde março de 2011",
        link: "https://console.cloud.google.com/bigquery?p=datario&d=adm_central_atendimento_1746&t=chamado&page=table",
        decodeRefs: ["/decode/decode9"]
    },
    {
        title: "Bairros da Cidade do Rio de Janeiro",
        link: "https://console.cloud.google.com/bigquery?p=datario&d=dados_mestres&t=bairro&page=table",
        decodeRefs: ["/decode/decode9"]
    },
    {
        title: "Série histórica mensal por área de Circunscrição Integrada de Segurança Pública (CISP)",
        link: "https://dadosabertos.rj.gov.br/dataset/isp-estatisticas-de-seguranca-publica/resource/3e553e0b-ff90-48ad-9584-90df6baeea6c",
        decodeRefs: ["/decode/decode6"]
    },

];

export const decode = [
    { title: "Rio 60 graus", link: "/decode/decode1" },
    {
        title: "Indo 'alimentar' os bairros ricos da zona sul",
        link: "/decode/decode2",
    },
    { title: "Superlotação (e um experimento com tarifa zero)", link: "/decode/decode3" },
    // { title: "Dando calote voltando da praia", link: "/decode/decode4" },
    { title: "Uma questão de cor", link: "/decode/decode5" },
    { title: "Uma nova forma de exclusão a caminho?", link: "/decode/decode6" },
    {
        title: "Sempre em alerta ao que está acontecendo na Brasil",
        link: "/decode/decode7",
    },
    { title: "Com os pés molhados", link: "/decode/decode8" },
    { title: "As ambições do 1736", link: "/decode/decode9" },
];
