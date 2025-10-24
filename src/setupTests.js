import '@testing-library/jasmine-dom';

import jasmineDOM from '@testing-library/jasmine-dom';
beforeEach(() => {
  jasmine.addMatchers(jasmineDOM);
});
