<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { jacare_semana } from "../data/jacare_semana.js";
    import { jacare_semana_volta } from "../data/jacare_semana_volta.js";
    import { AVG_jacare_semana } from "../data/AVG_jacare_semana.js";
    import { AVG_jacare_semana_volta } from "../data/AVG_jacare_semana_volta.js";
    import { ponto_final } from "../data/89a8a06113bffff.js";
    import Panzoom from "@panzoom/panzoom";

    export let src = "h3re9.svg";
    export let height = "1000px";
    export let width = "100%";

    let svgContainer;
    let panzoom;

    onMount(() => {
        Prism.highlightAll();
    });

    onMount(async () => {
        const url = `${import.meta.env.BASE_URL}${src}`;
        const res = await fetch(url);
        const svgText = await res.text();

        svgContainer.innerHTML = svgText;

        const svgElement = svgContainer.querySelector("svg");

        if (svgElement) {
            panzoom = Panzoom(svgElement, {
                contain: "outside",
                maxScale: 10,
                minScale: 1,
            });

            svgElement.parentElement.addEventListener("wheel", (e) => {
                if (e.ctrlKey) {
                    e.preventDefault();
                    panzoom.zoomWithWheel(e);
                }
            });
        }
    });

    function zoomIn() {
        panzoom?.zoomIn();
    }

    function zoomOut() {
        panzoom?.zoomOut();
    }

    function reset() {
        panzoom?.reset();
    }
</script>

<div class="content">
    <div class="intro-decode">
        <div class="pres-decode">
            <h1>Indo "alimentar" os bairros ricos da zona sul</h1>
            <p>
                Babás, empregadas domésticas, camareiras, vendedoras, garçons e
                pedreiros desembarcam na zona sul todas as manhãs. A cidade está
                planejada para que a zona norte “alimente” os bairros ricos da
                zona sul. Enquanto os ônibus que seguem no sentido sul circulam
                lotados, os que seguem no sentido norte ficam vazios.
            </p>
        </div>
        <div class="refer-decode">
            <h4>Banco de dados utilizado nesta decodificação</h4>
            <ul>
                <li>
                    <a
                        href="hhttps://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_hora&page=table"
                        target="_blank"
                        >Tabela de contagem do número de passageiros por hora.
                        Agrega valores da tabela de transações por: data, hora,
                        modo, consorcio, operadora, servico, sentido e
                        tipo_transacao</a
                    >
                </li>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?ws=!1m5!1m4!4m3!1srj-smtr!2sbilhetagem!3spassageiro_tile_hora"
                        target="_blank"
                        >Tabela de contagem do número de passageiros por hora.
                        Agrega valores das tabelas transacao e transacao_riocard
                        por: data, hora, modo, consorcio, operadora, servico,
                        sentido, tipo_transacao e tile_id</a
                    >
                </li>
            </ul>
        </div>
    </div>

    <div class="content-decode">
        <p style="font-family: 'Roboto Mono'; font-size:0.8rem;">
            A cada dez minutos, um 474 lotado e suado atravessa o túnel de Santa
            Bárbara. É a metade da viagem, que pode levar até 2h30 até a parada
            final. Desde a primeira parada, do outro lado, começa o desembarque:
            babás, diaristas, empregadas domésticas, vendedoras, garçons e
            pedreiros. É em Copacabana que o ônibus começa a esvaziar com mais
            intensidade. Pela porta traseira, seus passageiros se dirigem aos
            balcões das lojas, cafeterias ou à cozinha do chefe, aos quais se
            acessa por portas dissimuladas em entradas de garagens e elevadores
            segregados. O barulho do motor é substituído pelo barulho dos
            martelos e sinos dos restaurantes. Os espaços e a rotina servil são
            vividos em pé, desde a espera pelo ônibus no ponto até o retorno
            para casa, que só com muita sorte poderá ser feito sentado - Gabriel
            Weber, 2024.
        </p>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    Os dados sobre os passageiros estão disponíveis em um banco
                    de dados disponibilizado pela Secretaria Municipal de
                    Transportes chamado <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_hora&page=table"
                        target="_blank"
                        >Tabela de contagem do número de passageiros por hora</a
                    >.<br />Para acessar o número de passageiros por hora
                    embarcados no 474 em ambos os sentidos, entre 17 e 21 de
                    fevereiro de 2025, uma semana comun de trabalho antes do
                    carnaval e no meio de uma onda de calor, é necessário
                    realizar a seguinte consulta:
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
-- Lógica: selecionar as colunas data e hora e criar uma coluna que represente a soma da quantidade de passageiros retirada da coluna “quantidade_passageiros” ( essa coluna deve ser chamada de “total_passageiros”)
-- no banco de dados (`rj-smtr.bilhetagem.passageiro_hora`) 
-- que atendem às condições: entre duas datas (BETWEEN DATE) e 
-- o serviço é o 474 (servico_jae ="474") e
-- a direção é de Jacaré para Copacabana (sentido = "0").
-- Para que o resultado seja compreensível, ordene a tabela extraída por data e hora

