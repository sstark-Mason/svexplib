<script>
  import { goto } from "$app/navigation";
</script>

<div class="page-content">
<h1>Welcome.</h1>

<p>By continuing, you are agreeing to participate in this experiment.</p>

<details>
  <summary>Full consent form</summary>
  <p>
    By participating in this experiment, you are implicitly giving your consent to participate in this experiment.
  </p>
  <!-- <p>Bottom text.</p> -->
</details>

<br>

<button
  id="next-button"
  class="next-button"
  onclick={() => goto("/exp/ccg/overview")}
>
  I agree
</button>

</div>
