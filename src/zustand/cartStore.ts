import create from 'zustand';
import { IProductItem } from '@datas/productItems';
import { CART_KEY } from '@constants/keys';

interface ICartItem extends IProductItem {
  check: boolean;
  amount: number;
}
interface ICartStore {
  state: {
    items: ICartItem[] | null;
  };
  setCartList: (productData: IProductItem) => void;
  removeCartItem: (productNo: number) => void;
  setCartCheck: (productNo: number) => void;
  setCartAmount: ({ productNo, amount }: { productNo: number; amount: number }) => void;
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
        const newCartList = [...store.state.items, { ...productData, check: true, amount: 1 }];
        sessionStorage.setItem(CART_KEY, JSON.stringify(newCartList));
        return {
          ...store,
          state: {
            ...store.state,
            items: newCartList,
          },
        };
      }

      const newCartItem = [{ ...productData, check: true, amount: 1 }];
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
  setCartCheck: productNo => {
    set(store => {
      if (
        store.state.items === null ||
        store.state.items.length < 1 ||
        !store.state.items.some(item => item.item_no === productNo)
      ) {
        return store;
      }

      const newCartItems = store.state.items.map(item => {
        if (item.item_no === productNo) {
          return { ...item, check: !item.check };
        }
        return item;
      });

      sessionStorage.setItem(CART_KEY, JSON.stringify(newCartItems));
      return {
        ...store,
        state: {
          ...store.state,
          items: newCartItems,
        },
      };
    });
  },
  setCartAmount: ({ productNo, amount }) => {
    set(store => {
      if (
        store.state.items === null ||
        store.state.items.length < 1 ||
        !store.state.items.some(item => item.item_no === productNo)
      ) {
        return store;
      }

      const newCartItems = store.state.items.map(item => {
        if (item.item_no === productNo) {
          return { ...item, amount };
        }
        return item;
      });
      sessionStorage.setItem(CART_KEY, JSON.stringify(newCartItems));
      return {
        ...store,
        state: {
          ...store.state,
          items: newCartItems,
        },
      };
    });
  },
}));

export default cartStore;
