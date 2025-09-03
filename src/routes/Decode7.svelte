<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { produto474 } from "../data/produto474.js";
    import { dinhero } from "../data/dinhero.js";
    import { dinhero_erro } from "../data/dinhero_erro.js";
    import SvgDinhero from "./Mapa4.svelte";
    import SvgCelular from "./Mapa5.svelte";

    onMount(() => {
        Prism.highlightAll();
    });
</script>

<div class="content">
    <div class="intro-decode">
        <div class="pres-decode">
            <h1>Sempre em alerta ao que está acontecendo na Brasil</h1>
            <p>TXT</p>
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
        <p></p>

        <div class="split-cont">
            <div class="split-left">
                <p></p>
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

        <pre><code class="language-sql"></code></pre>

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
