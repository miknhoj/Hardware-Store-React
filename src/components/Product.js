import React, { Component } from 'react'

class Product extends Component{

    deleteProduct = (event) => {
        this.props.deleteProductFromProductList(this.props.index)
    }

    render () {
        const { productName, description, price } = this.props.product

        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                <div><input type="submit" value="Delete Product" onClick={this.deleteProduct}/></div>
            </div>
        )
    }
}

export default Product