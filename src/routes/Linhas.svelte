<script>
    let visible = true;

    function close() {
        visible = false;
    }
</script>

{#if visible}
    <div class="linhas-wrapper">
        <iframe
            src="https://lsnmst.github.io/linhas"
            frameborder="0"
            class="linhas-frame"
        >
        </iframe>
    </div>
{/if}

<style>
    .linhas-wrapper {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .linhas-frame {
        flex: 1;
        width: 100%;
        border: none;
    }
</style>
