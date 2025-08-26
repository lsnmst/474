<script>
    let visible = true;

    function close() {
        visible = false;
    }
</script>

{#if visible}
    <div class="intro">
        <button class="close-btn" on:click={close}>✕</button>
        <p>
            Exercícios para decodificar o sistema de transportes através do uso
            crítico dos dados da Secretaria Municipal de Transportes da
            Prefeitura do Rio de Janeiro
        </p>
        <p style="font-size: 0.9rem">
            Organizado por <a href="http://alessandro.vado.li" target="_blank"
                >Alessandro Musetta</a
            >
            e
            <a href="" target="_blank">Gabriel Weber</a>
        </p>
    </div>

    <div
        style="font-size: 0.9rem;text-align:start;border-bottom:1px solid #d2fb85; padding-bottom:20px;padding:2rem"
    >
        <span>
            <u>Instruções para se orientar neste espaço virtual.</u><br
            />BIBLIOTECA: reúne recursos, textos, imagens e vídeos que
            contribuem para uma leitura crítica das dinâmicas urbanas. MAPAS:
            auxiliam a visualizar essas dinâmicas. DADOS: permitem decodificar o
            sistema de transportes dentro dessas dinâmicas urbanas. As
        </span>
        <span style="background-color:#d2fb85">DECODIFICAÇÕES</span>
        <span
            >são exercícios críticos com instruções detalhadas para a leitura do
            sistema de transportes.</span
        >
    </div>
{/if}

<style>
    .intro {
        position: relative;
        font-size: 2rem;
        line-height: 2rem;
        padding: 1rem 4rem 1rem 4rem;
        margin-bottom: 10px;
        background: #d2fb85;
    }

    .close-btn {
        position: absolute;
        top: 0.25rem;
        right: 0.25rem;
        border: none;
        color: black;
        background: none;
        font-size: 0.8rem;
        font-weight: bold;
        padding: 0.25rem 0.5rem;
        cursor: pointer;
    }
</style>
