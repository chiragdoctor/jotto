import checkPropTypes  from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import {middlewares} from '../configStore';

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}