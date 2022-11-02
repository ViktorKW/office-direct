import "./style.scss";
import footerLogo from "../../assets/icons/footerLogo.svg";
import logoSign from "../../assets/icons/logoSign.svg";
import jps from "../../assets/icons/jps.svg";
import cellPhone from "../../assets/icons/cellPhone.svg";
import mailBox from "../../assets/icons/mailBox.svg";

const Footer = () => {
  const menu = ["home", "about", "contact us"];

  return `
    <footer>
    <div class='d-flex list justify-content-between'>
        <div class='d-flex-column'>
            <div class='officeDirect'>
              <img src='${footerLogo}'> 
              <div>
                <img src='${logoSign}'>
                <a href='#'>Кресла Samurai</a>
              </div>
            </div>
            <p style='margin-bottom:6px' class='privacyPolicy hideOnMobile'><a href='#' >Политика конфиденциальности</a></p>
            <p class='privacyPolicy hideOnMobile'><a href='#' >© 2021 Все права защищены</a></p>
        </div>
        <div class='d-flex-column'>
            <p class='link'><a href='#' >О продукте</a></p>
            <p class='link'><a href='#' >Отзывы</a></p>
            <p class='link'><a href='#' >Доставка и оплата</a></p>
        </div>
        <div class='d-flex-column'>
          <p class='link mb-0 m-large'><a href='#'  >Контакты</a></p>
          <p class='info number'><img src='${cellPhone}'><a href='#' >+7 (812) 600-31-24</a></p>
          <p class='info'><img src='${mailBox}'><a href='#' >zakaz@kreslasamurai.ru</a></p>
          <p class='info long'><img src='${jps}'><a href='#' >ул. Красного курсанта д.25, лит.в, оф. 114, бизнес-центр "RED CADET"</a></p>
          <p style='margin-bottom:6px' class='privacyPolicy hideOnDekstop'><a href='#' >Политика конфиденциальности</a></p>
          <p class='privacyPolicy hideOnDekstop'><a href='#' >© 2021 Все права защищены</a></p>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;
