const BasketTotal = (init, current) => {
  return (
    <div>
        <div className='total d-flex align-items-center'><p class='generalPrice'>Итого: <span class="oldPrice">{init} ₽ </span>{current} ₽</p></div>
    </div>
  )
};

export default BasketTotal;
