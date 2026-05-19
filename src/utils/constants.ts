export const WORKBOOK_COLLECTIONS = {
  DIAGNOSIS_SURVIVAL: 'diagnosis-survival',
  MEDICAL_MAZE: 'medical-maze',
  AGS_UNDERSTANDING: 'ags-understanding',
  ADVOCACY_SURVIVAL: 'advocacy-survival',
  CAREGIVER_SURVIVAL: 'caregiver-survival',
  FINANCIAL_SURVIVAL: 'financial-survival',
} as const;

export const COLORS = {
  BG_PRIMARY: '#0f0a15',
  BG_SECONDARY: '#1a1226',
  BG_TERTIARY: '#2d2440',
  ACCENT_TEAL: '#00d9ff',
  ACCENT_PURPLE: '#b366ff',
  ACCENT_DEEP: '#7b2cbf',
  TEXT_PRIMARY: '#f5f5f7',
  TEXT_SECONDARY: '#d0d0d0',
  TEXT_ACCENT: '#00d9ff',
  TEXT_WARM: '#ffd700',
} as const;

export const EMOTIONAL_INTENSITIES = {
  LIGHT: 'light',
  MEDIUM: 'medium',
  HEAVY: 'heavy',
} as const;

export const STORAGE_KEYS = {
  WORKBOOK_PROGRESS: 'otn_workbook_progress',
  SAVED_CONTENT: 'otn_saved_content',
  EMOTIONAL_CHECK_INS: 'otn_emotional_check_ins',
  USER_PREFERENCES: 'otn_user_preferences',
} as const;

export const PERMISSION_STATEMENTS = [
  'You do not need to be strong right now. You need to be you.',
  'Your feelings are valid. All of them.',
  'Healing is not linear. Neither is survival.',
  'You are allowed to take up space.',
  'There is no "right way" to do this.',
  'Your exhaustion makes sense.',
  'You are doing better than you think.',
  'It is okay to ask for help.',
  'Your grief and your love can exist together.',
  'You matter, independent of productivity.',
];
