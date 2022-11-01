import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {/* If images are available then display the first image for the product (product can have multiple images). */}
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          ></img>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
