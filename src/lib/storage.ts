const STORAGE_KEY = "codequest_progress";

export interface UserProgress {
  selectedSubject: string | null;
  subjectProgress: Record<string, SubjectProgress>;
}

export interface SubjectProgress {
  completedLevels: number[];
  currentLevel: number;
  wrongAttempts: Record<number, number>;
}

const defaultProgress: UserProgress = {
  selectedSubject: null,
  subjectProgress: {},
};

export function getProgress(): UserProgress {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { ...defaultProgress };
}

export function saveProgress(progress: UserProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getSubjectProgress(subject: string): SubjectProgress {
  const progress = getProgress();
  return (
    progress.subjectProgress[subject] || {
      completedLevels: [],
      currentLevel: 0,
      wrongAttempts: {},
    }
  );
}

export function updateSubjectProgress(
  subject: string,
  update: Partial<SubjectProgress>
): void {
  const progress = getProgress();
  const current = getSubjectProgress(subject);
  progress.subjectProgress[subject] = { ...current, ...update };
  saveProgress(progress);
}

export function completeLevel(subject: string, level: number): void {
  const sp = getSubjectProgress(subject);
  if (!sp.completedLevels.includes(level)) {
    sp.completedLevels.push(level);
  }
  sp.currentLevel = Math.max(sp.currentLevel, level + 1);
  sp.wrongAttempts[level] = 0;
  updateSubjectProgress(subject, sp);
}

export function addWrongAttempt(subject: string, level: number): number {
  const sp = getSubjectProgress(subject);
  const current = sp.wrongAttempts[level] || 0;
  sp.wrongAttempts[level] = current + 1;
  updateSubjectProgress(subject, sp);
  return current + 1;
}

export function resetWrongAttempts(subject: string, level: number): void {
  const sp = getSubjectProgress(subject);
  sp.wrongAttempts[level] = 0;
  updateSubjectProgress(subject, sp);
}

export function isLevelUnlocked(subject: string, level: number): boolean {
  if (level === 0) return true;
  const sp = getSubjectProgress(subject);
  return sp.completedLevels.includes(level - 1);
}

export function resetAllProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}
