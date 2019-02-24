export function getLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return void 0;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Unable to get data from localstorage', e);
    return void 0;
  }
}

export function saveToLocalStorage(key, data) {
  try {
    const serializedState = JSON.stringify(data);

    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.error('Unable to set data in localstorage', e);
  }
}
