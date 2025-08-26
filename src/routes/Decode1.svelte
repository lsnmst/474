<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { distinct_temp } from "../data/distinct_temp.js";

    onMount(() => {
        Prism.highlightAll();
    });
</script>

<h1>Rio 60 graus</h1>
<p>
    Quais são os ônibus cujo sensor de temperatura instalado na Jaé registrou
    uma temperatura superior a 50 °C em 17 de fevereiro de 2025?<br /><br />Por
    que 17 de fevereiro de 2025? Esse é o dia no qual o alerta Nível de Calor 4
    foi emitido pela primeira vez desde a criação do protocolo para altas
    temperaturas. De acordo com esse sistema de alerta, a sensação térmica pode
    ultrapassar os 60 °C.
</p>

<pre><code class="language-sql">
SELECT DISTINCT descricao_servico_jae 
FROM `rj-smtr.br_rj_riodejaneiro_bilhetagem.gps_validador` 
WHERE `data` = "2025-02-17" 
AND temperatura > 50.0

</code></pre>

<table>
    <thead>
        <tr>
            <th>ID servico Jaé</th>
            <th>Descricao servico Jaé</th>
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

<style>
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
        margin: 1rem auto;
    }
</style>
