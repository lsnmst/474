<script>
    let visible = true;

    function close() {
        visible = false;
    }
</script>

{#if visible}
    <div class="intro">Map 1</div>
    <p>Description</p>
{/if}

<style>
    .intro {
        position: relative;
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 10px;
    }
    .video-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding-bottom: 56.25%;
        height: 0;
        background: #d2fb85;
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
