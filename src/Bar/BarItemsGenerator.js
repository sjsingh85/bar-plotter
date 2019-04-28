import uuid from 'uuid/v4';

let ITEMS_COUNT = 26;

export class BarItemValue {
  key = uuid();
  barValue = 0;

  constructor(value) {
    this.barValue = value;
  }
}

function valuesGenerator() {
  let returnValues = [];

  for (let i = 0; i < ITEMS_COUNT; i++) {
    returnValues.push(new BarItemValue(Math.round(Math.random() * 1000)));
  }

  return returnValues;
}

export class BarItem {
  id = uuid();
  values = [];
  name = '';
  constructor(num) {
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
