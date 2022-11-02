const BasketItem = ({
  img,
  header,
  desc,
  initPrice,
  currentPrice,
  quantity,
}) => {
  return `  <div class='orderedItem d-flex'>
            <div class='imgAndDesc d-flex justify-content-between align-items-center'>
                <img src='${img}'>
                <div class='itemInfo'>
                    <p class'heading'>${header}</p>
                    <p class='desc'>${desc}</p>
                </div>
            </div>
            <div class='pricePanel d-flex justify-content-between'>
                <div class='forMobile d-flex flex-column justify-content-center''>
                    <p class='currentPrice'>${currentPrice} ₽</p>
                    <p class='oldPrice'>${initPrice} ₽</p>
                </div>
                <div class='d-flex align-items-center'>
                    <button class='deductItem'></button>
                    <p class='quantity'>${quantity}</p>
                    <button class='addItem'></button>
                    <div class='forDekstop d-flex flex-column justify-content-center''>
                        <p class='currentPrice'>${currentPrice} ₽</p>
                        <p class='oldPrice'>${initPrice} ₽</p>
                    </div>
                    <button class='deleteItem'></button>
                </div>
            </div>
        </div>
  `;
};

export default BasketItem;
