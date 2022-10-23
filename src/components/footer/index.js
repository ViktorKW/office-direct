import './style.scss';
import footerLogo from '../../assets/icons/footerLogo.svg'
import logoSign from '../../assets/icons/logoSign.svg'
import jps from '../../assets/icons/jps.svg'
import cellPhone from '../../assets/icons/cellPhone.svg'
import mailBox from '../../assets/icons/mailBox.svg'
const Footer = () => {
  const menu = ['home', 'about', 'contact us'];


  return `
    <footer>
        <ul>
            <li class='officeDirect'><img src='${footerLogo}'> <div><img src='${logoSign}'> <a href='#'>Кресла Samurai</a></div></li>
            <li class='link'><a href='#' >О продукте</a></li>
            <li class='link'><a href='#' >Отзывы</a></li>
            <li class='link'><a href='#' >Доставка и оплата</a></li>
            <li class='link mb-0 m-large'><a href='#'  >Контакты</a></li>
            <li class='info number'><img src='${cellPhone}'><a href='#' >+7 (812) 600-31-24</a></li>
            <li class='info'><img src='${mailBox}'><a href='#' >zakaz@kreslasamurai.ru</a></li>
            <li class='info long'><img src='${jps}'><a href='#' >ул. Красного курсанта д.25, лит.в, оф. 114, бизнес-центр "RED CADET"</a></li>
            <li style='margin-bottom:6px' class='privacyPolicy'><a href='#' >Политика конфиденциальности</a></li>
            <li class='privacyPolicy'><a href='#' >© 2021 Все права защищены</a></li>
        </ul>
    
    </footer>
  `;
};

export default Footer;