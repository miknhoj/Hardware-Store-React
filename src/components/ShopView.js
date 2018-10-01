import React, {Component} from 'react';
import ProductList from './ProductList';


class ShopView extends Component {
    render() {
        return (
            <div>
                <h1>Shop View</h1>
                <h2>Products</h2>
                <ProductList 
                productList = {this.props.productList}
                deleteProductFromProductList={this.props.deleteProductFromProductList}
                viewMode={'SHOP'}
                />
            </div>

        )
    }
}

export default ShopView;
