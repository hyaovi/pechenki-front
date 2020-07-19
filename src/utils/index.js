export const isANumber = (value) => /^\d+$/.test(value);
export const setSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
export const getSession = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};
export const removeSession = (key) => {
  sessionStorage.removeItem(key);
};
