const namespace = '[BAR]:';
export const GET_BAR_DATA = namespace + 'GET_BAR_DATA';
export const ADD_BAR = namespace + 'ADD_BAR';
export const REMOVE_BAR = namespace + 'REMOVE_BAR';
export const ADD_BAR_VALUE = namespace + 'ADD_BAR_VALUE';
export const REMOVE_BAR_VALUE = namespace + 'REMOVE_BAR_VALUE';

const initialState = { bars: [] };

export const barsReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case GET_BAR_DATA:
      return { ...state, bars: action.payload };
    case ADD_BAR:
      return { ...state, bars: state.bars.concat(action.payload) };
    case REMOVE_BAR:
      return {
        ...state,
        bars: state.bars.filter(t => t.id !== action.payload.id)
      };
    case ADD_BAR_VALUE:
      return {
        ...state,
        bars: state.bars.map(t => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              values: t.values.concat(action.payload.newValue)
            };
          }

          return t;
        })
      };
    case REMOVE_BAR_VALUE:
      return {
        ...state,
        bars: state.bars.map(t => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              values: t.values.filter(k => k.key !== action.payload.key)
            };
          }

          return t;
        })
      };
    default:
      return state;
  }
};
