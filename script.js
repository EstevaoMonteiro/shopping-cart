// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
 const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

 const loading = document.getElementsByClassName('loading')[0];
 const cartItems = document.getElementsByClassName('cart__items')[0];
 
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  loading.remove();
  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

 const listarProdutos = async () => {
  const itens = await fetchProducts('computador');
  const itemClass = document.querySelector('.items');
  await itens.results.forEach((elemento) => {
      itemClass.appendChild(createProductItemElement(elemento));
  });
};

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItems.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const elemento1 = async (e) => {
    const getElement = e.path[1];
    const getElement2 = getElement.firstChild.innerText;
    cartItems.appendChild(createCartItemElement(await fetchItem(getElement2)));
    saveCartItems(cartItems.innerText);
};

const comprasCarrinho = () => {
  const itemAdd = document.querySelectorAll('.item__add');
  itemAdd.forEach((e) => {
    e.addEventListener('click', elemento1);
  });
};

const elemento2 = () => {
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => {
    item.remove();
    cartItems.innerText = 0;
    totalPrice = 0;
  });
};

const eventClick = () => {
  const emptyCart = document.querySelector('.empty-cart');
  emptyCart.addEventListener('click', elemento2);
};

window.onload = async () => {
  await listarProdutos();
  await comprasCarrinho();
  await eventClick();
};