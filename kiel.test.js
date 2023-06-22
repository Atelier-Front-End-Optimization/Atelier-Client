import {render, screen} from '@testing-library/react';
import KielsWidge from './KielsWidge.jsx';


// describe('App', () => {
//   if('Testing the tester', () => {
//     render(<App title='Test'/>);

//     screen.debug();
//   })
// })

describe('App', function() {
  if('Testing the tester', function () {
    render(<App title='Test'/>);

    screen.debug();
  })
})