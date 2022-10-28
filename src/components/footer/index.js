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
        <ul>
            <li class='officeDirect'><img src='${footerLogo}'> <div><strong>OfficeDirect</strong> <a href='#'>
            Samurai armchairs
            </a></div></li>
            <li class='link'><a href='#' >About product</a></li>
            <li class='link'><a href='#' >Reviews</a></li>
            <li class='link'><a href='#' >Delivery and payment</a></li>
            <li class='link mb-0 m-large'><a href='#'  >Contacts</a></li>
            <li class='info number'><img src='${cellPhone}'><a href='#' >+7 (812) 600-31-24</a></li>
            <li class='info'><img src='${mailBox}'><a href='#' >zakaz@kreslasamurai.ru</a></li>
            <li class='info long'><img src='${jps}'><a href='#' >Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678 </a></li>
            <li style='margin-bottom:6px' class='privacyPolicy'><a href='#' >
            Privacy Policy</a></li>
            <li class='privacyPolicy'><a href='#' >© 2021 All rights reserved</a></li>
        </ul>
    
    </footer>
  `;
};

export default Footer;
