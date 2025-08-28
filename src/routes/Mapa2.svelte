<script>
    import { onMount } from "svelte";

    import L from "leaflet";
    import "leaflet/dist/leaflet.css";

    let map;

    onMount(async () => {
        map = L.map("map", {
            center: [-22.937093521616838, -43.22460295163364],
            zoom: 13,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            touchZoom: false,
            boxZoom: false,
            keyboard: false,
        });

        L.tileLayer(
            "https://www.alessandromusetta.com/geo/tiles/474/{z}/{x}/{y}.png",
            {
                minZoom: 13,
                maxZoom: 15,
                tileSize: 256,
                attribution: "&copy; Local Tiles",
            },
        ).addTo(map);

        const response = await fetch("474.geojson");
        const geojson = await response.json();

        const layer = L.geoJSON(geojson, {
            style: {
                color: "#c743c7",
                weight: 1,
                opacity: 0.7,
            },
        }).addTo(map);

        map.fitBounds(layer.getBounds());
    });
</script>

<h3>
    Lendo o censo, quem mora nas áreas atravessadas pela rota do 474? Uma
    leitura por cor/raça
</h3>

<p>
    Cada ponto neste mapa representa um morador das áreas atravessadas pelo 474,
    e a cor desse ponto indica a resposta fornecida à pergunta “cor/raça” do
    questionário do censo de 2010. Legenda:
    <span style="background-color:#73b2ff">branca</span>,
    <span style="background-color:#9fd400">parda</span>,
    <span style="background-color:#ff0000">preta</span>,<span
        style="background-color:#ffaa00">amarela</span
    >,<span style="background-color:#996633">indígena</span>. Para replicar este
    mapa, confira as instruções do
    <a target="_blank" href="https://patadata.org/maparacial/how.html">Pata</a>,
    escritório de visualização e análise de dados.
</p>

<div id="map" style="height: 1000px; width: 100%; margin-top:2rem;"></div>

<style>
    h3 {
        margin-top: 10rem;
        line-height: 1.3;
        padding: 2rem;
        color: #f3f3e4;
        background: #c743c7;
        border-radius: 15px;
    }

    :global(.leaflet-container) {
        width: 100%;
        height: 100%;
        z-index: 0;
        background: #f3f3e4;
    }
</style>
