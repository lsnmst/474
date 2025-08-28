<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";

    import Panzoom from "@panzoom/panzoom";

    import { bozo } from "../data/bozo.js";
    import Mapa2 from "./Mapa2.svelte";

    onMount(() => {
        Prism.highlightAll();
    });

    export let src = "cor.svg";
    export let height = "1000px";
    export let width = "100%";

    let svgContainer;
    let panzoom;

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

            panzoom.zoom(1, { animate: false });

            panzoom.setTransform({
                scale: 2,
                x: -2000, // negative moves content left
                y: -2000, // negative moves content up
            });

            const { width, height } = svgElement.getBBox();
            svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`);

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

<div class="intro-decode">
    <div class="pres-decode">
        <h1>Uma questão de cor</h1>
        <p>TEXT</p>
    </div>
    <div class="refer-decode">
        <h4>Banco de dados utilizado nesta decodificação</h4>
        <ul>
            <li>
                <a
                    href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_veiculos&t=gps_sppo&page=table"
                    target="_blank"
                    >Tabela com os dados tratados de registros de GPS do SPPO,
                    incluindo velocidade estimada, estado de movimento, parada
                    em terminal ou garagem e interseção com o traçado da linha
                    informada</a
                >
            </li>
            <li>
                <a
                    href="https://ftp.ibge.gov.br/Censos/Censo_Demografico_2010/Resultados_do_Universo/Agregados_por_Setores_Censitarios/"
                    target="_blank"
                    >Censo Demográfico 2010: Agregados por Setores Censitários -
                    Resultados do Universo</a
                >
            </li>
        </ul>
    </div>
</div>

<div class="content-decode">
    <p>
        7 de setembro de 2022 (veículo A29064). Oito jovens negros não
        identificados protestaram dentro do ônibus da linha 474 Jacaré -
        Copacabana contra a motociata de apoiadores do presidente Jair Bolsonaro
        (PL) em Copacabana. Eles foram obrigados a sair do veículo e revistados
        por três policiais militares do Batalhão de Choque logo em seguida. Uma
        testemunha filmou toda a ação. Nas imagens, é possível ver os jovens
        apoiados com as mãos no ônibus, enquanto os outros passageiros
        aguardavam dentro do veículo. A PM revistou roupas, bolsas e alimentos
        que os jovens portavam. Um dos policiais chegou a desbloquear o celular
        de um deles e mexeu em aplicativos e mensagens privadas. Outro jovem
        mostrou a carteira de trabalho.
    </p>
    <h3>
        Qual foi o trajeto realizado pelo veículo A29064 da frota 474 em 7 de
        setembro de 2022?<br />Onde a PM revistou os suspeitos?
    </h3>

    <div class="split-cont">
        <div class="split-left">
            <p>
                Os dados relativos à localização GPS de todos os ônibus
                municipais estão disponíveis em um banco de dados
                disponibilizado pela Secretaria Municipal de Transportes,
                chamado <a
                    href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_veiculos&t=gps_sppo&page=table"
                    target="_blank"
                    >Tabela com os dados tratados de registros de GPS do SPPO,
                    incluindo velocidade estimada, estado de movimento, parada
                    em terminal ou garagem e interseção com o traçado da linha
                    informada</a
                >. Para acessar a localização do veículo A29064 em 7 de
                fevereiro de 2022, é necessário realizar a seguinte pesquisa:
            </p>
        </div>
        <div class="split-right">
            <p>
                Este exercício é conduzido através dos serviços do Google Cloud.
                Para conectar sua conta do Google e aprender suas funções
                básicas, siga o
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
-- Lógica: Selecione todas as colunas 
-- no banco de dados (`rj-smtr.br_rj_riodejaneiro_veiculos.gps_sppo`) 
-- que atendem às condições: data (`data` = 2022-09-07" ) e 
-- serviço 474 (servico = "474") e
-- identificativo veiculo A29064 (id_veiculo = "A29064")

SELECT * 
FROM `rj-smtr.br_rj_riodejaneiro_veiculos.gps_sppo` 
WHERE data = "2022-09-07" 
AND servico = "474" 
AND id_veiculo = "A29064"

    </code></pre>

    <table>
        <thead>
            <tr>
                <th>GPS timestamp</th>
                <th>Data</th>
                <th>Hora</th>
                <th>ID veiculo</th>
                <th>Serviço</th>
                <th>Status</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>
        </thead>
        <tbody>
            {#each bozo as row}
                <tr>
                    <td>{row.timestamp_gps}</td>
                    <td>{row.data}</td>
                    <td>{row.hora}</td>
                    <td>{row.id_veiculo}</td>
                    <td>{row.servico}</td>
                    <td>{row.status}</td>
                    <td>{row.latitude}</td>
                    <td>{row.longitude}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<div class="split-cont" style="margin-top: 3rem;">
    <div class="split-left">
        <p>
            A tabela fornece as coordenadas geográficas no sistema de referência
            <a target="_blank" href="https://epsg.io/4326">EPSG:4326 WGS 84</a> do
            sinal GPS dos ônibus municipais, que podem ser visualizadas pelos softwares
            GIS mais comuns.
        </p>
    </div>
    <div class="split-right">
        <p>
            Para adicionar as geometrias dos pontos GPS no QGIS, é necessário
            adicionar um novo “delimited text layer”, conforme indicado no
            <a
                target="_blank"
                href="https://gis-stackexchange-com.translate.goog/questions/273143/adding-delimited-text-layer-in-qgis?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp"
                >tutorial</a
            >. Para converter os pontos em uma linha que une os pontos GPS, no
            QGIS é necessário usar a ferramenta “Points to Path” usando como
            “Order Expression” o campo “Timestamp_gps”.
        </p>
    </div>
</div>

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

<Mapa2 />

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
</style>
