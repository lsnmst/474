<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { lotacao } from "../data/lotacao.js";
    import { lotacao_ele } from "../data/lotacao_ele.js";
    import Mapa3 from "./Mapa3.svelte";

    onMount(() => {
        Prism.highlightAll();
    });
</script>

<div class="content">
    <div class="intro-decode">
        <div class="pres-decode">
            <h1>Superlotação<br />(e um experimento com tarifa zero)</h1>
            <p>
                Ao publicar mensagens mecanicistas e reducionistas tipicamente
                neoliberais, como “aumentar a eficiência do sistema” e “reduzir
                custos operacionais ociosos” por meio do monitoramento com
                dados, a Prefeitura do Rio de Janeiro prometeu acabar com a
                superlotação dos ônibus nos horários de pico. Esquecendo que a
                superlotação é uma dinâmica social e não um simples problema
                algorítmico.
            </p>
        </div>
        <div class="refer-decode">
            <h4>Banco de dados utilizado nesta decodificação</h4>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_hora&page=table"
                        target="_blank"
                        >Tabela de contagem do número de passageiros por hora.
                        Agrega valores da tabela de transações por: data, hora,
                        modo, consorcio, operadora, servico, sentido e
                        tipo_transacao</a
                    >
                </li>
            </ul>
        </div>
    </div>

    <div class="content-decode">
        <p>
            Dia 16 de julho de 2025, a Prefeitura do Rio reduziu em 20% o número
            de viagens de ônibus nas ruas da cidade. Em nota, a Secretaria
            Municipal de Transportes afirmou que a medida é um ajuste no plano
            operacional (atualizado a cada 15 dias) com o objetivo de “aumentar
            a eficiência do sistema” e “reduzir custos operacionais ociosos”,
            esclarecendo que não haverá redução na frota de ônibus.
        </p>
        <p style="font-family: 'Roboto Mono'; font-size:0.8rem;">
            A Secretaria Municipal de Transportes (SMTR) aprimorou sua
            capacidade de monitoramento da operação dos ônibus municipais. Com
            base em dados de GPS e nos registros de embarque de passageiros, a
            SMTR passou a acompanhar com maior detalhamento a oferta e a demanda
            de cada linha, por horário e sentido. Com essas informações, a
            Prefeitura do Rio passou a identificar, com precisão, situações de
            desequilíbrio entre a quantidade de ônibus ofertada e a demanda real
            de passageiros. A partir disso, ajustes no plano operacional vêm
            sendo realizados com o objetivo de aumentar a eficiência do sistema
            e reduzir os custos com a operação ociosa. As alterações ocorrem,
            prioritariamente, nos horários de entrepico e em linhas onde foi
            constatado excesso de oferta. Ressalta-se que, desde junho de 2022,
            a Prefeitura passou a custear, com recursos públicos, subsídios aos
            consórcios operadores do sistema — e a boa gestão desses recursos é
            fundamental para viabilizar investimentos em outras áreas
            prioritárias da cidade. Cabe esclarecer ainda que o plano
            operacional do serviço de ônibus é atualizado quinzenalmente. A SMTR
            seguirá monitorando a demanda de passageiros para realizar os
            ajustes no plano em caso de necessidade.
        </p>

        <p>
            As decisões baseadas em dados, tomadas exclusivamente a partir do
            cálculo do número de passageiros e do movimento dos veículos, estão
            ganhando consenso na prefeitura, que começou a identificar os
            passageiros exclusivamente pelas categorias de pagamento
            estabelecidas para os aparelhos Jaé. Em termos críticos, no contexto
            das decisões baseadas em dados, para garantir que as previsões não
            se tornem instrumentos de uma causa política, os modeladores, os
            decisores políticos e os cidadãos devem estabelecer novas normas
            sociais. <a
                href="https://sci-hub.st/https://www.nature.com/articles/d41586-020-01812-9"
                target="_blank"
                >Os modeladores não devem ser autorizados a projetar uma certeza
                maior do que a que os seus modelos merecem; os políticos não
                devem ser autorizados a descarregar a responsabilidade nos
                modelos da sua escolha</a
            >.
        </p>

        <h3>
            Dentre os objetivos da Secretaria Municipal de Transportes, está
            também o de prevenir a superlotação nos horários de maior movimento.
            Quantas vezes o ônibus 474 com destino a Copacabana esteve lotado
            ano passado, de 1º de junho de 2024 a 1º de junho de 2025?
        </h3>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    Os dados sobre os passageiros estão disponíveis em um banco
                    de dados disponibilizado pela Secretaria Municipal de
                    Transportes chamado <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=bilhetagem&t=passageiro_hora&page=table"
                        target="_blank"
                        >Tabela de contagem do número de passageiros por hora</a
                    >.<br />Para este cálculo, considerando a capacidade máxima
                    permitida de passageiros dos veículos (dependendo do modelo
                    do veículo, de 70 a 80 passageiros) e a frequência das
                    passagens, considera-se lotado quando o número de
                    passageiros é superior a 500 por hora.
                </p>
            </div>
            <div class="split-right">
                <p>
                    Este exercício é conduzido através dos serviços do Google
                    Cloud. Para conectar sua conta do Google e aprender suas
                    funções básicas, siga o
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/"
                        >tutorial</a
                    >. Caso contrário, use preferencialmente
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/#acessando-dados-via-python"
                        >Python</a
                    >
                    ou
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/#acessando-dados-via-r"
                        >R</a
                    >.
                </p>
            </div>
        </div>

        <!-- CODE BLOCK -->

        <pre><code class="language-sql">
