type DebounceFunction = <T extends never[]>(
  func: (...args: T) => void,
  delay: number
) => (...args: T) => void;

export const debounce: DebounceFunction = (func, delay) => {
  let timeoutId: NodeJS.Timeout | null;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};
