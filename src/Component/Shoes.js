import React from 'react';

const Shoes = ({
    shoe,
    shoesData,
    setShoesData,
    cartShoesData,
    setCartShoesData,
}) => {
    // change the inCart property of shoes when "add to cart" is clicked
    const handleAddToCart = (id) => {
        let tempShoeData = shoesData.map((item) => {
            if (item.id === id) {
                item.inCart = !item.inCart;

                // add the "in cart" item to cart shoes data
                setCartShoesData([...cartShoesData, item]);
                return item;
            } else {
                return item;
            }
        });

        setShoesData(tempShoeData);
    };

    return (
        <li className='shoe-in-list'>
            <div className='img-container'>
                <img src={shoe.image} alt={shoe.name} />
            </div>
            <div className='details-container'>
                <h2>{shoe.name}</h2>
                <h3>${shoe.price}</h3>
                <button
                    className={
                        shoe.inCart ? 'button-incart' : 'button-notincart'
                    }
                    onClick={() => handleAddToCart(shoe.id)}
                    disabled={shoe.inCart}
                >
                    {shoe.inCart ? 'In the Cart' : 'Add to Cart'}
                </button>
            </div>
        </li>
    );
};

export default Shoes;
