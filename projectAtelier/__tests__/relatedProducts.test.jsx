
import { render, screen, cleanup } from '@testing-library/react';
import RelatedCard from './client/src/components/RelatedProducts/RelatedSubs/RelatedCard.jsx';
import RelatedList from './client/src/components/RelatedProducts/RelatedSubs/RelatedList.jsx';
import Comparison from './client/src/components/RelatedProducts/RelatedSubs/Comparison.jsx';
import RelatedProducts from './client/src/components/RelatedProducts/RelatedProducts.jsx';
import { describe, expect, it, afterEach, vi } from 'vitest';
import dummyProducts from './dummyProductList.json';
import dummyFeatures from './dummyFeatures.json';
import userEvent from '@testing-library/user-event';



describe('Related Products', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('Related Products should render with the proper id', () => {
    render(<RelatedProducts product={dummyProducts[1]} currentProduct={dummyProducts[0]} products={dummyProducts} list={'related'}/>);
   expect(screen.getByText(dummyProducts[0].id, {exact: false})).not.toBe(null);
    screen.debug();
  });
  it('Related Card should not display the current product', () => {
    render(<RelatedCard product={dummyProducts[1]} currentProduct={dummyProducts[0]} products={dummyProducts} list={'related'}/>);
    expect(screen.queryByText('Camo Onesie')).toBe(null);
    screen.debug();
  });
  it('Related Card should display a related product', () => {
    render(<RelatedCard product={dummyProducts[1]} currentProduct={dummyProducts[0]} products={dummyProducts} list={'related'}/>);
    expect(screen.queryByText('Bright Future Sunglasses')).not.toBe(null);
    screen.debug();
  });

  it('Related Card should change the current product when clicked', async () => {

    const handleClick = vi.fn();

    render(<RelatedCard product={dummyProducts[1]} currentProduct={dummyProducts[0]} products={dummyProducts} list={'related'} handleClick={handleClick}/>);

    expect(screen.queryByText('Bright Future Sunglasses')).not.toBe(null);

    await userEvent.click(screen.getByText('Bright Future Sunglasses'));
    expect(handleClick).toBeCalledWith(37312);
    expect(handleClick).toHaveBeenCalledTimes(1);
    screen.debug();
  });
  it('Related List should render a carousel of related products', async () => {

    render(<RelatedList products={dummyProducts} list={'related'}/>);
    expect(document.querySelector('.react-multi-carousel-list  ')).to.exist;
    screen.debug();
  });
  it('Comparison Modal should compare featurs of selected product and current product', async () => {

    render(<Comparison product={dummyFeatures[1]} currentProduct={dummyFeatures[0]}/>);
    expect(screen.getByText('Brass')).not.toBe(null);
    screen.debug();
  });
});


