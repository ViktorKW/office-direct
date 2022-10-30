const BasketTotal = (init, current) => {
  return `
    <div>
        <div class='total d-flex align-items-center'><p class='generalPrice'>Total: <span class="oldPrice">${init} ₽ </span>${current} ₽</p></div>
    </div>
  `;
};

export default BasketTotal;
