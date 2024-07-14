import React from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';
function Kid() {
  const kidItems = all_products.filter((product) => {
    return product.category === 'kid';
  });
  console.log(kidItems);
  return (
    <div>
      <h1 className="text-center">KID'S CLOTHING</h1>
      <div className="grid grid-cols-3 gap-6">
        {kidItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Kid;