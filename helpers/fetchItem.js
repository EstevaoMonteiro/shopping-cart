const fetchItem = async (itemId) => {
  const endPoint = `https://api.mercadolibre.com/items/${itemId}`;
  try {
    const response = await fetch(endPoint);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
