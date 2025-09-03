<script>
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import "prismjs/components/prism-sql.js";
    import "prismjs/themes/prism-tomorrow.css";
    import { produto474 } from "../data/produto474.js";
    import { dinhero } from "../data/dinhero.js";
    import { dinhero_erro } from "../data/dinhero_erro.js";
    import Panzoom from "@panzoom/panzoom";
    import SvgDinhero from "./Mapa4.svelte";
    import SvgCelular from "./Mapa5.svelte";

    export let src = "dinhero.svg";
    export let height = "1000px";
    export let width = "100%";

    let svgContainer;
    let panzoom;

    onMount(() => {
        Prism.highlightAll();
    });

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

<div class="content">
    <div class="intro-decode">
        <div class="pres-decode">
            <h1>Uma nova forma de exclusão a caminho?</h1>
            <p>
                Imitando servilmente o modelo de transporte de outras cidades, a
                Prefeitura do Rio de Janeiro pretende eliminar o dinheiro como
                meio de pagamento para acessar os ônibus municipais até 2028. Os
                dados corroboram essa escolha política?
            </p>
        </div>
        <div class="refer-decode">
            <h4>Banco de dados utilizado nesta decodificação</h4>
            <ul>
                <li>
                    <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=transacao&page=table"
                        target="_blank"
                        >Tabela com informações da Jaé sobre as transações
                        realizadas no sistema de transporte municipal</a
                    >
                </li>
            </ul>
        </div>
    </div>

    <div class="content-decode">
        <p>
            Em 22 de julho de 2025, a Prefeitura do Rio de Janeiro publicou um
            edital de consulta pública para a primeira fase da nova licitação do
            sistema de ônibus da cidade. O <a
                href="https://transportes.prefeitura.rio/wp-content/uploads/sites/31/2025/07/ANEXO-I.4-Especificacao-de-frota.pdf"
                target="_blank"
                >documento
            </a> anexo ao edital com as especificações da frota sugere que os veículos
            não estejam mais equipados para aceitar pagamentos em dinheiro. A cena
            do motorista apertando o botão para liberar o ingresso na catraca vai
            desaparecer e só o aparelho Jaé vai decidir quem pode entrar.
        </p>

        <p style="font-family: 'Roboto Mono'; font-size:0.8rem;">
            – Esse é um momento importante, uma mudança institucional na
            história da cidade do Rio. Nos dedicamos nesses primeiros seis meses
            à implantação do Jaé e, a partir de hoje, iniciamos o processo que
            irá proporcionar uma revolução no sistema de ônibus. O sofrimento
            vai acabar. Não será do dia para a noite, mas eu quero reafirmar que
            até o fim do mandato, em 2028, teremos esse sistema completamente
            reformado como fizemos no BRT. A mudança será sentida gradualmente,
            primeiro na Zona Oeste, mais especificamente em Campo Grande e em
            Santa Cruz – afirmou Eduardo Paes.
        </p>

        <p>
            Nos grupos do WhatsApp e nas páginas das redes sociais, alguns
            usuários levantaram a questão com base em sua experiência como
            passageiros:
        </p>

        <p style="font-family: 'Roboto Mono'; font-size:0.8rem;">
            (josoe.dejesus.7) Quem acha ok certamente nunca ficou sem bateria na
            volta do trabalho pra casa e sem o bilhete único. Dinheiro a gente
            ainda consegue pedir emprestado e se virar, mas e quem tá sem
            celular/carteira, quem foi roubado (muito comum)? Como vai voltar
            pra casa? (fe1emdeus42) A realidade de quem usa com certeza é outra
            !! Principalmente quando os cartões não passam, sem dizer
            estudantes. Os passes sempre dão problemas. (rafael.monteiro93) Algo
            difícil de acontecer é a extinção do dinheiro vivo, vindo do final
            de mês, ausência de pontos de recargas em municípios e bairros. O
            bilhete único só contempla 1 CPF..
        </p>

        <p style="margin-bottom: 10rem;">
            Essa decodificação procura compreender quem paga em dinheiro e em
            quais linhas as pessoas mais usam o dinheiro para ter acesso ao
            ônibus, com o objetivo de avaliar se, de acordo com os dados, a
            eliminação do dinheiro como método de pagamento pode resultar em uma
            forma de exclusão.
        </p>
        <div class="split-cont">
            <div class="split-left">
                <p>
                    Os dados sobre as transações georreferenciadas registradas
                    pelos aparelhos Jaé estão disponíveis em um banco de dados
                    disponibilizado pela Secretaria Municipal de Transportes
                    chamado <a
                        href="https://console.cloud.google.com/bigquery?p=rj-smtr&d=br_rj_riodejaneiro_bilhetagem&t=gps_validador&page=table"
                        target="_blank"
                        >Tabela com informações da Jaé sobre as transações
                        realizadas no sistema de transporte municipal</a
                    >. Os tipos de transação identificados pela base de dados
                    são: 'Visa Internacional', 'Dinheiro (Botoeira)',
                    'Gratuidade Operadora', 'Cartão Avulso', 'Carteira',
                    'Gratuidade', 'VT'. Para identificar as transações em
                    dinheiro ocorridas no 474 durante um certo intervalo de
                    tempo, é possível executar a seguinte busca:
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
-- Lógica: selecionar a localização geográfica (latitude, longitude), data, hora, tipo e valor da transação
-- no banco de dados (`rj-smtr.bilhetagem.transacao`) 
-- que atendem às condições: entre duas datas (BETWEEN DATE) e 
-- e a transação é em dinheiro
-- e o serviço é o 474 (servico_jae ="474") e

