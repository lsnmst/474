<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { distinct_temp } from "../data/distinct_temp.js";
    import { quatro_temp } from "../data/474_temp.js";
    import SvgTemp from "./Mapa1.svelte";

    onMount(() => {
        Prism.highlightAll();
    });
</script>

<div class="content">
    <div class="intro-decode">
        <div class="pres-decode">
            <h1>Rio 60 graus</h1>
            <p>
                Rio bate o recorde de 60 °C de sensação térmica e os jornais
                abrem suas matérias comemorando com imagens de banhistas lotando
                as praias da zona sul. Esquecendo quem vive no Hell de Janeiro
                das comunidades marginalizadas e em áreas de risco, dos
                motoristas e passageiros dentro de ônibus sem ar condicionado.
            </p>
        </div>
        <div class="refer-decode">
            <h4>Banco de dados utilizado nesta decodificação</h4>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=gps_validador&page=table"
                        target="_blank"
                        >Tabela de posições de GPS de todos os validadores da
                        Jaé instalados, incluindo estado do equipamento,
                        serviço, sentido e veículo associado e temperatura do
                        veículo.</a
                    >
                </li>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=trips&page=table"
                        target="_blank">GTFS - Viagens para cada rota</a
                    >
                </li>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=shapes_geom&page=table"
                        target="_blank"
                        >GTFS - Shapes em formatos geográficos para cada rota</a
                    >
                </li>
            </ul>
        </div>
    </div>

    <div class="content-decode">
        <p>
            Às 12h35 do dia 17 de fevereiro de 2025, o Rio atingiu o Nível de
            Calor 4 (NC4) pela primeira vez desde a criação do protocolo para
            altas temperaturas. O NC4 é atingido quando a temperatura na cidade
            permanece entre 40 °C e 44 °C por pelo menos três dias consecutivos.
            O modelo foi desenvolvido em colaboração com os departamentos de
            Saúde, Meio Ambiente e Clima, além do Centro Operacional Rio (COR),
            e tem como base o Índice de Calor, que leva em consideração a
            temperatura e a umidade relativa do ar.
        </p>
        <h3>
            Quais linhas colocaram para rodar, em 17 de fevereiro de 2025,
            veículos sem ar condicionado, cuja temperatura interna ultrapassou
            os 50 °C?
        </h3>
        <p>
            A partir do inverno de 2024, começou a instalação de sensores de
            temperatura em todos os ônibus municipais. Esses sensores enviam
            dados para os aparelhos Jaé e são disponibilizados pela Secretaria
            Municipal de Transportes. O plano é claro: a empresa que não cumprir
            com a temperatura aceitável terá seu subsídio da prefeitura reduzido
            (um ar-condicionado, segundo a Associação Brasileira de Normas
            Técnicas, tem que reduzir a temperatura nos veículos em no mínimo
            8°C em relação à temperatura externa).
        </p>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    Os dados de temperatura estão disponíveis em um banco de
                    dados disponibilizado pela Secretaria Municipal de
                    Transportes chamado <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=gps_validador&page=table"
                        target="_blank"
                        >Tabela de posições de GPS de todos os validadores da
                        Jaé instalados, incluindo estado do equipamento,
                        serviço, sentido e veículo associado e temperatura do
                        veículo</a
                    >
                    .<br />Para acessar as temperaturas de todos os ônibus
                    municipais em 17 de fevereiro de 2025, é necessário executar
                    a seguinte busca:
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
                    >.
                </p>
            </div>
        </div>

        <!-- CODE BLOCK -->

        <pre><code class="language-sql">
-- Lógica: selecionar TODAS as distintas linhas de ônibus (descricao_servico_jae) 
-- no banco de dados (`rj-smtr.br_rj_riodejaneiro_bilhetagem.gps_validador`) 
-- que atendem às condições: data (`data` = "2025-02-17" ) e 
-- temperatura em °C (temperatura > 50,0).

