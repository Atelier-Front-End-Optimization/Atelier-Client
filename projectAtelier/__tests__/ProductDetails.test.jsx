import { render, screen, cleanup } from '@testing-library/react';
import ProductDetails from '../client/src/components/Product_Details/ProductDetails.jsx';
import ItemDescription from '../client/src/components/Product_Details/Product_Subcomps/ItemDescription.jsx';
import { describe, expect, it, afterEach } from 'vitest';


describe('Overview', () => {
  afterEach(() => {
    cleanup();
  });
  it('should display the name of the product', () => {
    render(<ProductDetails productId={37311}/>);
    expect(screen.findByText('Forest Green & Black')).not.toBeNull;
    screen.debug();
  });
//   it('should display product slogan', () => {
//     render(<ItemDescription slogan={'Blend in to your crowd'}/>);
//     expect(screen.findByText('Blend in to your crowd')).not.toBeNull;
//     screen.debug();
//   });
});