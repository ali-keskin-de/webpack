const setItem= (key, val) => localStorage.getItem(key, val);

const getItem= (key) => localStorage.getItem(key);

export { setItem, getItem};