interface IProductsKeys {
  all: [string];
  getProducts: () => [string, string];
}

const productsKeys: IProductsKeys = {
  all: ['products'],
  getProducts: () => [...productsKeys.all, 'get-products'],
};

export default productsKeys;
