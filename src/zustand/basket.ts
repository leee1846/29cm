import create from 'zustand';
import { IProductItem, TProductItems } from '@datas/productItems';
import { BASKET_KEY } from '@constants/keys';

interface IBasketStore {
  state: {
    items: TProductItems | null;
  };
  setBaskets: (productData: IProductItem) => void;
  removeBasket: (productNo: number) => void;
}

const basketStore = create<IBasketStore>(set => ({
  state: {
    items: (() => {
      const basketData = sessionStorage.getItem(BASKET_KEY);
      if (basketData) {
        return JSON.parse(basketData);
      }
      return null;
    })(),
  },
  setBaskets: productData => {
    set(store => {
      if (store.state.items) {
        const newBasketItems = [...store.state.items, productData];
        sessionStorage.setItem(BASKET_KEY, JSON.stringify(newBasketItems));
        return {
          ...store,
          state: {
            ...store.state,
            items: newBasketItems,
          },
        };
      }

      const newBasketItem = [productData];
      sessionStorage.setItem(BASKET_KEY, JSON.stringify(newBasketItem));
      return {
        ...store,
        state: {
          ...store.state,
          items: newBasketItem,
        },
      };
    });
  },
  removeBasket: productNo => {
    set(store => {
      if (
        store.state.items === null ||
        store.state.items.length < 1 ||
        !store.state.items.some(item => item.item_no === productNo)
      ) {
        return store;
      }

      const newBasketItem = store.state.items.filter(item => item.item_no !== productNo);
      sessionStorage.setItem(BASKET_KEY, JSON.stringify(newBasketItem));
      return {
        ...store,
        state: {
          ...store.state,
          items: newBasketItem,
        },
      };
    });
  },
}));

export default basketStore;
