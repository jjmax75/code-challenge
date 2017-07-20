/* global it, describe, expect */

import actions from './';
import types from './../constants';

describe('Actions', () => {
  it('Should create a filter events action', () => {
    const expectedAction = {
      type: types.SET_FILTER,
      filter: undefined,
    };

    expect(actions.setFilter()).toEqual(expectedAction);
  });
});
