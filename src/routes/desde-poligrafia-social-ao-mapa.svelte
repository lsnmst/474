<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import Panzoom from "@panzoom/panzoom";

    export let src = "hex-eser.svg";
    export let height = "800px";
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

    let fullscreen = false;
    let fullscreenCentral = false;
    let fullscreenPavuna = false;

    let imgSrc = "poligrafia.jpg";
    let imgSrcGeo = "geojson.png";
    let imgSrcCentral = "central.png";
    let imgSrcPavuna = "pavuna.png";
</script>

<div class="content">
    <div class="intro-decode">
        <div class="pres-decode">
            <h1>Desde a poligrafia social ao mapa</h1>
        </div>
        <div class="refer-decode">
            <h4>Ferramentas adotadas</h4>
            <ul>
                <li>
                    Lápis e papel, <a href="https://geojson.io" target="_blank"
                        >GEOJSON.IO</a
                    >,
                    <a href="https://cloud.google.com/" target="_blank"
                        >Google Cloud</a
                    >,
                    <a href="https://qgis.org/" target="_blank">QGIS</a>
                </li>
            </ul>

            <h4>Banco de dados utilizado neste exercício</h4>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_hora&page=table"
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
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_geo&t=h3_res9&page=table"
                        target="_blank"
                        >Malha hexagonal para análises espaciais da Secretaria
                        Municipal de Transportes</a
                    >
                </li>
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
        </div>
    </div>

    <div class="content-decode">
        <div class="presentation-wrapper">
            <!-- svelte-ignore a11y_missing_attribute -->
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vTj3xvVYKzR7evKftjiwcITo_QBDmuQdfxLMq0T4EnTGMQ86IRLkucgnoNC_yNnxBM_HMQqlHaAkjtQ/pubembed?start=false&loop=false&delayms=3000&slide=4"
                frameborder="0"
                width="960"
                height="569"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
            ></iframe>
        </div>

        <div class="split-cont">
            <div class="split-left">
                <h4>STEP 1</h4>
                <p>
                    Criar um cronotipo e um mapa mental da cidade, considerando
                    suas experiências com o sistema de transporte
                </p>
            </div>
            <div class="split-right">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="image-box" on:click={() => (fullscreen = true)}>
                    <img src={imgSrc} alt="Preview" />
                </div>

                <!-- Fullscreen Modal -->
                {#if fullscreen}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div class="overlay" on:click={() => (fullscreen = false)}>
                        <img
                            src={imgSrc}
                            alt="Fullscreen"
                            class="fullscreen-img"
                        />
                    </div>
                {/if}
            </div>
        </div>
        <div style="min-height: 150px;"></div>

        <div class="split-cont">
            <div class="split-left">
                <h4>STEP 2</h4>
                <p>
                    Criar um mapa das centralidades urbanas que surgiram nos
                    cronótipos e mapas mentais através da ferramenta <a
                        href="https://geojson.io"
                        target="_blank">GEOJSON.IO</a
                    >
                </p>
            </div>
            <div class="split-right">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="image-box" style="pointer-events: none;">
                    <img src={imgSrcGeo} alt="Preview" />
                </div>
            </div>
        </div>
        <div style="min-height: 150px;"></div>

        <div class="split-cont">
            <div class="split-left">
                <h4>STEP 3</h4>
                <p>
                    Identificar as centralidades urbanas na malha hexagonal da
                    Secretaria Municipal de Transportes.
                </p>
            </div>
            <div class="split-right">
                <p>
                    Para ter acesso à malha hexagonal, é possível executar uma
                    consulta com o Google Cloud. Para conectar sua conta do
                    Google e aprender suas funções básicas, siga o
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

                <pre><code class="language-sql">
-- Lógica: obter a malha hexagonal visualizável através do software GIS,
-- no banco de dados (`rj-smtr.br_rj_riodejaneiro_geo.h3_res9`) 

SELECT * 
FROM `rj-smtr.br_rj_riodejaneiro_geo.h3_res9`

    </code></pre>

                <p>
                    Como última opção, é possível baixá-la <a
                        target="_blank"
                        href="h3_res9.geojson">aqui</a
                    > (6Mb)
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
        <div style="min-height: 150px;"></div>

        <div class="split-cont">
            <div class="split-left">
                <h4>STEP 4</h4>
                <p>
                    Experimentar com os dados da Secretaria Municipal de
                    Transportes, tendo acesso ao número de passageiros e
                    informações sobre as linhas que transitam pelas
                    centralidades urbanas sendo investigadas.
                </p>
            </div>
            <div class="split-right">
                <p>
                    Para ter acesso a esses dados, é possível executar uma
                    consulta com o Google Cloud. Para conectar sua conta do
                    Google e aprender suas funções básicas, siga o
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
-- Passageiros por dia e por serviço na área próxima ao acesso C da estação ferroviária Central do Brasil

-- Lógica: Criar uma tabela com 3 colunas: a coluna data (data), a coluna linha (servico_jae) e a coluna total de passageiros do dia, resultado da soma (SUM) da quantidade de passageiros (quantidade_passageiros) por hora e por linha.
-- a partir do  banco de dados (`rj-smtr.bilhetagem.passageiro_tile_hora`) 
-- que atendem às condições: uma data (data = DATE("2025-09-01")) e 
-- está localizado na célula hexagonal (tile_id = "89a8a06a56bffff"), dentro da qual se encontra o acesso à estação.

SELECT 
  data,
  servico_jae,
  SUM(quantidade_passageiros) AS total_passageiros
FROM `rj-smtr.bilhetagem.passageiro_tile_hora`
WHERE data = DATE("2025-09-01")
AND tile_id = "89a8a06a56bffff"
GROUP BY data, servico_jae


--  Row	data	    servico_jae         total_passageiros
--  1	2025-09-01	VLT-Linha 4	Terminal Intermodal Gentileza - Praça XV	    4938
--  2	2025-09-01	202	Rio Comprido - Castelo	                               1447
--  3	2025-09-01	007	Silvestre - Central	                                   1408
--  4	2025-09-01	VLT-Linha 3	Central - Santos Dumont	                      872
--  5	2025-09-01	VLT-Linha 1	Terminal Intermodal Gentileza - Santos Dumont	716    

</code></pre>
        <div style="min-height: 50px;"></div>

        <pre><code class="language-sql">
-- Passageiros por dia, faixa horária e por serviço na área próxima ao acesso C da estação ferroviária Central do Brasil

-- Lógica: Criar uma tabela com 3 colunas: a coluna data (data), a coluna linha (servico_jae) e a coluna total de passageiros do dia e faixa horaria, resultado da soma (SUM) da quantidade de passageiros (quantidade_passageiros) por faxia horaria e por linha.
-- a partir do  banco de dados (`rj-smtr.bilhetagem.passageiro_tile_hora`) 
-- que atendem às condições: uma data (data = DATE("2025-09-01")) e 
-- faixa horária (hora BETWEEN 5 AND 8) e
-- está localizado na célula hexagonal (tile_id = "89a8a06a56bffff"), dentro da qual se encontra o acesso à estação.

SELECT 
  data,
  servico_jae,
  SUM(quantidade_passageiros) AS total_passageiros
FROM `rj-smtr.bilhetagem.passageiro_tile_hora`
WHERE data = DATE("2025-09-01")
AND hora BETWEEN 5 AND 8
AND tile_id = "89a8a06a56bffff"
GROUP BY data, servico_jae


--  Row	data	    servico_jae         total_passageiros
--  1	2025-09-01	VLT-Linha 4	Terminal Intermodal Gentileza - Praça XV        2344
--  2	2025-09-01	202	Rio Comprido - Castelo                                  660
--  3	2025-09-01	007	Silvestre - Central                                     598
--  4	2025-09-01	VLT-Linha 3	Central - Santos Dumont                         279
--  5	2025-09-01	VLT-Linha 1	Terminal Intermodal Gentileza - Santos Dumont	86   
</code></pre>
        <div style="min-height: 50px;"></div>

        <pre><code class="language-sql">
-- Tipo de pagamento ou acesso ao transporte público ordenado por dia na área próxima ao acesso C da estação ferroviária Central do Brasil

-- Lógica: Criar uma tabela com 4 colunas: a coluna data (data), a coluna produto (produto), a coluna tipo de transação por produto (tipo_transacao) e a coluna quantidade de transações (qtd_transacoes), que contabiliza as transações por tipo (COUNT(*) AS qtd_transacoes)
-- a partir do  banco de dados (`rj-smtr.bilhetagem.passageiro_tile_hora`) 
-- que atendem às condições: uma data (data = DATE("2025-09-01")) e 
-- está localizado na célula hexagonal (tile_id = "89a8a06a56bffff"), dentro da qual se encontra o acesso à estação.

SELECT
  data,
  produto,tipo_transacao,
  COUNT(*) AS qtd_transacoes,
FROM `rj-smtr.bilhetagem.passageiro_tile_hora`
WHERE data = DATE("2025-09-01")
AND tile_id = "89a8a06a56bffff"
GROUP BY data, produto, tipo_transacao


--  Row	data	    produto	    tipo_transacao  qtd_transacoes
--  1	2025-09-01	Carteira	Integração	302
--  2	2025-09-01	Carteira	Integral	359
--  3	2025-09-01	Carteira	Transferência	33
--  4	2025-09-01	Cartão Avulso	Integral	102
--  5	2025-09-01	Cartão Avulso	Integração	68
--  6	2025-09-01	Cartão Avulso	Transferência	19
--  7	2025-09-01	Gratuidade	Gratuidade	865
--  8	2025-09-01	RioCard	RioCard	311
--  9	2025-09-01	VT	Integração	277
--  10	2025-09-01	VT	Integral	407
--  11	2025-09-01	VT	Transferência	25

</code></pre>
        <div style="min-height: 50px;"></div>

        <pre><code class="language-sql">
-- Criar as geometrias de todos os veículos que transitam e embarcam passageiros pela célula hexagonal onde se encontra o acesso C da estação ferroviária Central do Brasil em um determinado dia.
-- Descrição técnica: esta consulta retorna uma linha por veículo (como WKT) para serviços que transitam e embarcam passageiros pelo tile_id ‘89a8a06a56bffff’ em 01/09/2025, agregando pontos GPS do gps_sppo.

-- 1 Definindo o hexágono de interesse (tile_id = "89a8a06a56bffff")
WITH hex AS (
  SELECT ST_GEOGFROMTEXT(geometry) AS geom
  FROM `rj-smtr.br_rj_riodejaneiro_geo.h3_res9`
  WHERE tile_id = "89a8a06a56bffff"
),


-- 2 Identificando os serviços que passaram nesse hexágono (data = DATE("2025-09-01"))
services AS (
  SELECT DISTINCT servico_jae
  FROM `rj-smtr.bilhetagem.passageiro_tile_hora`
  WHERE data = DATE("2025-09-01")
    AND tile_id = "89a8a06a56bffff"
),

-- 3 Selecionando os pontos GPS dos veículos
pontos AS (
  SELECT
    servico AS servico_jae,
    id_veiculo,
    ST_GEOGPOINT(longitude, latitude) AS geom,
    timestamp_gps AS ts
  FROM `rj-smtr.br_rj_riodejaneiro_veiculos.gps_sppo`
  WHERE data = DATE("2025-09-01")  
),

-- 4 Criar trajetórias contínuas por veículo
trajetos AS (
  SELECT
    servico_jae,
    id_veiculo,
    ST_MAKELINE(ARRAY_AGG(geom ORDER BY ts)) AS trajeto
  FROM pontos
  GROUP BY servico_jae, id_veiculo
)

-- 5 Filtrar apenas veículos que cruzam o hexágono e retorna WKT
SELECT
  t.servico_jae,
  t.id_veiculo,
  ST_ASTEXT(t.trajeto) AS wkt_trajeto
FROM trajetos t
JOIN services s
  ON t.servico_jae = s.servico_jae
JOIN hex h
  ON ST_INTERSECTS(t.trajeto, h.geom)


</code></pre>

        <div class="split-cont" style="align-items: center;">
            <div class="split-left">
                Onde é possível chegar embarcando em um ponto próximo à entrada
                C da estação ferroviária Central do Brasil
            </div>
            <div class="split-right">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                    class="image-box"
                    on:click={() => (fullscreenCentral = true)}
                >
                    <img src="central.png" alt="Preview" />
                </div>

                <!-- Fullscreen Modal -->
                {#if fullscreenCentral}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div
                        class="overlay"
                        on:click={() => (fullscreenCentral = false)}
                    >
                        <img
                            src="central.png"
                            alt="Fullscreen"
                            class="fullscreen-img"
                        />
                    </div>
                {/if}
            </div>
        </div>

        <div class="split-cont" style="align-items: center;">
            <div class="split-left">
                Onde é possível chegar embarcando em um ponto próximo à
                passarela do metrô da Pavuna
            </div>
            <div class="split-right">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                    class="image-box"
                    on:click={() => (fullscreenPavuna = true)}
                >
                    <img src="pavuna.png" alt="Preview" />
                </div>

                <!-- Fullscreen Modal -->
                {#if fullscreenPavuna}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div
                        class="overlay"
                        on:click={() => (fullscreenPavuna = false)}
                    >
                        <img
                            src="pavuna.png"
                            alt="Fullscreen"
                            class="fullscreen-img"
                        />
                    </div>
                {/if}
            </div>
        </div>
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

    .presentation-wrapper {
        margin: 2rem 0;
        position: relative;
        padding-bottom: 56.25%; /* 16:9 ratio */
        height: 0;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .presentation-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    .image-box {
        width: 300px;
        height: 200px;
        overflow: hidden;
        border-radius: 12px;
        cursor: pointer;
        border: #c743c7 1px solid;
        padding: 1rem;
    }

    .image-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: zoom-out;
    }

    .fullscreen-img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
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
