
import { render, screen } from '@testing-library/react';
import React from 'react';
import KielsWidge from './KielsWidge.jsx';
import { describe, expect, it } from 'vitest';

describe('Kiels Component', () => {
  it('should render with the provided title prop', () => {
    render(<KielsWidge title='Test'/>);
    screen.debug();
  });
});


