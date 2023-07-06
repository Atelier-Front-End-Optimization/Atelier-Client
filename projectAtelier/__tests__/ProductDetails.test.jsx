/* eslint-disable no-unused-vars */
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ProductDetails from '../client/src/components/Product_Details/ProductDetails.jsx';
import ItemDescription from '../client/src/components/Product_Details/Product_Subcomps/ItemDescription.jsx';
import AddBag from '../client/src/components/Product_Details/Product_Subcomps/AddBag.jsx';
import Favorite from '../client/src/components/Product_Details/Product_Subcomps/Favorite.jsx';
import SizeSelect from '../client/src/components/Product_Details/Product_Subcomps/SizeSelect.jsx';
import QuantitySelect from '../client/src/components/Product_Details/Product_Subcomps/QuantitySelect.jsx';
import ProductModal from '../client/src/components/Product_Details/Product_Subcomps/ProductModal.jsx';
import StyleScroller from '../client/src/components/Product_Details/Product_Subcomps/StyleScroller.jsx';
import ProductStyles from '../client/src/components/Product_Details/Product_Subcomps/ProductStyles.jsx';

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

  it('renders add bag button', () => {
    render(<AddBag />);
    const addButton = screen.getByText('ADD TO BAG');
    expect(addButton).toBeTruthy();
  });

  it('renders the favorite button', () => {
    const { container } = render(<Favorite />);
    const favoriteButton = container.querySelector('button');
    expect(favoriteButton).to.exist;
  });

  it('renders the size selection dropdown', () => {
    render(<SizeSelect />);
    const selectElement = screen.getByLabelText('SELECT SIZE')
    expect(selectElement).to.exist;
  });

  it('renders the quantity selection dropdown', () => {
    render(<QuantitySelect />);
    const quantityElement = document.querySelector('#quantitySelect')
    expect(quantityElement).to.exist;
  });

  it('renders product description', () => {
    render(<ItemDescription />);
    const itemDescriptionElement = document.querySelector('#description')
    expect(itemDescriptionElement).to.exist
  });

  it('should render the correct number of style buttons', () => {
    const photos = {
      results: [
        { photos: [{ url: 'image1.jpg' }], name: 'Style 1' },
        { photos: [{ url: 'image2.jpg' }], name: 'Style 2' },
        { photos: [{ url: 'image3.jpg' }], name: 'Style 3' },
        { photos: [{ url: 'image4.jpg' }], name: 'Style 4' },
        { photos: [{ url: 'image5.jpg' }], name: 'Style 5' },
      ],
    };

    const { container } = render(
      <ProductStyles
        photos={photos}
        setStylePhoto={() => {}}
        setStyleName={() => {}}
        setActiveIndex={() => {}}
      />
    );
    const styleButtons = container.querySelectorAll('.circle-button');
    const expectedButtonCount = photos.results.length;
    expect(styleButtons).to.have.lengthOf(expectedButtonCount);
  });

  it('should render the correct number of style images in scroller', () => {
    const productStylePhotos = {
      results: [
        { photos: [{ url: 'image1.jpg' }], name: 'Style 1' },
        { photos: [{ url: 'image2.jpg' }], name: 'Style 2' },
        { photos: [{ url: 'image3.jpg' }], name: 'Style 3' },
      ],
    };

    const { container } = render(
      <StyleScroller productStylePhotos={productStylePhotos} setActiveIndex={() => {}} />
    );

    const images = container.querySelectorAll('img');
    const imageCount = productStylePhotos.results.length;
    expect(images).to.have.lengthOf(imageCount);
  });

  it('should render the correct image', () => {
    const productStylePhotos = {
      results: [
        { photos: [{ url: 'image1.jpg' }], name: 'Style 1' },
        { photos: [{ url: 'image2.jpg' }], name: 'Style 2' },
        { photos: [{ url: 'image3.jpg' }], name: 'Style 3' },
      ],
    };
    const activeIndex = 1; // Set the active index to the desired value

    const { getByAltText } = render(
      <ProductModal
        stylePhoto={productStylePhotos.results[activeIndex]}
        productStylePhotos={productStylePhotos}
        activeIndex={activeIndex}
        setActiveIndex={() => {}}
      />
    );

    const imageElement = getByAltText(`Slide ${activeIndex + 1}`);
    expect(imageElement).to.exist;
    expect(imageElement.src).to.equal(`http://localhost:3000/${productStylePhotos.results[activeIndex].photos[0].url}`);
  });




});