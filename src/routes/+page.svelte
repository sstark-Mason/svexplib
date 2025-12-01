<script lang="ts">
  // import { Prism } from "$lib/imports.ts"; // deno import
  // import Prism from 'svelte-prism';
  
  import ComprehensionQuestion from "$lib/ComprehensionQuestion.svelte";
</script>

<div class="page-content">

<h1>Welcome to the svexplib demo.</h1>
<p>This site showcases the web components available in this library.</p>
<p>Web components are built for easy integration into any page.</p>
<br>

<p>Example:</p>

<pre><code>
  {`<ComprehensionQuestion
      qid="cq1"
      text="CQ1. Select the correct answer."
      reset={true}
      answers={[
        { text: "The correct answer.", isCorrect: true },
        { text: "An incorrect answer.", isCorrect: false },
        { text: "An incorrect answer.", isCorrect: false },
      ]}
      continueButtonId="next-button"
    />
  `}
</code></pre>

<ComprehensionQuestion
  qid="cq1"
  text="CQ1. Select the correct answer."
  reset={true}
  answers={[
    { text: "The correct answer.", isCorrect: true },
    { text: "An incorrect answer.", isCorrect: false },
    { text: "An incorrect answer.", isCorrect: false },
  ]}
  continueButtonId="next-button"
/>
  
</div>