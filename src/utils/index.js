export const isANumber = (value) => /^\d+$/.test(value);
export const setSession = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getSession = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const removeSession = (key) => {
  localStorage.removeItem(key);
};
