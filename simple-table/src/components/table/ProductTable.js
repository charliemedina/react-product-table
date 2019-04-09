import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
  
    this.props.products.forEach((product) => {
      if(product.name.indexOf(filterText) === -1) {
        return;
      }
      if(inStockOnly && !product.stocked) {
        return;
      }
      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category = {product.category}
            key = {product.category}
          />
        );
      }
      rows.push(
        <ProductRow
          product = {product}
          key = {product.name}
        />
      );
      lastCategory = product.category;      
    });
  
    return(
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thread>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
  
export default ProductTable;