-- Lógica: selecionar as colunas data, hora e quantidade de passageiros 
-- no banco de dados (`rj-smtr.bilhetagem.passageiro_hora`) 
-- que atendem às condições: entre duas datas (BETWEEN DATE) e 
-- o serviço é o 474 (servico_jae ="474") e
-- a quantidade de passageiros superior a 500 (quantidade_passageiros > 500).

SELECT data, hora, sentido, quantidade_passageiros 
FROM `rj-smtr.bilhetagem.passageiro_hora` 
WHERE `data` BETWEEN DATE('2024-06-01') AND DATE('2025-05-31')
AND servico_jae = "474"  
AND quantidade_passageiros > 500

    </code></pre>

        <p>
            Entre 1 de junho de 2024 e 1 de junho de 2025, a linha registrou 83
            vezes um número superior a 500 passageiros/hora no sentido
            Copacabana. 88% desses casos aconteceram entre 6h e 8h da manhã.
        </p>

        <div style="display: flex; justify-content: center;">
            <table
                style="display: block; max-height: 500px; overflow-y: scroll; border-bottom: rgb(42, 10, 92) 1px solid;"
            >
                <thead style="position: sticky; top: 0;">
                    <tr>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Total de passageiros</th>
                    </tr>
                </thead>
                <tbody>
                    {#each lotacao as row}
                        <tr>
                            <td>{row.data}</td>
                            <td>{row.hora}</td>
                            <td>{row.quantidade_passageiros}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <p>
            Ao ler os dados, é possível identificar uma anomalia no dia 6 de
            outubro de 2024, data do primeiro turno das eleições municipais
            2024. Naquele dia, o recorde de 500 passageiros por hora foi
            superado 5 vezes. Metrô, barcas, trens, ônibus e vans funcionaram
            gratuitamente no dia das eleições municipais, das 6h às 20h, para
            permitir que todos os eleitores pudessem chegar aos locais de
            votação e voltar para casa.
        </p>

        <div class="bicolor" style="margin-top:2rem; max-width: 400px;">
            <img src="tarifa-zero.jpg" alt="Prefeito sensor temperatura" />
        </div>
        <p style="text-align: center; font-size:0.8rem; margin:1rem 0 3rem 0">
            <a
                target="_blank"
                href="https://autonomialiteraria.com.br/loja/reportagem/sem-catraca-da-utopia-a-realidade-da-tarifa-zero/"
                >Daniel Santini (2024), Sem catraca: da utopia à realidade da
                Tarifa Zero</a
            >
        </p>

        <h3>
            O dia 6 de outubro de 2024, domingo ensolarado de primavera a 25°C,
            foi um grande experimento com a tarifa zero. Em quais direções a
            cidade se deslocou?
        </h3>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    As linhas que, em 6 de outubro de 2024, embarcaram mais de
                    500 passageiros por hora são as seguintes:
                </p>
                <table
                    style="display: block; max-height: 500px; overflow-y: scroll; border-bottom: rgb(42, 10, 92) 1px solid;"
                >
                    <thead style="position: sticky; top: 0;">
                        <tr>
                            <th>servico</th>
                            <th> </th>
                            <th>Hora</th>
                            <th>Sentido</th>
                            <th>Quantidade de passageiros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each lotacao_ele as row}
                            <tr>
                                <td>{row.servico_jae}</td>
                                <td>{row.descricao_servico_jae}</td>
                                <td>{row.hora}</td>
                                <td>{row.sentido}</td>
                                <td>{row.quantidade_passageiros}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>

                <p>
                    Para transformar esses dados em um mapa, é necessário
                    identificar as geometrias das linhas envolvidas:
                </p>
            </div>
            <div class="split-right">
                <p>
                    Este exercício é conduzido através dos serviços do Google
                    Cloud. Para conectar sua conta do Google e aprender suas
                    funções básicas, siga o
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/"
                        >tutorial</a
                    >. Caso contrário, use preferencialmente
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/#acessando-dados-via-python"
                        >Python</a
                    >
                    ou
                    <a
                        target="_blank"
                        href="https://docs.dados.rio/tutoriais/como-acessar-dados/#acessando-dados-via-r"
                        >R</a
                    >.
                </p>
            </div>
        </div>

        <pre><code class="language-sql">

