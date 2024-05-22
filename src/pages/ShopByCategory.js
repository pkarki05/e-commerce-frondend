import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ShopByCategory = () => {
    const [categories, setCategories] = useState(null);
    const { categoryList } = useSelector(state => state.category);
    const { productList } = useSelector(state => state.product);
    const { slug } = useParams();

    useEffect(() => {
        const categoryInfo = categoryList.find(cat => cat.slug === slug);
        setCategories(categoryInfo);
    }, [slug, categoryList]);

    const filteredProducts = productList.filter(product => product.ParentCategory === slug);
    console.log('filteredproducts', filteredProducts)

    return (
        <>
            <section className="featured-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">{categories?.name}</h3>
                        </div>
                        {categories ? (
                            <>
                               
                                <div className="row">
                                    {filteredProducts.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            brand={product.brand}
                                            productTitle={product.title}
                                            price={product.price}
                                            description={product.description}
                                            productImg1={product.thumbnail}
                                            productImg2={product.imageUrls[1]}
                                            slug={product.slug}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ShopByCategory;
