import React, { Component } from 'react'

class Product extends Component{

    deleteProduct = (event) => {
        this.props.deleteProductFromProductList(this.props.index)
    }

    showOptions = () => {
        const viewMode = this. props.viewMode

        const adminOptions = (
            <div>
                <input type="submit" value="Delete Product" onClick={this.deleteProduct}/>
            </div>
        )

    switch (viewMode) {
        case 'ADMIN':
            return adminOptions
        // case 'SHOP' :
        //     return shopOptions
        default :
            return null
    }
    }

    render () {
        const { productName, description, price } = this.props.product
    
        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                {this.showOptions()}
            </div>
        )
    }
}

export default Product 