SELECT data, hora, SUM(quantidade_passageiros) AS total_passageiros 
FROM `rj-smtr.bilhetagem.passageiro_hora` 
WHERE data BETWEEN DATE('2025-02-17') AND DATE('2025-02-21') 
AND servico_jae ="474" 
AND sentido = "0"
GROUP BY data, hora 
ORDER BY data, hora

-- Para obter os dados da volta Copacabana pro Jacaré, é preciso trocar sentido="0" por sentido="1".

    </code></pre>

        <div
            class="split-cont"
            style="grid-template-columns: 1fr 1fr !important;"
        >
            <div class="split-left">
                <p>
                    Total de passageiros embarcados no 474 entre 17 e 21 de
                    fevereiro de 2025, sentido Copacabana
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Total de passageiros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each jacare_semana as row}
                            <tr>
                                <td>{row.data}</td>
                                <td>{row.hora}</td>
                                <td>{row.total_passageiros}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <div
                class="split-right"
                style="background: none !important; color:rgb(42, 10, 92); padding:0; display:block"
            >
                <p>
                    Total de passageiros embarcados no 474 entre 17 e 21 de
                    fevereiro de 2025, sentido Jacaré
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Total de passageiros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each jacare_semana_volta as row}
                            <tr>
                                <td>{row.data}</td>
                                <td>{row.hora}</td>
                                <td>{row.total_passageiros}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>

        <p>
            Enquanto desde cedo os moradores da zona norte embarcam nos ônibus
            para atravessar o túnel de Santa Bárbara, a zona sul ainda dorme. Ao
            calcular a diferença entre a média de passageiros nos dois sentidos
            (por exemplo, no intervalo horário das 4 às 12), mesmo considerando
            as múltiplas modalidades de transporte e linhas para se deslocar
            pela zona sul ou para o norte, a diferença é gritante:
        </p>

        <pre><code class="language-sql">

WITH por_dia AS (
  SELECT
    data,
    hora,
    SUM(quantidade_passageiros) AS total_passageiros
  FROM `rj-smtr.bilhetagem.passageiro_hora`
  WHERE data BETWEEN DATE('2025-02-17') AND DATE('2025-02-21')
    AND hora &gt; 4 AND hora &lt; 12
    AND servico_jae = "474"
    AND sentido = "0"
  GROUP BY data, hora
)
SELECT
  hora,
  AVG(total_passageiros) AS media_passageiros