SELECT DISTINCT id_servico_jae, descricao_servico_jae 
FROM `rj-smtr.br_rj_riodejaneiro_bilhetagem.gps_validador` 
WHERE `data` = "2025-02-17" 
AND temperatura > 50.0

    </code></pre>

        <table>
            <thead>
                <tr>
                    <th>ID serviço Jaé</th>
                    <th>Descrição serviço Jaé</th>
                </tr>
            </thead>
            <tbody>
                {#each distinct_temp as row}
                    <tr>
                        <td>{row.servico_jae}</td>
                        <td>{row.descricao_servico_jae}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <p>
            Esta é a tabela das linhas que colocaram para rodar, em 17 de
            fevereiro de 2025, veículos sem ar condicionado, cuja temperatura
            interna ultrapassou os 50 °C. É possível, por exemplo, criar um mapa
            das linhas envolvidas, para compará-lo com a extensão de toda a
            rede.
        </p>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    Os dados espaciais para criar um mapa das linhas envolvidas
                    podem ser extraídos através do uso de duas tabelas. A tabela
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=trips&page=table"
                        target="_blank">GTFS - Viagens para cada rota</a
                    >
                    e a tabela
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=gtfs&t=shapes_geom&page=table"
                        target="_blank"
                        >GTFS - Shapes em formatos geográficos para cada rota</a
                    >
                    . Cada dado espacial está associado a um identificador que, por
                    várias razões, não coincide com o nome da linha. Por exemplo,
                    a linha 483 Penha - General Osório tem o identificador 'byuc'
                    (que obtenho da tabela GTFS - Viagens para cada rota), ao qual
                    corresponde uma geometria (que obtenho da tabela GTFS - Formatos
                    geográficos para cada rota).
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
                    >.
                </p>
            </div>
        </div>

        <!-- CODE BLOCK -->

        <pre><code class="language-sql">

-- Lógica: pesquisar os IDs das geometrias das linhas (shape_id) 
-- no banco de dados (`rj-smtr.gtfs.trips`) 
-- que atendem às condições: está entre as linhas que colocaram para rodar, em 17 de fevereiro de 2025, veículos sem ar condicionado, cuja temperatura interna ultrapassou os 50 °C.

SELECT DISTINCT trip_short_name, shape_id 
FROM `rj-smtr.gtfs.trips` 
WHERE trip_short_name IN ("920", "O46TSC", "624", "SN624", "371", "108", "685", "808", "871","SN639", "112", "721", "639", "638", "680", "804", "883", "100", "497", "629", "919", "L20TDO", "553", "855", "841", "917", "SV917", "463", "LECD87", "021SAL", "309", "867", "884", "483", "905", "607", "548", "864", "SV624", "110", "498", "775", "918")

    </code></pre>

        <pre><code class="language-sql">

-- Lógica: extrair as geometrias das linhas (shape ) em formato WKT utilizável por softwares GIS
-- no banco de dados (`rj-smtr.gtfs.shapes_geom`) 
-- que atendem às condições: tem o shape_id das linhas que colocaram para rodar, em 17 de fevereiro de 2025, veículos sem ar condicionado, cuja temperatura interna ultrapassou os 50 °C.

SELECT shape_id, shape 
FROM `rj-smtr.gtfs.shapes_geom` 
WHERE shape_id IN ("byuc", "fl98", "y35p", "O0112AAA0AIDU02", "O0864AAA0AIDU01", "O0919AAA0AVDU02", "10f900a8-7a30-43b5-a2a3-bde69060e1be", "49ff21ac-2dab-4583-81ff-337fafcab12c",..., "yhfv")
   
    </code></pre>

        <div class="split-cont" style="margin-top: 3rem;">
            <div class="split-left">
                <p>
                    As geometrias extraídas se encontram no formato WKT
                    “Well-known text representation of geometry” e podem ser
                    visualizadas pelos softwares GIS mais comuns. As WKT são
                    conjuntos de coordenadas. Um exemplo de geometria no formato
                    WKT é:
                </p>
                <pre><code>
LINESTRING(-43.68531 -22.91527, -43.68566 -22.91496,
-43.68607 -22.91452, -43.68616 -22.91435, -43.68641
-22.91334, -43.68652 -22.91295, -43.6867 -22.91264,
-43.68692 -22.91225, -43.68727 -22.91152, -43.68735
-22.91115, -43.68738 -22.91068, -43.68735 -22.91054,
-43.68731 -22.91043, -43.68716 -22.91019, -43.68601
-22.90861, -43.68424 -22.90618, -43.68292 -22.90433,
-43.68251 -22.90379, -43.68218 -22.90335, -43.68167
-22.90264, -43.68149 -22.90235, -43.68106 -22.9018,
...
-43.65868 -22.88406, -43.65855 -22.88415, -43.65838
-22.88432, -43.65826 -22.88443, -43.65754 -22.88521,
-43.65611 -22.88679)
                </code></pre>
            </div>
            <div class="split-right">
                <p>
                    Para adicionar uma geometria WKT no QGIS, siga o
                    <a
                        target="_blank"
                        href="https://gis-stackexchange-com.translate.goog/questions/202770/loading-wkt-polygons-into-qgis?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp"
                        >tutorial</a
                    >.
                </p>
            </div>
        </div>

        <SvgTemp src="/temp.svg" height="600px" width="100%" />

        <br /> <br /> <br /> <br /><br /> <br />
        <h3>
            Qual foi a temperatura atingida pelos veículos da linha 474 em 17 de
            fevereiro de 2025?
        </h3>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    É possível responder a essa pergunta consultando a <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=gps_validador&page=table"
                        target="_blank"
                        >Tabela de posições de GPS de todos os validadores da
                        Jaé instalados, incluindo estado do equipamento,
                        serviço, sentido e veículo associado e temperatura do
                        veículo</a
                    >. Essa questão levanta diferentes assuntos, desde atrasos
                    na instalação dos sensores de temperatura, sabotagens e mau
                    funcionamento dos aparelhos instalados em algumas linhas,
                    até a falta de conexão entre os sensores e os aparelhos.
                    Retratando a falácia na leitura acrítica dos dados. Em 17 de
                    fevereiro de 2025, os 23 veículos da linha 474 que a Braso
                    Lisboa colocou para rodar não transmitiram dados aos
                    aparelhos Jaé. Isso é evidenciado ao ler as tabelas, sendo
                    que o campo de temperatura apresenta resultados nulos ou
                    iguais a 0.
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
                    >.
                </p>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Operadora</th>
                    <th>ID serviço Jaé</th>
                    <th>ID veiculo</th>
                    <th>Temperatura</th>
                </tr>
            </thead>
            <tbody>
                {#each quatro_temp as row}
                    <tr>
                        <td>{row.data}</td>
                        <td>{row.hora}</td>
                        <td>{row.operadora}</td>
                        <td>{row.servico_jae}</td>
                        <td>{row.id_veiculo}</td>
                        <td>{row.temperatura}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    .intro-decode {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 3rem;
        margin-bottom: 2rem;
        background: #d2fb85;
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
