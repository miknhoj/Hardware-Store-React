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

    toggleAdminView = () => {
        this.setState({
            showAdminView: !this.state.showAdminView,

        })
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({itemCurrentlyOnSale})
    }

    render() {
        const adminView = <AdminView 
        productList = {this.state.productList}
        addNewProductToProductList={this.addNewProductToProductList}
        deleteProductFromProductList={this.deleteProductFromProductList} />

        const shopView = <ShopView 
        productList = {this.state.productList}
        />

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
                    <button onClick={this.toggleAdminView}>
                        {this.state.showAdminView ? 'Show Shop View' : 'Show Admin View'}
                    </button>
                </span>
        
            <div id="view-container">
                {this.state.showAdminView ? adminView : shopView}
            </div>
        </div>
        )
    }
}

export default HomePage;