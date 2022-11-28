import create from 'zustand';
import { IProductItem, TProductItems } from '@datas/productItems';
import { CART_KEY } from '@constants/keys';

interface ICartStore {
  state: {
    items: TProductItems | null;
  };
  setCartList: (productData: IProductItem) => void;
  removeCartItem: (productNo: number) => void;
}

const cartStore = create<ICartStore>(set => ({
  state: {
    items: (() => {
      const basketData = sessionStorage.getItem(CART_KEY);
      if (basketData) {
        return JSON.parse(basketData);
      }
      return null;
    })(),
  },
  setCartList: productData => {
    set(store => {
      if (store.state.items) {
        const newCartList = [...store.state.items, productData];
        sessionStorage.setItem(CART_KEY, JSON.stringify(newCartList));
        return {
          ...store,
          state: {
            ...store.state,
            items: newCartList,
          },
        };
      }

      const newCartItem = [productData];
      sessionStorage.setItem(CART_KEY, JSON.stringify(newCartItem));
      return {
        ...store,
        state: {
          ...store.state,
          items: newCartItem,
        },
      };
    });
  },
  removeCartItem: productNo => {
    set(store => {
      if (
        store.state.items === null ||
        store.state.items.length < 1 ||
        !store.state.items.some(item => item.item_no === productNo)
      ) {
        return store;
      }

      const newCartItem = store.state.items.filter(item => item.item_no !== productNo);
      sessionStorage.setItem(CART_KEY, JSON.stringify(newCartItem));
      return {
        ...store,
        state: {
          ...store.state,
          items: newCartItem,
        },
      };
    });
  },
}));

export default cartStore;
