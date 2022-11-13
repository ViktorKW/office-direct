import './style.scss';
import Footer from '../../components/footer';
import BasketPreview from '../../components/basketPreview';

const Basket = () => {
  return (
    <div class='basketContainer'>
      {BasketPreview()}
      {Footer()}
    </div>
  );
};

export default Basket;
