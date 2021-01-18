import * as React from 'react';

import { shallow, configure } from 'enzyme';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// we have only with require typescript support
const renderer = require('react-test-renderer');
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
configure({ adapter: new Adapter() });

export const componentSanityChecks = (
  label: string,
  Element: React.ReactElement
) => {
  describe(`componentSanityChecks for ${label}`, () => {
    it('is defined', () => {
      expect(Element).toBeDefined();
    });

    it('render the element', () => {
      const wrapper = shallow(Element);
      const expected = false;
      const actual = wrapper.isEmptyRender();
      expect(expected).toEqual(actual);
    });
    it('matches the snapshot', () => {
      const expected = renderer
        .create(Element)
        .toJSON();
      expect(expected).toMatchSnapshot();
    });
  });
}

export const runPropsMatrix = (propsList: Array<Array<any>>, testCallback: Function) => {
  propsList.map(([labelSubfix, props]) => {
    testCallback(labelSubfix, props);
  })
};

export const testCheckBox = ({
  Component,
  mockedProps,
  propertyNameOfValue,
  propertyNameOfUpdateFunction,
  testid,
}) => {
  mockedProps[propertyNameOfValue] = false;
  mockedProps[propertyNameOfUpdateFunction] = jest.fn(() => {
    mockedProps[propertyNameOfValue] = !mockedProps[propertyNameOfValue];
  });

  const { rerender } = render(<Component {...mockedProps} />);

  const checkbox = screen.queryByTestId(testid);
  expect(checkbox).toBeTruthy();


  expect(mockedProps[propertyNameOfValue]).toBe(false);

  // click first
  fireEvent.click(checkbox);
  expect(mockedProps[propertyNameOfUpdateFunction].mock.calls.length).toBe(1);
  expect(mockedProps[propertyNameOfValue]).toBe(true);
  rerender(<Component {...mockedProps} />);


    // click secound
  fireEvent.click(checkbox);
  expect(mockedProps[propertyNameOfValue]).toBe(false);
  rerender(<Component {...mockedProps} />);


  expect(mockedProps[propertyNameOfUpdateFunction].mock.calls.length).toBe(2);
};
