<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { fogo } from "../data/fogo.js";
    import { trafego } from "../data/trafego.js";

    import SvgTrafego from "./Mapa6.svelte";

    onMount(() => {
        Prism.highlightAll();
    });
</script>

<div class="content">
    <div class="intro-decode">
        <div class="pres-decode">
            <h1>Sempre em alerta ao que está acontecendo na Brasil</h1>
            <p>
                A Avenida Brasil é uma das artérias mais frágeis da cidade. Se
                por algum motivo estiver interditada, o resto da cidade também
                fica parado. E se o motivo for uma operação policial realizada
                numa das comunidades adjacentes, isso se torna também um
                problema de segurança.
            </p>
        </div>
        <div class="refer-decode">
            <h4>Banco de dados utilizado nesta decodificação</h4>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_veiculos&t=gps_sppo&page=table"
                        target="_blank"
                        >Tabela com os dados tratados de registros de GPS do
                        SPPO, incluindo velocidade estimada, estado de
                        movimento, parada em terminal ou garagem e interseção
                        com o traçado da linha informada</a
                    >
                </li>
            </ul>
            <ul>
                <li>
                    <a
                        href="https://api.fogocruzado.org.br/search"
                        target="_blank"
                        >Incidentes envolvendo violência armada</a
                    >
                </li>
            </ul>
        </div>
    </div>

    <div class="content-decode">
        <p style="font-family: 'Roboto Mono'; font-size:0.8rem;">
            <u
                >10 de junho de 2025, h 5:56, Av. Brasil - Passarela IBGE/Parada
                de Lucas.</u
            > O Centro de Operações e Resiliência da Prefeitura do Rio (COR-Rio)
            informa que o município do Rio de Janeiro entrou no ESTÁGIO 2 às 06h50,
            em função de uma ocorrência policial que interdita a Avenida Brasil e
            a Linha Vermelha, nos dois sentidos, na altura de Vigário Geral. Às 7h35
            a direção da UFRJ determina que não haja aplicação de provas e avaliações
            e não sejam cobradas presenças dos estudantes e servidores em todos os
            campus. Quatro unidades de saúde estão temporariamente interditadas.
        </p>
        <p>
            Essas informações rapidamente se espalharam pelos grupos do WhatsApp
            das linhas que transitam pela Avenida Brasil, provocando a ira dos
            passageiros dos ônibus parados na pista ou aguardando nos pontos. A
            passageira Mônica afirma drasticamente "No sábado eles não sabiam
            que tinha uma festa junina" referindo-se à morte do jovem Herus
            Guimarães Mendes, baleado durante uma operação no Morro Santo Amaro
            enquanto a comunidade celebrava, "hoje eles não sabiam também que na
            terça 06h da manhã a Avenida Brasil estaria movimentada". A
            interdição das principais vias da cidade levantou dúvidas sobre as
            decisões das forças de segurança, que deixaram a cidade paralisada
            sem oferecer alternativas para se deslocar.
        </p>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    <a href="https://fogocruzado.org.br/" target="_blank"
                        >Fogo Cruzado</a
                    >
                    produz dados colaborativos sobre ocorrências de violência armada
                    na cidade do Rio de Janeiro. A geolocalização desses dados pode
                    revelar pontos críticos na prestação de serviços essenciais da
                    cidade, incluindo o transporte. Os dados estão disponíveis no
                    banco de dados
                    <a
                        href="https://api.fogocruzado.org.br/search"
                        target="_blank"
                        >Incidentes envolvendo violência armada</a
                    >. Veja as ocorrências de 10 de junho de 2025:
                </p>
            </div>
            <div
                class="split-right"
                style="background: none; border: 1px #c743c7 solid"
            ></div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Endereço</th>
                    <th>Bairro</th>
                    <th>Localidade</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Data</th>
                    <th>Causa principal</th>
                </tr>
            </thead>
            <tbody>
                {#each fogo as row}
                    <tr>
                        <td>{row.address}</td>
                        <td>{row.neighborhood}</td>
                        <td>{row.locality}</td>
                        <td>{row.latitude}</td>
                        <td>{row.longitude}</td>
                        <td>{row.data}</td>
                        <td>{row.main_reason}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    Ao verificar possíveis paralisações de serviço nas linhas
                    municipais, é possível extrair todos os dados GPS dos
                    veículos em um determinado intervalo de tempo. Os dados
                    relativos à localização GPS de todos os ônibus municipais
                    estão disponíveis em um banco de dados disponibilizado pela
                    Secretaria Municipal de Transportes, chamado <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_veiculos&t=gps_sppo&page=table"
                        target="_blank"
                        >Tabela com os dados tratados de registros de GPS do
                        SPPO, incluindo velocidade estimada, estado de
                        movimento, parada em terminal ou garagem e interseção
                        com o traçado da linha informada</a
                    >. Para visualizar em um mapa a circulação dos ônibus (com a
                    lógica de combinar os pontos GPS de cada veículo) entre as
                    6h e as 6h30 do dia 10 de junho de 2025, horário em que teve
                    início a operação policial no complexo de Israel, é possível
                    executar a busca:
                </p>
            </div>
            <div class="split-right">
                <p>
                    Este exercício é conduzido através dos serviços do Google
                    Cloud. Para conectar sua conta do Google e aprender suas
                    funções básicas, siga o
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/"
                        >tutorial</a
                    >. Caso contrário, use preferencialmente
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/#acessando-dados-via-python"
                        >Python</a
                    >
                    ou
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/#acessando-dados-via-r"
                        >R</a
                    >. <br /><br />Para adicionar uma geometria WKT no QGIS,
                    siga o
                    <a
                        target="_blank"
                        href="https://gis-stackexchange-com.translate.goog/questions/202770/loading-wkt-polygons-into-qgis?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp"
                        >tutorial</a
                    >.
                </p>
            </div>
        </div>

        <pre><code class="language-sql">
-- Lógica: Criar uma geometria WKT (agregando todos os pares de latitude e longitude ordenados por hora) para cada veículo do qual quero saber qual serviço está realizando
-- no banco de dados (`rj-smtr.br_rj_riodejaneiro_veiculos.gps_sppo`) 
-- que atendem às condições: intervalo de horário e 
-- esteja em operação (flag_em_operacao = TRUE) e
-- que não esteja parado porque o veículo está no ponto, terminal ou garagem (tipo_parada IS NULL)

SELECT
  id_veiculo,servico,
  ST_AsText(
    ST_MakeLine(
      ARRAY_AGG(ST_GEOGPOINT(longitude, latitude) ORDER BY hora)
    )
  ) AS wkt_geom
FROM `rj-smtr.br_rj_riodejaneiro_veiculos.gps_sppo`
WHERE data = "2025-06-10"
  AND hora &gt; '06:00:00' AND hora &lt; '06:30:00'
  AND flag_em_operacao = TRUE
  AND tipo_parada IS NULL
GROUP BY id_veiculo, servico;

    </code></pre>

        <table>
            <thead>
                <tr>
                    <th>ID veiculo</th>
                    <th>Serviço</th>
                    <th>WKT</th>
                </tr>
            </thead>
            <tbody>
                {#each trafego as row}
                    <tr>
                        <td>{row.id_veiculo}</td>
                        <td>{row.servico}</td>
                        <td>{row.wkt_geom}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <SvgTrafego src="/trafego.svg" height="800px" width="100%" />

        <p></p>
    </div>
</div>

<style>
    .intro-decode {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 3rem;
        margin-bottom: 2rem;
        background: #d2fb85;
        align-items: center;
    }

    .split-cont {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
        margin-bottom: 2rem;
    }

    .split-right {
        background: #c743c7;
        color: #f3f3e4;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
    }

    .split-right a {
        color: #f3f3e4;
        text-decoration: underline;
    }

    .pres-decode {
        font-size: 1.2rem;
        line-height: 1.4rem;
    }

    .refer-decode {
        border-left: 1px solid #ddd;
        padding: 1rem;
        border-radius: 8px;
    }

    .refer-decode h4 {
        margin-bottom: 1.5rem;
    }

    .refer-decode ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .refer-decode li {
        margin-bottom: 1.5rem;
        line-height: 1rem;
    }

    .content-decode {
        padding: 3rem;
    }

    .content-decode h3 {
        line-height: 1.3;
        padding: 2rem;
        border: #ddd 2px solid;
    }

    .svg-wrapper {
        position: relative; /* makes controls position relative to this box */
        display: inline-block;
    }
    .controls {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .controls button {
        background: #ffffff00;
        color: black;
        border: 1px solid #ddd;
        padding: 0.3rem 0.6rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        box-shadow: none;
    }
    .controls button:hover {
        background: #c743c7;
    }
    table::-webkit-scrollbar {
        width: 5px;
    }
    table::-webkit-scrollbar-track {
        background: #f3f3e4;
    }
    table::-webkit-scrollbar-thumb {
        background: #888;
    }
    table::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    pre {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
    }
    code {
        font-family: "Fira Code", monospace;
        font-size: 0.9rem;
    }

    table {
        font-family: "Roboto Mono", sans-serif;
        font-size: 0.7rem;
        margin: 4rem auto;
    }

    p {
        margin: 3rem 1rem 3rem 1rem;
        line-height: 1.3rem;
    }

    th,
    td {
        padding: 0.6rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        .content-decode {
            padding: 0.8rem;
        }
        .intro-decode {
            display: inline-block;
            padding: 1rem;
        }
        .split-cont {
            display: inline-block;
            max-width: 90%;
        }
        table {
            table-layout: fixed !important;
            width: 90%;
        }
    }
</style>
