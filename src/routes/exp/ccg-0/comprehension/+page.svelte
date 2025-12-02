<script>
  import ComprehensionQuestion from "$lib/ComprehensionQuestion.svelte";
  import RequiredQuestion from "$lib/RequiredQuestion.svelte";
</script>

<div class="page-content">

<h1>Comprehension Questions</h1>

<ComprehensionQuestion
  qid="cq1"
  text="CQ1. In each round, what is your task?"
  reset={false}
  answers={[
    { text: "Choose one of two shapes.", isCorrect: true },
    { text: "Choose one of three colors.", isCorrect: false },
    { text: "Choose one of two colors.", isCorrect: false },
    { text: "Add three numbers together.", isCorrect: false },
  ]}
  continueButtonId="next-button"
/>

<ComprehensionQuestion
  qid="cq2"
  text="CCQ2. In the game below (labeled 'Game 1') which outcome(s) earn you the highest reward?"
  reset={false}
  answers={[
    {
      text: "I choose green and the other player chooses green.",
      isCorrect: true,
    },
    {
      text: "I choose yellow and the other player chooses yellow.",
      isCorrect: false,
    },
    {
      text: "I choose green and the other player chooses yellow.",
      isCorrect: false,
    },
    {
      text: "I choose yellow and the other player chooses green.",
      isCorrect: false,
    },
  ]}
  continueButtonId="next-button"
/>

<ComprehensionQuestion
  qid="cq3"
  text="CQ3. In the game below (labeled 'Game 2') which outcome(s) earn you the highest reward?"
  reset={false}
  answers={[
    {
      text: "I choose green and the other player chooses green.",
      isCorrect: true,
    },
    {
      text: "I choose green and the other player chooses yellow.",
      isCorrect: false,
    },
    {
      text: "I choose yellow and the other player chooses yellow.",
      isCorrect: false,
    },
    {
      text: "I choose yellow and the other player chooses green.",
      isCorrect: false,
    },
  ]}
  continueButtonId="next-button"
/>

<ComprehensionQuestion
  qid="cq3v2"
  text="CQ3v2 Based on the game below, order the possible outcomes from your highest reward to your lowest reward."
  reset={false}
  answers={[
    { text: "The first correct answer.", isCorrect: true },
    { text: "The second correct answer.", isCorrect: true },
    { text: "An incorrect answer.", isCorrect: false },
    { text: "An incorrect answer.", isCorrect: false },
  ]}
  continueButtonId="next-button"
/>

<RequiredQuestion
  qid="rq1"
  text="Indicate when you understand and are ready to continue."
  answers={[
    { text: "I understand and I'm ready to continue." },
  ]}
  checkBoxType="checkbox"
  continueButtonId="next-button"
/>

<br>

<button
  id="next-button"
  onclick={() => alert("Next button clicked!")}
>
  Next
</button>

</div>