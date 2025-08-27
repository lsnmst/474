<script>
    import { onMount } from "svelte";
    import Panzoom from "@panzoom/panzoom";

    export let src = "/temp.svg";
    export let height = "500px";
    export let width = "100%";

    let svgContainer;

    onMount(async () => {
        if (!src) return;

        const res = await fetch(`${import.meta.env.BASE_URL}temp.svg`);
        const svgText = await res.text();

        svgContainer.innerHTML = svgText;

        const svgElement = svgContainer.querySelector("svg");

        if (svgElement) {
            const panzoom = Panzoom(svgElement, {
                contain: "outside",
                maxScale: 10,
                minScale: 1,
            });

            svgElement.parentElement.addEventListener(
                "wheel",
                panzoom.zoomWithWheel,
            );
        }
    });
</script>

<div
    bind:this={svgContainer}
    style="border:1px solid #ccc; overflow:hidden;"
    style:width
    style:height
></div>
