export const textos = [
    { title: "Nunca é noite no mapa", link: "/textos/nunca-e-moite-no-mapa" },
    { title: "Linhas", link: "/textos/linhas" },
];

export const mapas = [
    {
        title: "Mapa 1",
        link: "/mapas/mapa1",
        decodeRefs: ["/decode/decode1", "/decode/decode5"]
    },
];

export const dadosLinks = [
    {
        title: "Tabela com todos os registros de GPS",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_onibus_gps&t=sppo_registros&page=table",
        decodeRefs: ["/decode/decode1", "/decode/decode5"]
    },
    {
        title:
            "Tabela de contagem do número de passageiros por hora. Agrega valores da tabela de transações por: data, hora, modo, consorcio, operadora, servico, sentido e tipo de transacao",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=passageiros_hora&page=table",
        decodeRefs: ["/decode/decode1", "/decode/decode5"]
    },
    {
        title:
            "Tabela com informações da Jaé sobre as transações realizadas no sistema de transporte municipal",
        link: "https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=transacao&page=table",
        decodeRefs: ["/decode/decode1", "/decode/decode5"]
    },
];

export const decode = [
    { title: "Rio 60 graus", link: "/decode/decode1" },
    {
        title: "Indo ' alimentar ' os bairros ricos da zona sul",
        link: "/decode/decode2",
    },
    { title: "Voltando da praia", link: "/decode/decode3" },
    { title: "Superlotação", link: "/decode/decode4" },
    { title: "Uma questão de cor", link: "/decode/decode5" },
    { title: "Uma nova forma de exclusão a caminho?", link: "/decode/decode6" },
    {
        title: "Sempre em alerta ao que está acontecendo na Brasil",
        link: "/decode/decode7",
    },
    { title: "Com os pés molhados", link: "/decode/decode8" },
    { title: "As ambições do 1736", link: "/decode/decode9" },
];
