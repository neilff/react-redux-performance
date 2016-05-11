import React from 'react';

import { getFinalTotal, getItemSubtotal } from 'modules/cart/selectors';

import CartItems from 'modules/cart/components/CartItems';
import TaxCalculator from 'modules/cart/components/TaxCalculator';
import DisplayValue from 'modules/cart/components/DisplayValue';
import AvailableItems from 'modules/cart/components/AvailableItems';

function ShoppingCart() {
  return (
    <main
      style={{ maxWidth: 900, margin: '4rem auto' }}
      className="flex flex-column justify-center">
      <div className="flex-auto">
        <table className="table table-light">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Cost Per Unit</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <CartItems />
          <tfoot>
            <tr>
              <td className="bold align-middle" colSpan="4">
                <div className="right">Total Tax</div>
              </td>
              <td className="bold align-middle">
                <TaxCalculator />
              </td>
            </tr>
            <tr>
              <td className="bold align-middle" colSpan="4">
                <div className="right">Subtotal</div>
              </td>
              <td className="bold align-middle">
                <DisplayValue id="subtotal" selector={ getItemSubtotal } />
              </td>
            </tr>
            <tr>
              <td className="bold align-middle" colSpan="4">
                <div className="right">Total</div>
              </td>
              <td className="bold align-middle">
                <DisplayValue id="total" selector={ getFinalTotal } />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="flex-auto">
        <AvailableItems />
      </div>
    </main>
  );
}

ShoppingCart.displayName = 'ShoppingCart';
ShoppingCart.propTypes = {};
ShoppingCart.defaultProps = {};

export default ShoppingCart;
