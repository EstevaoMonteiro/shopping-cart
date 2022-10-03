require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it("Execute a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada", () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test("Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador", () => {
    fetchProducts('computador');
    const endPoint = "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    expect(fetch).toBeCalledWith(endPoint);
  });
  it("Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.", async () => {
    const itens = await fetchProducts('computador');
    expect(itens).toBe(computadorSearch);
  });
});
