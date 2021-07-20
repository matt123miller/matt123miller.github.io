import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import IndexPage from './index';

test('testing', () => {
  const root = document.createElement('div');
  render(<IndexPage />);

  // const h1 = root.querySelector('h1');
  // expect(h1?.innerText).toContain('Matt')
});
