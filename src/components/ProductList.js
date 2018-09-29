import React, {Component} from 'react'
import Product from './Product';

class ProductList extends Component {

    render () {
        const productList = this.props.productList.map((product, i)=> {
            return (
                <Product 
                key={i} 
                product={product}
                index={i}
                deleteProductFromProductList={this.props.deleteProductFromProductList}
                />
        )
            })
        return (
            <div>
                {productList}
            </div>
        )
    }
}

export default ProductList