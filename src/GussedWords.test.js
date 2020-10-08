import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from './test/testUtils';
import GussedWords from './GussedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GussedWords {...setupProps} />);
};

test('does not throw warning with excepted props', () => {
  checkProps(GussedWords, defaultProps);
});

describe('if there are no words gussed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess the word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words gussed', () => {});