import uuid from 'uuid/v4';

let ITEMS_COUNT = 26;

function valuesGenerator() {
  let returnValues = [];

  for (let i = 0; i < ITEMS_COUNT; i++) {
    returnValues.push(Math.round(Math.random() * 1000));
  }

  return returnValues;
}

class BarItem {
  id = uuid();
  values = [];
  name = '';
  constructor(num) {
    console.log(num);
    this.values = valuesGenerator();
    this.name = `Random Item ${num || Math.round(Math.random() * 1000)}`;
  }
}

export default function getBarItems(count) {
  let returnValues = [];

  for (let i = 0; i < count; i++) {
    returnValues.push(new BarItem(i + 1));
  }

  return returnValues;
}
