import { debugLib, PersistedState } from "$lib/imports.ts"; // deno import

const log = debugLib("app:InstructionsProgress");
localStorage.debug = "app:*";

const progress = new PersistedState<{ completed: string[] }>("instructions-progress", { completed: [] });

export class InstructionsProgress {
    static instance: InstructionsProgress;
    private progress: PersistedState<{ completed: string[] }>;

    private constructor() {
        this.progress = progress;
        log("InstructionsProgress initialized with progress:", this.progress.current);
    }

    public static getInstance(): InstructionsProgress {
        if (!InstructionsProgress.instance) {
            InstructionsProgress.instance = new InstructionsProgress();
        }
        return InstructionsProgress.instance;
    }
    
    static markCompleted(slug: string) {
        if (!progress.current.completed.includes(slug)) {
            progress.current.completed.push(slug);
        }
    }

    static isCompleted(slug: string): boolean {
        if (progress.current.completed.includes(slug)) {
            return true;
        } else {
            return false;
        }
    }

    static getCompleted(): string[] {
        return progress.current.completed;
    }

}

