<script>
  import Router, { link } from "svelte-spa-router";
  import { textos, mapas, dadosLinks, decode } from "./data/links.js";
  import { onMount } from "svelte";

  import Home from "./routes/Home.svelte";
  import Nunca from "./routes/Nunca.svelte";
  import Linhas from "./routes/Linhas.svelte";
  import Texto3 from "./routes/Texto3.svelte";
  import Texto4 from "./routes/Texto4.svelte";
  import Mapa1 from "./routes/Mapa1.svelte";
  import Mapa2 from "./routes/Mapa2.svelte";
  import Mapa3 from "./routes/Mapa3.svelte";
  import Mapa4 from "./routes/Mapa4.svelte";
  import Mapa5 from "./routes/Mapa5.svelte";
  import Dados from "./routes/Dados.svelte";
  import Decode1 from "./routes/Decode1.svelte";
  import Decode2 from "./routes/Decode2.svelte";
  import Decode3 from "./routes/Decode3.svelte";
  import Decode4 from "./routes/Decode4.svelte";
  import Decode5 from "./routes/Decode5.svelte";
  import Decode6 from "./routes/Decode6.svelte";
  import Decode7 from "./routes/Decode7.svelte";
  import Decode8 from "./routes/Decode8.svelte";
  import Decode9 from "./routes/Decode9.svelte";

  const routes = {
    "/": Home,
    "/textos/nunca-e-moite-no-mapa": Nunca,
    "/textos/linhas": Linhas,
    "/textos/texto3": Texto3,
    "/textos/texto4": Texto4,
    "/mapas/mapa1": Mapa1,
    "/mapas/mapa2": Mapa2,
    "/mapas/mapa3": Mapa3,
    "/mapas/mapa4": Mapa4,
    "/mapas/mapa5": Mapa5,
    "/dados": Dados,
    "/decode/decode1": Decode1,
    "/decode/decode2": Decode2,
    "/decode/decode3": Decode3,
    "/decode/decode4": Decode4,
    "/decode/decode5": Decode5,
    "/decode/decode6": Decode6,
    "/decode/decode7": Decode7,
    "/decode/decode8": Decode8,
    "/decode/decode9": Decode9,
  };

  let activeLink = "";
  let showContent = false;
  let contentWidth = 0;
  let textosColumn, mapasColumn, dadosColumn;

  function openOverlay(linkHref) {
    activeLink = linkHref;
    showContent = true;

    // Calculate width of first three columns plus gap
    const t = textosColumn?.offsetWidth || 0;
    const m = mapasColumn?.offsetWidth || 0;
    const d = dadosColumn?.offsetWidth || 0;
    contentWidth = t + m + d + 32;

    // Scroll overlay to top
    setTimeout(() => {
      const overlay = document.querySelector(".content-overlay");
      if (overlay) overlay.scrollTop = 0;
    }, 0);

    if (window.innerWidth <= 768) {
      decodeOpen = false;
    }
  }

  function closeContent() {
    showContent = false;
    activeLink = "";
  }

  function getDecodeItems(refs) {
    return decode.filter((d) => refs.includes(d.link));
  }

  let showScrollHint = false;

  onMount(() => {
    function checkOverflow() {
      if (dadosColumn) {
        const hasOverflow = dadosColumn.scrollHeight > dadosColumn.clientHeight;
        const atBottom =
          dadosColumn.scrollTop + dadosColumn.clientHeight >=
          dadosColumn.scrollHeight - 2;

        showScrollHint = hasOverflow && !atBottom;
      }
    }

    if (dadosColumn) {
      dadosColumn.addEventListener("scroll", checkOverflow);
    }

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      if (dadosColumn) {
        dadosColumn.removeEventListener("scroll", checkOverflow);
      }
      window.removeEventListener("resize", checkOverflow);
    };
  });

  let decodeOpen = false;

  function toggleDecode() {
    decodeOpen = !decodeOpen;
  }
</script>