SELECT latitude, longitude, data, hora, servico_jae, descricao_servico_jae, produto, tipo_transacao, valor_transacao 
FROM `rj-smtr.bilhetagem.transacao` 
WHERE data BETWEEN DATE ("2025-08-1") AND DATE ("2025-08-31") 
AND produto NOT IN ("Carteira", "Cartão Avulso", "Gratuidade", "VT", "Visa Internacional", "Gratuidade Operadora") 
AND servico_jae = "474"

    </code></pre>

        <p>
            No 474, considerando as transações Jaé de agosto de 2025, os
            pagamentos em dinheiro foram 56 (0.06% do total das transações de
            agosto de 2025, de um total de 99.557 transações). Para apurar o
            número de transações por tipo e o valor das transações no mês de
            agosto, é possível executar a seguinte busca:
        </p>

        <pre><code class="language-sql">

SELECT 
  produto,
  COUNT(*) AS total_transacoes,
  SUM(valor_transacao) AS soma_valor
FROM `rj-smtr.bilhetagem.transacao`
WHERE data BETWEEN DATE("2025-08-01") AND DATE("2025-08-31")
  AND servico_jae = "474"
GROUP BY produto
ORDER BY total_transacoes DESC;

    </code></pre>

        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Total das Transações</th>
                    <th>Valor (R$)</th>
                </tr>
            </thead>
            <tbody>
                {#each produto474 as row}
                    <tr>
                        <td>{row.produto}</td>
                        <td>{row.total_transacoes}</td>
                        <td>{row.soma_valor}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <h3>
            Quais são as 10 linhas de ônibus onde mais se usou dinheiro como
            forma de pagamento no mês de agosto de 2025?
        </h3>

        <pre><code class="language-sql">

SELECT
 servico_jae,
 descricao_servico_jae,
COUNT(*) AS qtd_registros
FROM `rj-smtr.bilhetagem.transacao`
WHERE
data BETWEEN DATE ("2025-08-1") AND DATE ("2025-08-31") 
AND produto NOT IN ("Carteira", "Cartão Avulso", "Gratuidade", "VT", "Visa Internacional", "Gratuidade Operadora")
GROUP BY
  servico_jae, descricao_servico_jae
ORDER BY
  qtd_registros DESC
LIMIT 10;

    </code></pre>

        <table>
            <thead>
                <tr>
                    <th>ID serviço</th>
                    <th>Serviço</th>
                    <th>Transações em Dinheiro</th>
                </tr>
            </thead>
            <tbody>
                {#each dinhero as row}
                    <tr>
                        <td>{row.servico_jae}</td>
                        <td>{row.descricao_servico_jae}</td>
                        <td>{row.qtd_registros}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <SvgDinhero src="/dinhero.svg" height="800px" width="100%" />

        <p>
            Considerando que o sistema Jaé foi introduzido recentemente e que,
            para alguns consórcios e operadoras, a instalação é um processo
            lento e complexo, podemos confiar nos dados que os aparelhos passam
            para a Secretaria Municipal de Transportes? Considerando a elevada
            variabilidade dos resultados entre os dados mensais, é necessário
            proceder a uma pesquisa de campo para compreender o motivo desta
            variação. Por exemplo, as variações entre os meses de junho e julho,
            levando em consideração as linhas acima mencionadas, são muito
            acentuadas:
        </p>

        <pre><code class="language-sql">

WITH base AS (
  SELECT
    servico_jae,
    descricao_servico_jae,
    data,
    COUNT(*) AS qtd_transacoes
  FROM `rj-smtr.bilhetagem.transacao`
  WHERE
    data BETWEEN DATE("2025-07-01") AND DATE("2025-08-31")
    AND produto NOT IN ("Carteira", "Cartão Avulso", "Gratuidade", "VT", "Visa Internacional", "Gratuidade Operadora")
    AND servico_jae IN ("830","850","895","363","2307","371","2803","LECD113","2338","324")
  GROUP BY servico_jae, descricao_servico_jae, data
),

julho AS (
  SELECT servico_jae, descricao_servico_jae, SUM(qtd_transacoes) AS total_julho
  FROM base
  WHERE EXTRACT(MONTH FROM data) = 7
  GROUP BY servico_jae, descricao_servico_jae
),

agosto AS (
  SELECT servico_jae, descricao_servico_jae, SUM(qtd_transacoes) AS total_agosto
  FROM base
  WHERE EXTRACT(MONTH FROM data) = 8
  GROUP BY servico_jae, descricao_servico_jae
)

SELECT
  j.servico_jae,
  j.descricao_servico_jae,
  total_julho,
  total_agosto,
  SAFE_DIVIDE(total_agosto - total_julho, total_julho) * 100 AS variacao_percentual
FROM julho j
JOIN agosto a
  ON j.servico_jae = a.servico_jae
ORDER BY variacao_percentual DESC;

    </code></pre>

        <table>
            <thead>
                <tr>
                    <th>ID serviço</th>
                    <th>Serviço</th>
                    <th>Transações Julho</th>
                    <th>Transações Agosto</th>
                    <th>Variação %</th>
                </tr>
            </thead>
            <tbody>
                {#each dinhero_erro as row}
                    <tr>
                        <td>{row.servico_jae}</td>
                        <td>{row.descricao_servico_jae}</td>
                        <td>{row.total_julho}</td>
                        <td>{row.total_agosto}</td>
                        <td>{row.variacao_percentual}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <h3>
            Quem tá sem celular/carteira, quem foi roubado (muito comum), como
            vai voltar pra casa?
        </h3>

        <div class="split-cont">
            <div class="split-left">
                <p>
                    Entre as maiores preocupações dos passageiros está a
                    impossibilidade de acessar o ônibus devido ao roubo do
                    celular e da carteira. As estatísticas de segurança pública
                    do estado do Rio de Janeiro, que registram ocorrências de
                    furto ou roubo, estão disponíveis no banco de dados <a
                        href="https://dadosabertos.rj.gov.br/dataset/isp-estatisticas-de-seguranca-publica/resource/3e553e0b-ff90-48ad-9584-90df6baeea6c"
                        target="_blank"
                        >Série histórica mensal por área de Circunscrição
                        Integrada de Segurança Pública (CISP)</a
                    >, que equivale a área de atuação de uma unidade de polícia
                    judiciária da Secretaria de Estado de Polícia Civil (SEPOL).
                    A rota do 474 transita por 13 CISP marcados com os IDs 44,
                    23, 25, 21, 17, 18, 4, 6, 7, 9, 10, 12, 13.
                </p>
            </div>
            <div class="split-right">
                <p>
                    Para criar um mapa com as estatísticas de roubos de
                    celulares ou carteiras, é recomendável juntar tabelas com o
                    QGIS, associando os <a
                        href="https://dadosabertos.rj.gov.br/dataset/isp-estatisticas-de-seguranca-publica/resource/3e553e0b-ff90-48ad-9584-90df6baeea6c"
                        target="_blank">dados estatísticos</a
                    >
                    às
                    <a
                        href="https://www.ispdados.rj.gov.br/Conteudo.html"
                        target="_blank">geometrias do CISP</a
                    >. Para unir as tabelas, consulte o
                    <a
                        href="https://docs-qgis-org.translate.goog/3.40/en/docs/user_manual/working_with_vector/joins_relations.html?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp"
                        target="_blank">tutorial</a
                    >.
                </p>
            </div>
        </div>

        <SvgCelular src="/celular.svg" height="800px" width="100%" />
    </div>
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
