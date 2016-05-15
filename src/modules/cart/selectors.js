import { createSelector } from 'reselect';

import { taxRates, itemsAvailable } from 'modules/cart/constants';

export const getItems = (state) => state.cart.get('items');
export const getSelectedState = (state) => state.cart.get('state');

export const getItemsWithTotals = createSelector(
  [ getItems ],
  (items) => {
    return items.map(i => {
      return i.set('total', i.get('price', 0) * i.get('quantity'));
    });
  }
);

export const getItemSubtotal = createSelector(
  [ getItemsWithTotals ],
  (items) => {
    return items.reduce((acc, i) => {
      return acc + i.get('total');
    }, 0);
  },
);

// Example of composing selectors
export const getTotalTax = createSelector(
  [ getSelectedState, getItemSubtotal ],
  (selectedState, subtotal) => {
    return subtotal * taxRates[selectedState];
  },
);

export const getFinalTotal = createSelector(
  [ getTotalTax, getItemSubtotal ],
  (totalTax, subtotal) => {
    return totalTax + subtotal;
  },
);

export const getAvailableItems = createSelector(
  [ getItems ],
  (items) => {
    return itemsAvailable.filter(i => !items.has(i.get('id')));
  },
);
