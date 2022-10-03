const fetchProducts = async (query) => {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const request = await fetch(endPoint);
  const response = await request.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
