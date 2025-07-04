export const saveToStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};
