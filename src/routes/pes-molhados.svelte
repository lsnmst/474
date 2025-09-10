<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { cor_class } from "../data/cor_class.js";
    import { cor_jacare } from "../data/cor_jacare.js";

    import Panzoom from "@panzoom/panzoom";
    export let src = "buraco.svg";
    export let height = "1000px";
    export let width = "100%";

    onMount(() => {
        Prism.highlightAll();
    });

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
            <h1>Com os pés molhados</h1>
            <p>
                O Centro Operacional Rio - COR, com seu sistema de alerta
                suportado por seus modelos de previsão baseados em dados,
                anunciou que os cariocas nunca mais serão pegos de surpresa por
                eventos meteorológicos. No Jacarezinho, os moradores não
                precisam do sistema de alerta. Quem precisa cruzar o Buraco de
                Lacerda, já há 50 anos, quando chove, sabe que vai molhar os
                pés, alguém vai aparecer tomando banho quando virar uma piscina
                e o 629 vira submarino. Uma interrupção na via que tem
                consequências no sistema de transportes.
            </p>
        </div>
        <div class="refer-decode">
            <h4>Banco de dados utilizado nesta decodificação</h4>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=datario&d=adm_cor_comando&t=ocorrencias&page=table"
                        target="_blank"
                        >Ocorrências disparadas pelo COR desde 2015</a
                    >
                </li>
            </ul>
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
        </div>
    </div>

    <div class="content-decode">
        <p>
            Inaugurado em dezembro de 2010, após uma tempestade ter atingido a
            cidade, o Centro Operacional Rio - COR é um aparato composto por
            sensores espalhados pela cidade (câmeras, telefones, estações
            meteorológicas), que geram dados e, além de monitorar as condições
            meteorológicas, procura minimizar outros eventos de grande impacto
            na cidade, como deslizamentos de terra e acidentes rodoviários.
        </p>

        <div class="bicolor" style="margin-top:2rem;">
            <img src="lacerda.jpg" alt="Prefeito sensor temperatura" />
        </div>
        <p style="text-align: center; font-size:0.8rem; margin:1rem 0 3rem 0">
            O B73012 da Rubanil submerso no Buraco do Lacerda (2012). Foto:
            Marcos Tristão
        </p>

        <p style="font-family: 'Roboto Mono'; font-size:0.8rem;">
            Antes de sua criação, chuvas e outros eventos pegavam a
            administração pública e os cariocas de surpresa. Depois do COR,
            soluções são antecipadas, alertando os setores responsáveis sobre os
            riscos e as medidas urgentes que devem ser tomadas em casos de crise
            - Equipe do COR.
        </p>

        <p>
            Para entender quais regiões da cidade têm enchentes e averiguar se
            esses eventos causaram interrupções no serviço de transporte, é
            necessário identificar como o banco de dados do COR classifica os
            eventos. O banco de dados do COR organiza em 42 classes os eventos
            que podem ocorrer na cidade:
        </p>

        <table>
            <thead>
                <tr>
                    <th>ID evento</th>
                    <th>Evento</th>
                </tr>
            </thead>
            <tbody>
                {#each cor_class as row}
                    <tr
                        class:selected={Number(row.id_pop) === 5 ||
                            Number(row.id_pop) === 31 ||
                            Number(row.id_pop) === 32 ||
                            Number(row.id_pop) === 33}
                    >
                        <td>{row.id_pop}</td>
                        <td>{row.pop_titulo}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    Os dados do COR estão disponíveis no banco de dados <a
                        href="https://console.cloud.google.com/bigquery?p=datario&d=adm_cor_comando&t=ocorrencias&page=table"
                        target="_blank"
                        >Ocorrências disparadas pelo COR desde 2015</a
                    >. Por exemplo, para extrair todos os dados relativos a um
                    bairro ou através de uma palavra-chave, é possível realizar
                    a consulta:
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
-- Lógica: Selecionar todos os eventos
-- no banco de dados (`datario.adm_cor_comando.ocorrencias`) 
-- que atendem às condições: são identificados como Bolsão d'água em via, Alagamento, Enchente, Lâmina d'água [id_pop IN ('5','31','32','33')] e
-- dentro desses eventos, tenha ocorrido no Jacaré (bairro = "Jacaré") ou
-- na sua descrição, seja citado Jacaré (descricao LIKE '%jacaré%')

SELECT *
FROM `datario.adm_cor_comando.ocorrencias`
WHERE id_pop IN ('5','31','32','33')
  AND (
    bairro = "Jacaré"
    OR descricao LIKE '%jacaré%'
  );

    </code></pre>

        <table>
            <thead>
                <tr>
                    <th>ID evento</th>
                    <th>Data de início</th>
                    <th>Data de fim</th>
                    <th>Descrição</th>
                    <th>Gravidade</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
            </thead>
            <tbody>
                {#each cor_jacare as row}
                    <tr>
                        <td>{row.id_pop}</td>
                        <td>{row.data_inicio}</td>
                        <td>{row.data_fim}</td>
                        <td>{row.descricao}</td>
                        <td>{row.gravidade}</td>
                        <td>{row.latitude}</td>
                        <td>{row.longitude}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <p>
            Ao ler os dados, fica evidente que o Buraco do Lacerda, como é
            chamada a passagem sob os trilhos construída na década de 1960
            durante os projetos de saneamento dos bairros Jacaré e Benfica, é
            constantemente atingida por problemas de alagamento. Esse caminho é
            o trajeto da linha 629 Irajá - Saens Peña.<br /><br />Em agosto de
            2024, a obra na ponte ferroviária do Buraco da Lacerda e a melhoria
            do sistema de drenagem de água em caso de chuva foram concluídas,
            com a interdição da via por 40 dias. Ao mapear o fluxo diário da
            linha 629 Irajá - Saens Peña durante o período de fechamento da via,
            é possível observar o trajeto alternativo feito pelos veículos, o
            mesmo que ainda é percorrido quando chuvas intensas, com a ajuda do
            lixo que obstrui a infraestrutura de drenagem, inundam a via
            impedindo a circulação (em roxo, o caminho alternativo):
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

    tr.selected {
        background-color: #d2fb85;
        font-weight: bold;
    }

    .bicolor {
        position: relative;
        display: inline-block;
    }

    .bicolor img {
        display: block;
        width: 100%;
        height: auto;
    }

    .bicolor::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, #d2fb85, #c743c7);
        mix-blend-mode: overlay; /* try: screen, overlay, difference */
        opacity: 1; /* adjust intensity */
        pointer-events: none;
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
