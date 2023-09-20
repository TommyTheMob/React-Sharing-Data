import React from "react";
import './productList.scss'

class ProductList extends React.Component {
    render() {
        const total = this.props.cartItems
            .reduce((acc, item) => acc + item.price, 0)
        return (
            <div className="products">
                <ul className="products__list">
                    {this.props.cartItems.map(item => (
                        <li key={item.id} className="products__item">
                            <span className="products__name">{item.name}</span>
                            <span className="products__price">{`${item.price}$`}</span>
                        </li>
                    ))}
                </ul>
                <div className="products__total">{`Total: $${total}`}</div>
            </div>
        )
    }
}

export default ProductList