-- Lógica: identificar as geometrias das linhas que, em 6 de outubro de 2024, embarcaram mais de 500 passageiros por hora.

WITH services AS (
  SELECT DISTINCT
    servico_jae,
    descricao_servico_jae,
    sentido,
    quantidade_passageiros
  FROM `rj-smtr.bilhetagem.passageiro_hora`
  WHERE
    data = DATE("2024-10-06")
    AND quantidade_passageiros > 500
),
trips AS (
  SELECT DISTINCT
    trip_short_name,
    shape_id
  FROM `rj-smtr.gtfs.trips`
  WHERE trip_short_name IN (
    SELECT servico_jae FROM services
  )
),
shapes AS (
  SELECT *
  FROM `rj-smtr.gtfs.shapes_geom`
  WHERE shape_id IN (
    SELECT shape_id FROM trips
  )
)
SELECT
  s.servico_jae,
  s.descricao_servico_jae,
  s.sentido,
  t.trip_short_name,
  t.shape_id,
  g.*
FROM services s
JOIN trips t
  ON s.servico_jae = t.trip_short_name
JOIN shapes g
  ON t.shape_id = g.shape_id;

    </code></pre>
    </div>
    <Mapa3 />
</div>

<style>
    .intro-decode {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 3rem;
        margin-bottom: 2rem;
        background: #d2fb85;
        align-items: center;
    }

    .split-cont {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
        margin-bottom: 2rem;
    }

    .split-right {
        background: #c743c7;
        color: #f3f3e4;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
    }

    .split-right a {
        color: #f3f3e4;
        text-decoration: underline;
    }

    .pres-decode {
        font-size: 1.2rem;
        line-height: 1.4rem;
    }

    .refer-decode {
        border-left: 1px solid #ddd;
        padding: 1rem;
        border-radius: 8px;
    }

    .refer-decode h4 {
        margin-bottom: 1.5rem;
    }

    .refer-decode ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .refer-decode li {
        margin-bottom: 1.5rem;
        line-height: 1rem;
    }

    .content-decode {
        padding: 3rem;
    }

    .content-decode h3 {
        line-height: 1.3;
        padding: 2rem;
        border: #ddd 2px solid;
    }

    table::-webkit-scrollbar {
        width: 5px;
    }
    table::-webkit-scrollbar-track {
        background: #f3f3e4;
    }
    table::-webkit-scrollbar-thumb {
        background: #888;
    }
    table::-webkit-scrollbar-thumb:hover {
        background: #555;
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

    table {
        font-family: "Roboto Mono", sans-serif;
        font-size: 0.7rem;
        margin: 4rem auto;
    }

    p {
        margin: 3rem 1rem 3rem 1rem;
        line-height: 1.3rem;
    }

    th,
    td {
        padding: 0.6rem;
        text-align: center;
    }

    .bicolor {
        position: relative;
        display: inline-block;
    }

    .bicolor img {
        display: block;
        width: 100%;
        height: auto;
    }

    .bicolor::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, #d2fb85, #c743c7);
        mix-blend-mode: overlay; /* try: screen, overlay, difference */
        opacity: 1; /* adjust intensity */
        pointer-events: none;
    }

    @media (max-width: 768px) {
        .content-decode {
            padding: 0.8rem;
        }
        .intro-decode {
            display: inline-block;
            padding: 1rem;
        }
        .split-cont {
            display: inline-block;
            max-width: 90%;
        }
        table {
            table-layout: fixed !important;
            width: 90%;
        }
    }
</style>
