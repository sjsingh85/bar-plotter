import {
  getLocalStorage,
  saveToLocalStorage
} from '../services/localStorageHelper';
import getBarItems from './BarItemsGenerator';

const BARS_DATA = 'BARS_DATA';

export async function getBars(count) {
  const oldData = getLocalStorage(BARS_DATA);

  if (oldData) {
    return oldData;
  } else {
    const newData = getBarItems(count);

    saveToLocalStorage(BARS_DATA, newData);

    return newData;
  }
}
