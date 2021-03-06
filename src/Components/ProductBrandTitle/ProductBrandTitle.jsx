import React from 'react';
import PropTypes from 'prop-types';
import './product-brand-title.css';

const ProductBrandTitle = props => (
  <div className="ProductBrandTitle">
    <p className="brandName">{props.brand}</p>
    <p className="itemTitle">{props.title}</p>
  </div>
);

ProductBrandTitle.propTypes = {
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductBrandTitle;
