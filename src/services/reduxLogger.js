export const reduxLogger = ({ getState }) => next => action => {
  //TODO: Use https://github.com/evgenyrodionov/redux-logger

  if (!console.group) {
    return next(action);
  }

  console.group(action.type);
  console.log('%c prev state', 'color: gray', getState());
  console.log('%c action', 'color: blue', action);
  const returnValue = next(action);
  console.log('%c next state', 'color: green', getState());
  console.groupEnd();
  return returnValue;
};