FROM por_dia
GROUP BY hora
ORDER BY hora

    </code></pre>

        <div
            class="split-cont"
            style="grid-template-columns: 1fr 1fr !important;"
        >
            <div class="split-left">
                <p>
                    Media de passageiros embarcados no 474 entre 17 e 21 de
                    fevereiro de 2025, intervalo horário das 4 às 12, sentido
                    Copacabana
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Madia de passageiros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each AVG_jacare_semana as row}
                            <tr>
                                <td>{row.hora}</td>
                                <td>{row.media_passageiros}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <div
                class="split-right"
                style="background: none !important; color:rgb(42, 10, 92); padding:0; display:block"
            >
                <p>
                    Media de passageiros embarcados no 474 entre 17 e 21 de
                    fevereiro de 2025, intervalo horário das 4 às 12, sentido
                    Jacaré
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Media de passageiros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each AVG_jacare_semana_volta as row}
                            <tr>
                                <td>{row.hora}</td>
                                <td>{row.media_passageiros}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>

        <p>
            Esses dados podem ser ainda mais específicos, identificando quantas
            pessoas embarcam no 474 em determinados pontos. Isso é possível
            através de uma análise espacial, utilizando o sistema de referência
            disponibilizado pela Secretaria Municipal de Transportes, que
            segmentou a cidade numa malha hexagonal, onde cada hexágono possui
            um identificador.
        </p>

        <div class="svg-wrapper" style:width style:height>
            <div
                class="svg-container"
                bind:this={svgContainer}
                style="border:1px solid #ccc; overflow:hidden; width:100%; height:100%;"
            ></div>

            <div class="controls">
                <button on:click={zoomIn}>+</button>
                <button on:click={zoomOut}>–</button>
                <button on:click={reset}>Reset</button>
            </div>
        </div>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    O primeiro passo é identificar em qual hexágono os pontos
                    estão localizados. Por exemplo, a parada inicial (Ponto
                    final: Jacaré :: Álvaro Seixas - R. Álvaro Seixas, 150), na
                    malha hexagonal disponível no banco de dados chamado <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_geo&t=h3_res9&page=table"
                        target="_blank">h3_res9</a
                    >
                    , está localizado no hexágono identificado como "89a8a06113bffff".
                    <br /><br />
                    Tendo esse identificador, é possível determinar o número de passageiros
                    embarcados no 474 nesse ponto, consultando o banco de dados chamado
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_tile_hora&page=table"
                        target="_blank"
                        >Tabela de contagem do número de passageiros por hora.
                        Agrega valores das tabelas transacao e transacao_riocard
                        por: data, hora, modo, consorcio, operadora, servico,
                        sentido, tipo_transacao e tile_id</a
                    >, executando a seguinte consulta:
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

        <pre><code class="language-sql">
-- Lógica: obter a malha hexagonal visualizável através do software GIS,
-- no banco de dados (`rj-smtr.br_rj_riodejaneiro_geo.h3_res9`) 

SELECT * 
FROM `rj-smtr.br_rj_riodejaneiro_geo.h3_res9`

    </code></pre>

        <pre><code class="language-sql">
-- Lógica: selecionar as colunas data e hora e criar uma coluna que represente a soma da quantidade de passageiros retirada da coluna “quantidade_passageiros” ( essa coluna deve ser chamada de “total_passageiros”)
-- no banco de dados (`rj-smtr.bilhetagem.passageiro_tile_hora`) 
-- que atendem às condições: data (data ='2025-02-21') e 
-- o serviço é o 474 (servico_jae ="474") e
-- a direção é de Jacaré para Copacabana (sentido = "0") e
-- o ponto está localizado no hexágono cujo identificador é conhecido (tile_id = "89a8a06113bffff")
-- Para que o resultado seja compreensível, ordene a tabela extraída por data e hora

SELECT data, hora, SUM(quantidade_passageiros) AS total_passageiros 
FROM `rj-smtr.bilhetagem.passageiro_tile_hora` 
WHERE data ='2025-02-21' 
AND servico_jae ="474" 
AND sentido="0" 
AND tile_id = "89a8a06113bffff" 
GROUP BY data, hora 
ORDER BY data, hora

    </code></pre>

        <p>
            Total de passageiros embarcados no 474 em 21 de fevereiro de 2025,
            sentido Copacabana, na parada inicial: Ponto final Jacaré :: Álvaro
            Seixas (R. Álvaro Seixas, 150)
        </p>
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Total de passageiros</th>
                </tr>
            </thead>
            <tbody>
                {#each ponto_final as row}
                    <tr>
                        <td>{row.data}</td>
                        <td>{row.hora}</td>
                        <td>{row.total_passageiros}</td>
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
