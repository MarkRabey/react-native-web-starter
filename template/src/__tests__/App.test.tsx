import React from 'react';
// import 'react-native';
import App from '../App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    const result = renderer.create(<App />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
