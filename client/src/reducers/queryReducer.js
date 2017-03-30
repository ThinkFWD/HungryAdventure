import * as c from '../constants';

export function reducer(state={
  values: {}

}, action) {
  switch(action.type) {
    case c.FORM_UPDATE_VALUE: 
      return {
        ...state, values: {[action.name] : action.value}
       }
    case c.FORM_RESET: 
      return {
        values: {}
      }
    }
   return state;
}
