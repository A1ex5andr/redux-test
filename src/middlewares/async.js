export default function ({dispatch}) {
  return next => action => {
    // console.log(action);

    // if no PAYLOAD in action
    // or no .then property
    // send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // make sure action's promise resolves
    action.payload.then(
      response => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      }
    );

  }
}