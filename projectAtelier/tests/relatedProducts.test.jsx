
import { render, screen, cleanup } from '@testing-library/react';
import RelatedProducts from '../client/src/components/RelatedProducts/RelatedProducts.jsx';
import RelatedList from '../client/src/components/RelatedProducts/RelatedSubs/RelatedList.jsx';
import { describe, expect, it, afterEach } from 'vitest';


describe('Kiels Component', () => {
  afterEach(() => {
    cleanup();
  });
  let relatedProducts = {};
  // axios.get(axiosConfig.url + '/products', axiosConfig).then((response) => {
  //   console.log(response.data)
  //   relatedProducts = response.data[0];
  // })
  console.log(relatedProducts)
  it('should render with the provided ID prop', () => {
    render(<RelatedProducts productId={1}/>);
    expect(screen.findByText('Current Product ID: 1')).not.toBeNull;
    screen.debug();
  });
  it('should render with the Scroll buttons', () => {
    render(<RelatedList />);
    expect(screen.findByText('Scroll Right')).not.toBeNull;
    expect(screen.findByText('Scroll Left')).not.toBeNull;
    screen.debug();
  });
});



