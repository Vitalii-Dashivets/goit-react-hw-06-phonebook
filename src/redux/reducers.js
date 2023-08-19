import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
