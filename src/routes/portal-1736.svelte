<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { barrio } from "../data/barrio.js";
    import { diciassette } from "../data/diciassette.js";
    import Svg1736 from "./Mapa7.svelte";

    import Panzoom from "@panzoom/panzoom";
    export let src = "1736_474.svg";
    export let height = "800px";
    export let width = "80%";

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
            <h1>As ambições do 1736</h1>
            <p>
                A Prefeitura do Rio investiu fortemente na inteligentificação da
                cidade, apostando numa ilusão tecnicista das políticas urbanas,
                na expectativa de que a população contribua para uma gestão mais
                eficiente, ao fornecer, de forma consciente ou inconsciente,
                seus dados. O portal 1736, serviço de solicitação, denúncia e
                demanda de serviços, é uma dessas interfaces, criada com a
                intenção de ser um dispositivo participativo (porém a
                acessibilidade é uma incógnita). Como o carioca lidou com o 1736
                para solicitar serviços, encaminhar críticas ou reclamações
                sobre o sistema de ônibus municipal?
            </p>
        </div>
        <div class="refer-decode">
            <h4>Banco de dados utilizado nesta decodificação</h4>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=datario&d=adm_central_atendimento_1746&t=chamado&page=table"
                        target="_blank"
                        >Chamados feitos ao 1746 desde março de 2011</a
                    >
                </li>
            </ul>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=datario&d=dados_mestres&t=bairro&page=table"
                        target="_blank">Bairros da Cidade do Rio de Janeiro</a
                    >
                </li>
            </ul>
        </div>
    </div>

    <div class="content-decode">
        <p>
            Os principais serviços oferecidos pelo portal 1736 envolvem a
            denúncia de irregularidades, reclamações sobre os serviços prestados
            pela Prefeitura e solicitações de informações. A lista de serviços é
            extensa e há alguns que estão relacionados com o sistema de
            transportes.
        </p>

        <pre><code class="language-md">

-- ID Tipos e subtipos de chamadas ao portal 1736

1334	Diversos - SMTR

648	    Estações BRT - TransOeste
		2441	Manutenção das estações TransOeste

1338	BRT (corredor expresso de ônibus)
		4621	BRT-Bilheterias
		4620	Estação BRT
		4625	BRT-Transoeste- Excesso de Passageiros
		2445	Verificação de atraso do ônibus BRT - TransOeste

4897	Verificação de bilheterias / máquinas de atendimento com mal funcionamento

4899	Verificação da má conservação das estações BRT

4903	Manutenção do ônibus BRT - Transcarioca

5865	Verificação de ocorrências no BRT - Transcarioca

267	    Taxis, Kombi e Vans
		1256	Verificação de táxi, van ou kombi sem licença para transportar passageiros

1544	Assédio no transporte
		5472	Notificação de assédio sexual no transporte

1289	Cartão Riocard / Passe Livre

1332	Bilhetagem eletrônica

658	    Semáforo - BRT
		2456	Reparo de sinal de trânsito com falta de sincronismo na TransOeste

91	    Gratuidade de transporte
		4886	Verificação de desrespeito à gratuidade para estudantes

5821	Verificação de desrespeito à gratuidade

1336	Informação solicitada - SMTR

1512	BRT
		4621	BRT-Bilheterias
		4620	Estação BRT
		
266	    Kombi e Vans
		1234	Verificação de insatisfação de má conduta do motorista / direção perigosa.
		1257	Fiscalização de Recusa da gratuidade

98	    Ouvidoria SMTR

650	    Desordem BRT - TransOeste
	    2446	Verificação de tumulto nas estações e / ou no ônibus BRT- TransOest

1328	Ônibus - frota
		4573	Escassez de ônibus
		4578	Padrões técnicos - ônibus
		4576	Má conservação da frota de ônibus

4579	Operação em horário noturno - ônibus

4580	Operação com ar condicionado - ônibus

4583	Acessibilidade - ônibus

4574	Excesso de passageiros - ônibus

4574	Indicação de necessidade de vistoria - ônibus

1482	Transporte Público

1340	Vans
		4631	Vans - comportamento indevido

            </code></pre>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    O Portal 1736 agrega os dados por bairro. As geometrias dos
                    bairros da cidade do Rio de Janeiro estão disponíveis no
                    banco de dados <a
                        href="https://console.cloud.google.com/bigquery?p=datario&d=dados_mestres&t=bairro&page=table"
                        target="_blank">Bairros da Cidade do Rio de Janeiro</a
                    >. O banco de dados completo, incluindo os dados
                    geográficos, pode ser baixado executando a consulta:
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
-- Lógica: Selecionar todas as geometrias dos bairros 
-- no banco de dados (`datario.dados_mestres.bairro`) 

