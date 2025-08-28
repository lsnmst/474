<script>
    import { onMount } from "svelte";
    import Panzoom from "@panzoom/panzoom";

    export let src = "temp.svg";
    export let height = "500px";
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

<h3>
    Quais linhas colocaram para rodar, em 17 de fevereiro de 2025, veículos sem
    ar condicionado, cuja temperatura interna ultrapassou os 50 °C?
</h3>

<p>
    Este mapa mostra a distribuição das linhas que colocaram para rodar, em 17
    de fevereiro de 2025, veículos sem ar condicionado, cuja temperatura interna
    ultrapassou os 50 °C. Legenda: <span style="background-color:#ddd"
        >extensão da rede de ônibus</span
    >, <span style="background-color:#c743c7">linhas sem ar condicionado</span>,
    <span style="background-color:#d2fb85">trajeto do 474</span>.
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

<style>
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
    h3 {
        margin-top: 10rem;
        line-height: 1.3;
        padding: 2rem;
        color: #f3f3e4;
        background: #c743c7;
        border-radius: 15px;
    }
    p {
        margin: 3rem 1rem 3rem 1rem;
        line-height: 1.3rem;
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
</style>