<div class="layout">
  <div class="left">
    <header class="main-header">474, JACARÉ COPACABANA: DATA CRITIC</header>
    <Home />

    <div class="columns">
      <section class="texto-col" bind:this={textosColumn}>
        <h4>BIBLIOTECA</h4>
        <ul>
          {#each textos as t}
            <li>
              <a href={t.link} use:link on:click={() => openOverlay(t.link)}
                >{t.title}</a
              >
            </li>
          {/each}
        </ul>
      </section>

      <section class="mapa-col" bind:this={mapasColumn}>
        <h4>MAPAS</h4>
        <ul>
          {#each mapas as m}
            <li>
              <a href={m.link} use:link on:click={() => openOverlay(m.link)}
                >{m.title}</a
              >
              {#if m.decodeRefs?.length}
                <div class="related">
                  <small
                    >Consulte
                    {#each getDecodeItems(m.decodeRefs) as r}
                      <a
                        href={r.link}
                        use:link
                        on:click={() => openOverlay(r.link)}>{r.title}</a
                      >
                    {/each}
                  </small>
                </div>
              {/if}
            </li>
          {/each}
        </ul>
      </section>

      <section class="dado-col" bind:this={dadosColumn}>
        <h4>DADOS</h4>
        <div class="scroll-hint" class:visible={showScrollHint}>↓</div>
        <ul>
          {#each dadosLinks as d}
            <li>
              {#if d.link.startsWith("http")}
                <a href={d.link} target="_blank" rel="noopener noreferrer"
                  >{d.title}</a
                >
              {:else}
                <a href={d.link} use:link on:click={() => openOverlay(d.link)}
                  >{d.title}</a
                >
              {/if}
              {#if d.decodeRefs?.length}
                <div class="related">
                  <small
                    >Consulte
                    {#each getDecodeItems(d.decodeRefs) as r}
                      <a
                        href={r.link}
                        use:link
                        on:click={() => openOverlay(r.link)}>{r.title}</a
                      >
                    {/each}
                  </small>
                </div>
              {/if}
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </div>

  <button class="decode-toggle" on:click={toggleDecode}>
    {decodeOpen ? "✕" : "☰ Decodificações"}
  </button>

  <div class="right {decodeOpen ? 'open' : ''}">
    <header class="decode-header">DECODIFICAÇÕES</header>
    <div class="decode-list">
      <ul>
        {#each decode as d}
          <li>
            <a href={d.link} use:link on:click={() => openOverlay(d.link)}
              >{d.title}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

{#if showContent}
  <div class="content-overlay" style="width: {contentWidth}px;">
    <button class="close-btn" on:click={closeContent}>✕</button>
    <Router {routes} useHash={true} props={{ closeContent }} />
  </div>
{/if}

<style>
  header {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 100vh;
  }

  .left,
  .right {
    max-height: 100%;
    overflow-y: auto;
  }

  .left {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .main-header {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    position: sticky;
    top: 0;
    z-index: 5;
  }

  .columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  .columns li {
    line-height: 1.1rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  section {
    font-size: 1.1rem;
    max-height: calc(100vh - 3rem);
    overflow-y: auto;
  }

  .fixed {
    position: sticky;
    top: 3rem;
    height: calc(100vh - 5rem);
    overflow-y: auto;
    background: #f0eea4;
    border-left: 1px solid #ddd;
  }

  .fixed li {
    font-size: 0.9rem;
    border-bottom: 2px solid #f3f3e4;
    padding: 1rem;
    line-height: 1.1rem;
  }

  .related {
    margin-top: 15px;
    line-height: 1.5rem;
  }

  small a {
    border: 5px #d2fb85 solid;
    border-radius: 10px;
    background: #d2fb85;
    padding: 2px;
    margin: 2px;
  }

  .right {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #ddd;
    background: #d2fb85;
    position: sticky;
    top: 0;
    height: 100vh;
  }

  .dados .decode-header {
    font-weight: bold;
    border-bottom: 1px solid rgb(82, 80, 80);
    background: #d2fb85;
  }

  .dado-col {
    position: relative; /* so the arrow can be absolutely positioned */
    overflow-y: auto;
  }

  .scroll-hint {
    position: absolute;
    bottom: 0.5rem;
    left: 90%;
    transform: translateX(-90%);
    font-size: 2rem;
    color: rgb(42, 10, 92) !important;
    background: #d2fb85;
    padding: 0.2rem 0.6rem;
    display: none;
    pointer-events: none;
  }

  .scroll-hint.visible {
    display: block;
    animation: bounce 1.5s infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 6px);
    }
  }
  .decode-list {
    flex: 1;
    overflow-y: auto;
  }

  .decode-list li {
    font-size: 1.2rem;
    border-bottom: 1px solid #f3f3e4;
    padding: 1.2rem 1.5rem 1.2rem 1.5rem;
    line-height: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: rgb(42, 10, 92) !important;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .content-overlay {
    position: absolute;
    top: 2.5rem;
    max-height: calc(100vh - 4.5rem);
    overflow-y: auto;
    background: #f3f3e4;
    z-index: 5;
    padding: 1rem;
    border: none;
    box-shadow: none;
    height: 100rem;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    color: rgb(42, 10, 92) !important;
    background: none;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    z-index: 9999;
  }

  .decode-toggle {
    display: none;
  }

  .left::-webkit-scrollbar,
  .decode-list::-webkit-scrollbar,
  .content-overlay::-webkit-scrollbar {
    width: 5px;
  }
  .dado-col::-webkit-scrollbar,
  .mapa-col::-webkit-scrollbar,
  .texto-col::-webkit-scrollbar {
    width: 0;
  }
  .left::-webkit-scrollbar-track {
    background: #f3f3e4;
  }
  .left::-webkit-scrollbar-thumb {
    background: #888;
  }
  .left::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .dado-col::-webkit-scrollbar-track {
    background: #f3f3e4;
  }
  .dado-col::-webkit-scrollbar-thumb {
    background: #888;
  }
  .dado-col::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .decode-list::-webkit-scrollbar-track {
    background: #f3f3e4;
  }
  .decode-list::-webkit-scrollbar-thumb {
    background: #888;
  }
  .decode-list::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .content-overlay::-webkit-scrollbar-track {
    background: #d2fb85;
  }
  .content-overlay::-webkit-scrollbar-thumb {
    background: #888;
  }
  .content-overlay::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    .columns {
      display: block;
    }
    .scroll-hint {
      display: none !important;
    }
    .decode-toggle {
      display: block;
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      color: rgb(42, 10, 92) !important;
      background: #d2fb85;
      border: 1px solid #999;
      padding: 0.6rem 1rem;
      border-radius: 8px;
      font-weight: bold;
      z-index: 2000;
      cursor: pointer;
    }

    .right {
      position: fixed;
      top: 0;
      right: -100%; /* hidden offscreen */
      width: 80%;
      max-width: 320px;
      height: 100vh;
      background: #d2fb85;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
      transition: right 0.3s ease-in-out;
      z-index: 1500;
    }

    .content-overlay {
      width: 90% !important;
    }

    .right.open {
      right: 0; /* slide in */
    }

    .layout {
      grid-template-columns: 1fr;
    }
  }
</style>
