import "./style.scss";
import chair from "./images/chair.svg";

const Description = () => {
  return `
    <div class = "description">
      <h1>Samurai chair features</h1>
      <p class = "des-txt">Here the key advantage will be expanded in more detail. Fourth generation Samurai, in production since September 2020. Fixed dozens of shortcomings of previous generations</p>

      <div class = "details">
        <div class="info">
          <div class = "feature">
            <p class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
          <div class = "feature">
            <p class ="feature-header" class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
          <div class = "feature">
            <p class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
          <div class = "feature">
            <p class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
        </div>

        <img class = "chair-img" src="${chair}"/>

        <div class="info">
          <div class = "feature">
            <p class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
          <div class = "feature">
            <p class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
          <div class = "feature">
            <p class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
          <div class = "feature">
            <p class ="feature-header">Individual settings</p>
            <p class ="feature-description">Considering key behavioral scenarios, the high quality of positional research contributes to
            </p>
          </div>
        </div>
      </div>

    </div>
  `;
};

export default Description;
