/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import TeamDetails from './';

it('TeamDetails component renders without crashing', () => {
  const component = shallow(<TeamDetails teamData={[{ name: 'blackburn' }]} />);
  expect(component.exists()).toEqual(true);
});
