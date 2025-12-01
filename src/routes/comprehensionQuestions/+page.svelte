<script>
  import ComprehensionQuestion from "$lib/ComprehensionQuestion.svelte";
  import RequiredQuestion from "$lib/RequiredQuestion.svelte";
</script>

<div class="page-content">

<h1>Comprehension Questions</h1>

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

<ComprehensionQuestion
  qid="cq2"
  text="CQ2. Select the correct answers."
  reset={true}
  answers={[
    { text: "The first correct answer.", isCorrect: true },
    { text: "The second correct answer.", isCorrect: true },
    { text: "An incorrect answer.", isCorrect: false },
    { text: "An incorrect answer.", isCorrect: false },
  ]}
  continueButtonId="next-button"
/>

<ComprehensionQuestion
  qid="cq3"
  text="CQ3. Select the correct answer."
  reset={false}
  answers={[
    { text: "The correct answer.", isCorrect: true },
    { text: "An incorrect answer.", isCorrect: false },
    { text: "An incorrect answer.", isCorrect: false },
  ]}
  continueButtonId="next-button"
/>

<ComprehensionQuestion
  qid="cq4"
  text="CQ4. Select the correct answers."
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