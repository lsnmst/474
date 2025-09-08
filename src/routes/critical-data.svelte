<script>
    import { dadosuteis } from "../data/dadosuteis.js";

    let visible = true;

    function close() {
        visible = false;
    }
</script>

{#if visible}
    <div class="intro-decode">
        <h1>
            Bases de dados para analisar de forma sistemática o sistema de
            transportes
        </h1>
    </div>
{/if}

<div class="content-decode">
    <table>
        <thead>
            <tr>
                <th>Palavras-chave</th>
                <th>Nome</th>
                <th
                    >Banco de dados espacial relacionado para realizar análises
                    espaciais</th
                >
            </tr>
        </thead>
        <tbody>
            {#each dadosuteis as row}
                <tr>
                    <td>{row.topic}</td>
                    <td>
                        {#if row.link_name}
                            <a
                                href={row.link_name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {row.description}
                            </a>
                        {/if}</td
                    >
                    <td>
                        {#if row.GIS_link}
                            <a
                                href={row.GIS_link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {row.GIS}
                            </a>
                        {/if}</td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .intro-decode {
        display: grid;
        grid-template-columns: 1fr;
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

    table a {
        color: rgb(42, 10, 92) !important;
        font-weight: 400;
        text-decoration: underline;
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
