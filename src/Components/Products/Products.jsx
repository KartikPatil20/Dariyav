import React from 'react';
import '../Products/Products.css';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';


const Products = () => {
    return (
        <section className='products'>
            <div className="product-list">
                <div className="products-img">
                    <img src={one} alt="product" />
                </div>
                <div className="products-info">
                    <h1>Tempered Glass</h1>
                    <p>Tempered glass is a kind of safety glass that is known for its strength and robust quality.</p>
                </div>
            </div>
            <div className="product-list">
                <div className="products-img">
                    <img src={two} alt="product" />
                </div>
                <div className="products-info">
                    <h1>Heat Strengthened Glass</h1>
                    <p>Heat strengthened glass is a semi-tempered glass, which has been strengthened thermally.</p>
                </div>
            </div>
            <div className="product-list">
                <div className="products-img">
                    <img src={three} alt="product" />
                </div>
                <div className="products-info">
                    <h1>Insulated Glass</h1>
                    <p>Insulating glass refers to glass that is made to prevent significant heat transfer into or out of a home or building.</p>
                </div>
            </div>
            <div className="product-list">
                <div className="products-img">
                    <img src={four} alt="product" />
                </div>
                <div className="products-info">
                    <h1>Laminated Glass</h1>
                    <p>Laminated glass is a layered type of glass with a laminated sheet resting between 2 layers of glass.</p>
                </div>
            </div>
            <div className="product-list">
                <div className="products-img">
                    <img src={five} alt="product" />
                </div>
                <div className="products-info">
                    <h1>Safety Glass</h1>
                    <p>Safety glass is glass with additional safety features that make it less likely to break, or less likely to pose a threat when broken.</p>
                </div>
            </div>
            <div className="product-list">
                <div className="products-img">
                    <img src={six} alt="product" />
                </div>
                <div className="products-info">
                    <h1>Glass Bricks</h1>
                    <p>Glass brick, also known as glass block, is an architectural element made from glass.Glass bricks provide visual obscuration while admitting light.</p>
                </div>
            </div>
        </section>

    )
}

export default Products