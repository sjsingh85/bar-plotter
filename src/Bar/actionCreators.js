import { getBars } from './service';
import {
  GET_BAR_DATA,
  REMOVE_BAR,
  REMOVE_BAR_VALUE,
  ADD_BAR,
  ADD_BAR_VALUE
} from './reducers';
import { BarItem, BarItemValue } from './BarItemsGenerator';

export const actionCreators = {
  getBars: count => async dispatch => {
    const data = await getBars(count);
    dispatch({ type: GET_BAR_DATA, payload: data });
  },
  addBar: name => dispatch => {
    const barItem = new BarItem(1);
    barItem.name = name;

    dispatch({ type: ADD_BAR, payload: barItem });
  },
  removeBar: id => ({ type: REMOVE_BAR, payload: { id } }),
  addBarValue: (id, value) => dispatch => {
    const barItemValue = new BarItemValue(value);

    dispatch({ type: ADD_BAR_VALUE, payload: { id, newValue: barItemValue } });
  },
  removeBarValue: (id, barValueKey) => ({
    type: REMOVE_BAR_VALUE,
    payload: { id, key: barValueKey }
  })
};
