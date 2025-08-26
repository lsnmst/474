<script>
    let visible = true;

    function close() {
        visible = false;
    }
</script>

{#if visible}
    <div class="intro">Nunca é noite no mapa</div>
    <p><i>Ernesto de Carvalho<br />2016, 6 min</i></p>

    <div class="video-container">
        <iframe
            src="https://player.vimeo.com/video/175423925"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>

    <p>
        TEXTO COMPLETO DA NARRAÇÃO<br /><br />

        A cidade onde moro, vista de cima,<br />
        neste mapa aéreo, interpolado, solícito.<br />
        Eu estou em uma dessas ruas,<br />
        em uma dessas casas.<br />
        Eu estou dentro do mapa.<br />
        O mapa não se importa se eu estou dentro dele ou não;<br />
        mas eu estou, dentro do mapa.<br /><br />

        O mapa é indiferente, livre.<br />
        O mapa não precisa de pernas, nem de asas.<br />
        O mapa não anda, nem voa, nem corre,<br />
        não sente desconforto, não tem opinião.<br />
        Nunca chove dentro do mapa e não há vento no mapa.<br />
        No mapa não há contramão nem velocidade.<br />
        Pro mapa não tem engarrafamento, nem direção.<br /><br />

        O mapa é um olho desincumbido de um corpo,<br />
        e eu estou dentro do mapa, em algum lugar.<br />
        Mesmo que eu tente me esconder,<br />
        o mapa me encontra, e me contém.<br />
        Eu estou dentro do mapa.<br />
        Aí estou eu, dentro do mapa.<br />
        Eu estou dentro do mapa.<br />
        Esse sou eu, dentro do mapa.<br />
        Não tive tempo de colocar os sapatos e saí de casa descalço<br />
        pra fotografar o mapa.<br /><br />

        E esse é o mapa.<br /><br />

        O mapa é abstrato, o mapa é livre, imaterial.<br />
        O mapa não precisa de pernas, nem de asas…<br />
        O mapa não voa nem corre, não sente desconforto, e não tem opinião.<br
        />
        E eu estou dentro do mapa, para sempre.<br />
        Surpreso ao ver de perto o mapa<br />
        tomar a forma de uma viatura.<br />
        Flagrado no momento em que fui acometido de um súbito desejo<br />
        de tentar impedir que ela entrasse no beco lá de casa.<br />
        Tomado de curiosidade, e medo.<br />
        Como alguém que uma vez identificado, e flagrado num crime,<br />
        decide continuar, ao invés de oferecer-se à lei.<br /><br />

        Foi aí que percebi a presença de um guarda.<br />
        Ele poderia achar que eu estava incomodando o mapa,<br />
        e poderia quem sabe interceder pelo mapa.<br />
        Imaginei que eles teriam alguma espécie de acordo<br />
        O guarda era como a própria viatura do mapa:<br />
        profissional, organizado, diligente.<br /><br />

        O mapa sem dúvida percorreria milhares de ruas<br />
        sem se preocupar demais de não ter conseguido entrar direito no beco lá de
        casa.<br /><br />

        Todos são iguais perante a lei<br />
        e todos são iguais perante o mapa.<br />
        As viaturas do mapa percorrem a cidade.<br />
        As viaturas da polícia percorrem a cidade.<br />
        Todos são iguais perante a lei,<br />
        Todos são iguais perante o mapa.<br />

        Sempre que a manifestação chega a esta altura da avenida,<br /><br />
        já é de noite…<br /><br />

        Em 2011 O mapa não podia entrar naquela rua de terra lá no fundo.<br />
        Em 2012 O mapa ainda não podia entrar lá.<br />
        Em 2013 também não.<br />
        Dois anos depois…<br />
        A viatura do mapa agora pode percorrer este espaço.<br />
        Ao lado dessas outras viaturas…<br />
        As viaturas da nova cidade…<br />
        viaturas que abrem o caminho para a viatura do mapa, as viaturas da polícia
        e todas as outras viaturas.<br /><br />

        Há 200 metros de onde as máquinas passaram, aluga-se casas e quarto.<br
        />
        Aluga-se casas e quarto.<br />
        Aluga-se casas e quarto.<br />
        Aluga-se casas e quarto.<br />
        As viaturas da nova cidade passaram.<br /><br />

        Há 2 mil quilômetros dali, passaram as viaturas da polícia, imparciais,<br
        />
        que garantiram a passagem das viaturas da nova cidade, olímpica,<br />
        e em seguida passou a viatura do mapa, indiferente.<br />
        Vai sair quem quiser, quem não quiser fica.<br />
        Vai sair quem quiser, quem não quiser fica.<br />
        Cidade bem policiada, cidade bem mapeada, canteiro de obras, bilheteria.<br
        />
        O mapa é imparcial, não tem opinião,<br /><br />

        É exatamente como aquele agente de segurança privada:<br />
        não é representante do estado, nem da comunidade,<br />
        a sua única preocupação é o acordo que tem com a propriedade.<br /><br
        />

        Pro mapa não há governo, pro mapa não há guerra civil,<br />
        não há golpe de estado, não há revolução.<br />
        Nunca é noite no mapa.<br /><br />
    </p>
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
