<script lang="ts">
  import { goto } from "$app/navigation";
  import CcgGameRound from "$lib/CCGGameRound.svelte";

</script>

<CcgGameRound />

<br><br>

<button id="next-button" onclick={() => goto('../game-end')}>End Game</button>

