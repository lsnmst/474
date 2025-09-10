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
            <a href="https://ippur.ufrj.br/" target="_blank"
                >CiDMobi - IPPUR/UFRJ</a
            >
            e
            <a
                href="https://www.observatoriodasmetropoles.net.br/"
                target="_blank">Observatório das Metrópoles</a
            >
        </p>
    </div>

    <div
        style="font-size: 0.9rem;text-align:start;border-bottom:1px solid #d2fb85; padding-bottom:20px;padding:2rem"
        class="cover"
    >
        <div class="cover-image">
            <img src="cover.png" alt="Capa" />
            <p style="text-align: center; font-size:0.8rem">
                O 629 no buraco do lacerda, Gabriel Weber 2025
            </p>
        </div>

        <div class="cover-text">
            <span>
                As
                <span style="background-color:#d2fb85">DECODIFICAÇÕES</span> são
                exercícios com instruções detalhadas para a leitura crítica e visualização
                das dinâmicas do sistema de transporte urbano, destinadas a formular
                contra-narrativas que possibilitem o direito à cidade. Selecione
                uma ou mais decodificações da lista para revelar novas leituras sobre
                o 474 Jacaré Copacabana e inspire-se para criar outras, reproduzindo
                os exercícios sobre as linhas que lhe interessam.
            </span>
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
        font-size: 1.2rem;
        line-height: 1.5rem;
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

    @media (max-width: 768px) {
        .cover {
            display: block;
        }

        .cover-image {
            margin-bottom: 5rem;
        }
    }
</style>
