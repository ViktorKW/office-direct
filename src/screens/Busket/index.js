import "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import BusketPreview from "../../components/busketPreview";
// ${Header()}
const Busket = () => {
  return `
    <div class = "busketContainer">
      ${BusketPreview()}
      ${Footer()}
    </div>
  `;
};

export default Busket;