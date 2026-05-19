import { WorkbookProgress } from '@/lib/workbook-schema';
import { STORAGE_KEYS } from './constants';

class LocalStorageManager {
  private isAvailable(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  saveWorkbookProgress(progress: WorkbookProgress): void {
    if (!this.isAvailable()) return;
    try {
      const existing = this.getWorkbookProgress(progress.workbookId) || [];
      const updated = Array.isArray(existing) ? existing : [existing];
      updated.push(progress);
      localStorage.setItem(
        `${STORAGE_KEYS.WORKBOOK_PROGRESS}_${progress.workbookId}`,
        JSON.stringify(updated[updated.length - 1])
      );
    } catch (error) {
      console.error('Failed to save workbook progress:', error);
    }
  }

  getWorkbookProgress(workbookId: string): WorkbookProgress | null {
    if (!this.isAvailable()) return null;
    try {
      const data = localStorage.getItem(
        `${STORAGE_KEYS.WORKBOOK_PROGRESS}_${workbookId}`
      );
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to retrieve workbook progress:', error);
      return null;
    }
  }

  saveContent(workbookId: string, sectionId: string, content: string): void {
    if (!this.isAvailable()) return;
    try {
      const key = `${STORAGE_KEYS.SAVED_CONTENT}_${workbookId}_${sectionId}`;
      localStorage.setItem(key, content);
    } catch (error) {
      console.error('Failed to save content:', error);
    }
  }

  getContent(workbookId: string, sectionId: string): string | null {
    if (!this.isAvailable()) return null;
    try {
      const key = `${STORAGE_KEYS.SAVED_CONTENT}_${workbookId}_${sectionId}`;
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Failed to retrieve content:', error);
      return null;
    }
  }

  saveEmotionalCheckIn(
    workbookId: string,
    sectionId: string,
    response: string
  ): void {
    if (!this.isAvailable()) return;
    try {
      const key = `${STORAGE_KEYS.EMOTIONAL_CHECK_INS}_${workbookId}`;
      const existing = localStorage.getItem(key);
      const checkIns = existing ? JSON.parse(existing) : [];
      checkIns.push({
        timestamp: new Date().toISOString(),
        sectionId,
        response,
      });
      localStorage.setItem(key, JSON.stringify(checkIns));
    } catch (error) {
      console.error('Failed to save emotional check-in:', error);
    }
  }

  getEmotionalCheckIns(workbookId: string): Array<any> {
    if (!this.isAvailable()) return [];
    try {
      const key = `${STORAGE_KEYS.EMOTIONAL_CHECK_INS}_${workbookId}`;
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to retrieve emotional check-ins:', error);
      return [];
    }
  }

  clearWorkbookProgress(workbookId: string): void {
    if (!this.isAvailable()) return;
    try {
      const key = `${STORAGE_KEYS.WORKBOOK_PROGRESS}_${workbookId}`;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to clear workbook progress:', error);
    }
  }
}

export const storageManager = new LocalStorageManager();
