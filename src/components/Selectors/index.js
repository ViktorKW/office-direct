import "./style.scss";
import cube from "./icons/cube.svg";
import leather from "./icons/leather.svg";
import net from "./icons/net.svg";

const Selectors = () => {
  return `
  <div class = "selectors">

    <div class="container">
      <label>
      Backrest</label>
      <div class = "combo">
        <img src = "${net}"/>
        <select>
          <option value="value1">Сhair mesh</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
    </div>


    <div class="container">
      <label>Сhair seat</label>
      <div class = "combo">
        <img src = "${leather}"/>
        <select>
          <option value="value1">Leather</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
    </div>


    <div class="container">
      <label>Headrest</label>
      <div class = "combo">
        <img src = "${cube}"/>
        <select>
          <option value="value1">3D</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
    </div>


    <div class="container">
      <label>Armrests</label>
      <div class = "combo">
        <select>
          <option value="value1">All</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
    </div>
  </div>`;
};
export default Selectors;
