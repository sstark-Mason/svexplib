<script lang="ts">
  // import favicon from '$lib/assets/favicon.svg';
  // import SettingsMenu from '$lib/settingsMenu.svelte';

  import "./app.css";
  import debug from "debug";
  import { PersistedState } from "runed";

  let { children } = $props();
  let showSettings = $state(false);

  const darkMode = new PersistedState<boolean>("settings-dark-mode", true);
  const debugMode = new PersistedState<boolean>(
    "settings-debug-mode",
    true,
  );

  $effect(() => {
    document.body.setAttribute(
      "data-theme",
      darkMode.current ? "dark" : "light",
    );
  });

  $effect(() => {
    if (debugMode.current) {
      localStorage.debug = "svexplib:*";
      debug.enable(localStorage.debug);
    } else {
      localStorage.debug = "";
      debug.disable();
    }
  });
</script>

<svelte:head> </svelte:head>

<!-- Top navigation bar -->
<nav>
  <div>
    <a href="/" style="color: white; text-decoration: none; margin-right: 1rem"
    >Home</a>
    <a
      href="/comprehensionQuestions"
      style="color: white; text-decoration: none; margin-right: 1rem"
    >Comprehension Questions</a>
    <a
      href="/ccgGameRound"
      style="color: white; text-decoration: none; margin-right: 1rem"
    >CCG Game Round</a>
    <a
      href="/towerofHanoi"
      style="color: white; text-decoration: none; margin-right: 1rem"
    >Tower of Hanoi</a>
    <a
      href="/exp/ccg"
      style="color: white; text-decoration: none; margin-right: 1rem"
    >Experiment</a>
    <!-- Add more links as needed -->
  </div>

  <div style="align-items: right">
    <button
      onclick={() => {
        darkMode.current = !darkMode.current;
      }}
      style="background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem; margin-right: 1rem"
    >
      {darkMode.current ? "🌙" : "☀"}
    </button>
  </div>

  <div style="position: relative">
    <button
      onclick={() => showSettings = !showSettings}
      style="background: none; border: none; color: white; cursor: pointer"
    >
      Settings ▼
    </button>
    {#if showSettings}
      <ul
        style="position: absolute; top: 100%; right: 0; background: #555; list-style: none; padding: 0; margin: 0; min-width: 150px; z-index: 10"
      >
        <li style="padding: 0.5rem">
          <label style="color: white; display: flex; align-items: center">
            <input
              type="checkbox"
              checked={darkMode.current}
              onchange={(e) =>
                darkMode.current =
                  (e.target as HTMLInputElement).checked}
              style="margin-right: 0.5rem"
            />
            Dark Mode
          </label>
        </li>
        <li style="padding: 0.5rem">
          <label style="color: white; display: flex; align-items: center">
            <input
              type="checkbox"
              checked={debugMode.current}
              onchange={(e) =>
                debugMode.current =
                  (e.target as HTMLInputElement).checked}
              style="margin-right: 0.5rem"
            />
            Debug Mode
          </label>
        </li>
        <!-- Add more toggles as needed -->
      </ul>
    {/if}
  </div>
</nav>

{@render children?.()}

<style>
  nav {
    background-color: var(--nav-bg-color);
    color: var(--nav-text-color);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
</style>
