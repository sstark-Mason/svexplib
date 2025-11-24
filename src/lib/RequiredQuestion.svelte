<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { ComprehensionQuestionManager } from "./ComprehensionQuestionManager.ts";

  import { debugLib, PersistedState } from "./imports.ts"; // deno import
  const debug = debugLib("svexplib:RequiredQuestion");

  // let { qid, text, answers, checkBoxType, continueButtonId } : { qid: string; text: string; answers: string[]; checkBoxType: string; continueButtonId: string; } = $props();

  let { qid, text, answers, checkBoxType, continueButtonId }: {
    qid: string;
    text: string;
    answers: { text: string }[];
    checkBoxType: string;
    continueButtonId?: string | null;
  } = $props();

  interface answerOption {
    cid: string;
    text: string;
    isSelected: boolean;
  }

  interface RequiredQuestion {
    qid: string;
    text: string;
    answers: answerOption[];
    checkBoxType: string;
    continueButtonId: string | null;
    manager?: ComprehensionQuestionManager;
  }

  let answerOptions: answerOption[] = answers.map((ans, index) => ({
    cid: `cid_${index + 1}`,
    text: ans.text,
    isSelected: false,
  }));

  let question: RequiredQuestion = {
    qid,
    text,
    answers: answerOptions,
    checkBoxType,
    continueButtonId: continueButtonId || null,
    manager: undefined,
  };

  onMount(() => {
    debug(`Mounting RequiredQuestion with qid: ${question.qid}`);
    question.manager = ComprehensionQuestionManager.getInstance(
      question.continueButtonId,
    );
    question.manager.registerQuestion(question.qid);
  });

  function answerClicked(cid: string) {
    debug(`Answer clicked: ${cid} for question: ${question.qid}`);
    const ans = question.answers.find((a) => a.cid === cid);
    if (ans) {
      ans.isSelected = !ans.isSelected;
      debug(`Answer ${ans.text} isSelected: ${ans.isSelected}`);
    }

    // Notify the manager about the answer selection
    if (question.manager) {
      const isAnySelected = question.answers.some((a) => a.isSelected);
      question.manager.updateQuestionStatus(question.qid, isAnySelected);
    }
  }
</script>

<h3>{question.text}</h3>
{#each question.answers as ans}
  <input
    type={question.checkBoxType}
    id={ans.cid}
    name={question.qid}
    value={ans.text}
    checked={ans.isSelected}
    onchange={(e) => answerClicked(ans.cid)}
  />
  <label for={ans.cid}>{ans.text}</label><br>
{/each}

<style>
  h3 {
    margin-bottom: 0.3em; /* Adjust as needed, or set to 0 */
    padding-bottom: 0; /* In case padding is applied by a global style */
  }
</style>
