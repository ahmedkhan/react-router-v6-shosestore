import React from 'react'
import { useParams } from "react-router-dom";
import { useSingleProduct } from '../custom-hooks/';
import { formatNumber } from '../helpers/utils';

function ProductDetails() {

  const { slug } = useParams();
  const [product, isLoading] = useSingleProduct(slug);
  if (isLoading) return <p>Loading...</p>
  console.log(product)
  return (
    <div className="container" id="product-section">
      <div className="text-center mt-5">
        <h1>Product Details</h1>
        <p>This is the Details Page.</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }}
            className="image-responsive"
            src={product.image.fields.file.url}
            alt={product.title}
          />
        </div>
        <div className="col-md-6">
          <div className="col-md-12">
            <h1 className="text-left">{product.title}</h1>
            <p className="description">
              Classic film camera. Uses 620 roll film.
           inch image size.</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
          </div>
          <div className="col-md-3">
            <span className="sr-only">Four out of Five Stars</span>
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
            <span className="label label-success">4</span>
          </div>

        </div>
      </div>
    </div>
  )
}



export default ProductDetails;