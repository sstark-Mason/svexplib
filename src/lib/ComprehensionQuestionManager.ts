import { onDestroy, onMount } from "svelte";
import { debugLib, PersistedState } from "./imports.ts"; // deno import

const debug = debugLib("svexplib:ComprehensionQuestionManager");

type ComprehensionQuestion = Record<string, boolean>;

export class ComprehensionQuestionManager {
  static instance: ComprehensionQuestionManager;
  private questions: Record<string, ComprehensionQuestion> = {};
  private continueButtonId: string | null = null;
  private continueButtonElement: HTMLButtonElement | null = null;

  public setContinueButtonElement(id: string | null) {
    // Find the continue button element by ID
    if (!id) {
      debug("No continue button ID provided.");
      return;
    }
    this.continueButtonId = id;
    this.continueButtonElement = document.getElementById(
      id,
    ) as HTMLButtonElement;
    if (this.continueButtonElement) {
      debug("Continue button element set:", this.continueButtonElement);
      // Initially disable the continue button
      this.continueButtonElement.disabled = true;
    } else {
      debug("Continue button element not found with ID:", id);
    }
  }

  private constructor(continueButtonId: string | null = null) {
    // Private constructor to prevent direct instantiation
    this.questions = new PersistedState<Record<string, ComprehensionQuestion>>(
      "comprehensionQuestions",
      {},
    ).current;
    this.setContinueButtonElement(continueButtonId);
    debug(
      "ComprehensionQuestionManager initialized with questions:",
      this.questions,
    );
  }

  public static getInstance(
    continueButtonId: string | null,
  ): ComprehensionQuestionManager {
    if (!ComprehensionQuestionManager.instance) {
      ComprehensionQuestionManager.instance = new ComprehensionQuestionManager(
        continueButtonId,
      );
    }
    return ComprehensionQuestionManager.instance;
  }

  public registerQuestion(qid: string) {
    if (this.questions[qid]) {
      debug("Question already registered:", qid);
    } else {
      debug("Registering new question:", qid);
      this.questions[qid] = { isPassed: false };
    }
  }

  public updateQuestionStatus(qid: string, isPassed: boolean) {
    this.questions[qid].isPassed = isPassed;
    debug(`Updated question ${qid} status to:`, isPassed);
    this.enableContinueButton(this.allQuestionsPassed());
  }

  private allQuestionsPassed(): boolean {
    for (const qid in this.questions) {
      if (!this.questions[qid].isPassed) {
        debug(`Question ${qid} not passed. Returning false...`);
        return false;
      }
    }
    debug("All questions passed.");
    return true;
  }

  private enableContinueButton(enabled: boolean) {
    if (this.continueButtonElement) {
      this.continueButtonElement.disabled = !enabled;
      debug(`Continue button ${enabled ? "enabled" : "disabled"}.`);
    }
  }
}
