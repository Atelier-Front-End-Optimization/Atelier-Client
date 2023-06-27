
import { render, screen } from '@testing-library/react';
import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import { describe, expect, it } from 'vitest';

describe('Kiels Component', () => {
  it('should render with the provided title prop', () => {
    render(<RelatedProducts productId={1}/>);
    screen.debug();
  });
});


