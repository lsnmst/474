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
        <p style="font-size: 1rem; line-height:1.2rem">
            Oficina apresentada por <a
                href="http://alessandro.vado.li"
                target="_blank">Alessandro Musetta</a
            >
            e
            <a href="" target="_blank">Gabriel Weber</a><br />
            15 - 17 de setembro de 2025, Sala do Futuro, FAU/UFRJ,<br />
            Organizada por
            <a
                href="https://www.observatoriodasmetropoles.net.br/"
                target="_blank">Observatório das Metrópoles</a
            > e CiDMobi - IPPUR/UFRJ
        </p>
    </div>

    <div
        style="font-size: 0.9rem;text-align:start;border-bottom:1px solid #d2fb85; padding-bottom:20px;padding:2rem"
        class="cover"
    >
        <div class="cover-image">
            <img src="cover.png" alt="Capa" />
        </div>

        <div class="cover-text">
            <span>
                <u>Instruções para se orientar neste espaço virtual.</u><br
                />BIBLIOTECA: reúne recursos, textos, imagens e vídeos que
                contribuem para uma leitura crítica das dinâmicas urbanas.
                MAPAS: auxiliam a visualizar essas dinâmicas. DADOS: permitem
                decodificar o sistema de transportes dentro dessas dinâmicas
                urbanas. As
            </span>
            <span style="background-color:#d2fb85">DECODIFICAÇÕES</span>
            <span
                >são exercícios críticos com instruções detalhadas para a
                leitura do sistema de transportes.</span
            >
        </div>
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
    .cover {
        display: grid;
        grid-template-columns: 1fr 2fr; /* left image smaller, right text bigger */
        gap: 2rem;
        align-items: center;
        border-bottom: 1px solid #d2fb85;
        padding: 2rem;
    }

    .cover-image img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    .cover-text {
        font-size: 0.9rem;
        line-height: 1.4rem;
        text-align: start;
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
