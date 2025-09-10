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

    .content-decode {
        padding: 3rem;
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
        table {
            table-layout: fixed !important;
            width: 90%;
        }
    }
</style>