SELECT * 
FROM `datario.dados_mestres.bairro`
    </code></pre>

        <div style="display: flex; justify-content: center;">
            <table
                style="display: block; max-height: 500px; overflow-y: scroll; border-bottom: rgb(42, 10, 92) 1px solid;"
            >
                <thead style="position: sticky; top: 0;">
                    <tr>
                        <th>ID bairro</th>
                        <th>Bairro</th>
                    </tr>
                </thead>
                <tbody>
                    {#each barrio as row}
                        <tr>
                            <td>{row.id_bairro}</td>
                            <td>{row.nome}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <p>
            A linha 474 se estende por 17 bairros: Jacarezinho (155), Jacaré
            (51), Sampaio (60), Riachuelo (59), Rocha (58), São Francisco Xavier
            (57), Benfica (12), Mangueira (11), São Cristóvão (10), Santo Cristo
            (3), Praça da Bandeira (32), Cidade Nova (8), Centro (5), Catumbi
            (6), Laranjeiras (17), Botafogo (20), Copacabana (24).
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
                    As solicitações ao Portal 1736 estão disponíveis no banco de
                    dados <a
                        href="https://console.cloud.google.com/bigquery?p=datario&d=adm_central_atendimento_1746&t=chamado&page=table"
                        target="_blank"
                        >Chamados feitos ao 1746 desde março de 2011</a
                    >. Para acessar as solicitações recebidas ao longo dos
                    últimos 5 anos nos bairros atravessados pelo 474, pode ser
                    executa a consulta:
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
-- Lógica: Selecionar todas as solicitação ao Portal 1736
-- no banco de dados (`datario.adm_central_atendimento_1746.chamado`)
-- que atendem às condições: intervalo de data (data_inicio BETWEEN DATE) e 
-- seja de um tipo (id_tipo) relacionado com o sistema de transportes e
-- seja relativa ou venha de um bairro (id_bairro) atravessado pelo 474

SELECT * 
FROM `datario.adm_central_atendimento_1746.chamado` 
WHERE data_inicio BETWEEN DATE('2020-01-01') AND DATE('2025-01-01')
AND id_tipo IN ('1334','648','1338','267','1544','1289','1332','658','91','1336','1512','255','98','650','1328','1482','1340') 
AND id_bairro IN ('3','5','6','8','10','11','12','14','17','20','24','32','51','57','58','59','60','155')    

</code></pre>

        <p>
            Tomar decisões ou redigir políticas públicas através do estudo dos
            dados do Portal 1736 não passa de uma ilusão, pois o portal foi
            projetado com a expectativa de que toda a população o utilizasse
            (proposta irrealizável), enquanto as solicitações recebidas são
            mínimas.<br /><br />Não há quase ninguém que denuncie assédio sexual
            no Portal 1736 (1 caso nos resultados da consulta), mas isso não
            significa que não exista. Dessa forma, as dinâmicas não emergem e,
            pelo contrário, são distorcidas. E a
            <a target="_blank" href="https://www.1746.rio/hc/pt-br/p/relatorios"
                >porcentagem de reclamações</a
            > informadas nos relatórios do Portal (5,6 % nos primeiros 6 meses de
            2025) torna-se exclusivamente propagandística.
        </p>

        <Svg1736 src="/1736.svg" height="1100px" width="100%" />

        <div style="display: flex; justify-content: center;">
            <table
                style="display: block; max-height: 500px; overflow-y: scroll; border-bottom: rgb(42, 10, 92) 1px solid;"
            >
                <thead style="position: sticky; top: 0;">
                    <tr>
                        <th>Data</th>
                        <th>ID bairro</th>
                        <th>Unidade organizacional</th>
                        <th>Categoria chamada</th>
                        <th>Tipo</th>
                        <th>Subtipo</th>
                        <th>Atendido/Não atendido</th>
                    </tr>
                </thead>
                <tbody>
                    {#each diciassette as row}
                        <tr>
                            <td>{row.data_inicio}</td>
                            <td>{row.id_bairro}</td>
                            <td>{row.nome_unidade_organizacional}</td>
                            <td>{row.categoria}</td>
                            <td>{row.tipo}</td>
                            <td>{row.subtipo}</td>
                            <td>{row.tipo_situacao}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
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
