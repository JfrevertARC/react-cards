import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
  searchValue: ''
}

export const searchUsers = (state=initialState, action={}) => {
  switch (action.type){
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchValue: action.payload});
    default:
      return state;
  }
}
