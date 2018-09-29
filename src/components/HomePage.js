import React, {Component} from 'react'
import AdminView from './AdminView';
import ShopView from './ShopView';

class HomePage extends Component {
    state = {
        itemCurrentlyOnSale: "A Nail",
        editSaleItem: true,
        productList: [
            {
              productName: 'Hammer',
              description: 'Itsa hammer',
              price: 12.3,
            },
            {
              productName: 'Nail',
              description: 'Itsa nail',
              price: 0.12,
            }
          ],
        showAdminView: false,
      }
    
    addNewProductToProductList = (product) => {
        //take it out
        const productList = [...this.state.productList]
        //change it
        productList.push(product)
        //put it back
        this.setState({productList})
    }
    
    deleteProductFromProductList = (index) => {
        //take it out
        const productList = [...this.state.productList]
        //change it
        productList.splice(index, 1)
        //put it back
        this.setState({productList})
    }

    toggleEditSaleItem = () => {
        this.setState({
            editSaleItem: !this.state.editSaleItem,
        })
    }

    toggleView = () => {
        this.setState({
            view: !this.state.view,

        })
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({itemCurrentlyOnSale})
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>Currently on Sale: {this.state.itemCurrentlyOnSale}!</div>
                <span>
                    <button onClick={this.toggleEditSaleItem}>
                        {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                    </button>
                </span>
                 <div>
                    {this.state.editSaleItem ? 
                        <input 
                            type="text" 
                            value = {this.state.itemCurrentlyOnSale} 
                            onChange = {this.handleItemCurrentlyOnSaleChange} /> : 
                        null}
                 </div>

                  <span>
                    <button onClick={this.toggleView}>
                        {this.state.view ? 'Admin View' : 'Shop View'}
                    </button>
                </span>

                 <AdminView 
                    productList = {this.state.productList}
                    addNewProductToProductList={this.addNewProductToProductList}
                    deleteProductFromProductList={this.deleteProductFromProductList} />

                <ShopView 
                    productList = {this.state.productList}
                    />
            </div>
        )
    }
}

export default HomePage;